import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js'
import { PrismaService } from '../prisma/prisma.service.js';
import { OpportunityStatus } from '../../generated/prisma/enums.js';
import { CreateOpportunityDto } from './dto/create-opportunity.dto.js';
import { ListOpportunitiesQueryDto } from './dto/list-opportunities-query.dto.js';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto.js';
import { UpdateOpportunityStatusDto } from './dto/update-opportunity-status.dto.js';
import { CreateActivityDto } from './dto/create-activity.dto.js';
import { ListActivitiesQueryDto } from './dto/list-activities-query.dto.js';

@Injectable()
export class OpportunitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    dto: CreateOpportunityDto,
    currentUserId: number,
  ) {
    // Validate experience range.
    if (
      dto.experienceMin !== undefined &&
      dto.experienceMax !== undefined &&
      dto.experienceMax < dto.experienceMin
    ) {
      throw new BadRequestException(
        'Maximum experience cannot be less than minimum experience',
      );
    }

    // Validate salary range.
    if (
      dto.salaryMin !== undefined &&
      dto.salaryMax !== undefined &&
      dto.salaryMax < dto.salaryMin
    ) {
      throw new BadRequestException(
        'Maximum salary cannot be less than minimum salary',
      );
    }

    // Validate currency format.
    if (
      dto.salaryCurrency !== undefined &&
      !/^[A-Za-z]{3}$/.test(dto.salaryCurrency)
    ) {
      throw new BadRequestException(
        'Salary currency must be a three-letter currency code',
      );
    }

    // Create the opportunity.
    return this.prisma.opportunity.create({
      data: {
        title: dto.title.trim(),
        description: dto.description.trim(),

        companyName: dto.companyName?.trim() || null,
        clientContactName: dto.clientContactName?.trim() || null,
        clientContactEmail: dto.clientContactEmail?.trim().toLowerCase() || null,

        location: dto.location?.trim() || null,
        employmentType: dto.employmentType,
        workplaceType: dto.workplaceType,
        seniorityLevel: dto.seniorityLevel?.trim() || null,

        experienceMin: dto.experienceMin,
        experienceMax: dto.experienceMax,
        salaryMin: dto.salaryMin,
        salaryMax: dto.salaryMax,
        salaryCurrency: dto.salaryCurrency?.toUpperCase() || null,
        openingsCount: dto.openingsCount,

        requiredSkills: dto.requiredSkills ?? [],
        preferredSkills: dto.preferredSkills ?? [],
        responsibilities: dto.responsibilities ?? [],
        educationRequirement: dto.educationRequirement?.trim() || null,
        mustHaveRequirements: dto.mustHaveRequirements ?? [],
        niceToHaveRequirements: dto.niceToHaveRequirements ?? [],

        sourceType: dto.sourceType,
        sourceName: dto.sourceName?.trim() || null,
        sourceUrl: dto.sourceUrl?.trim() || null,
        sourceNotes: dto.sourceNotes?.trim() || null,

        priority: dto.priority,
        qualificationNotes: dto.qualificationNotes?.trim() || null,

        // Never accept these values from the request body.
        ownerId: currentUserId,
        createdById: currentUserId,
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findAll(query: ListOpportunitiesQueryDto) {
  const {
    page = 1,
    limit = 10,
    status,
    priority,
    search,
    sortBy = 'createdAt',
    sortOrder = 'desc',
  } = query;

  const allowedSortFields = [
    'createdAt',
    'updatedAt',
    'title',
    'priority',
    'status',
  ] as const;

  if (
    !allowedSortFields.includes(
      sortBy as (typeof allowedSortFields)[number],
    )
  ) {
    throw new BadRequestException('Invalid sortBy field');
  }

  if (!['asc', 'desc'].includes(sortOrder)) {
    throw new BadRequestException(
      'sortOrder must be asc or desc',
    );
  }

  const where: Prisma.OpportunityWhereInput = {
    ...(status !== undefined && { status }),
    ...(priority !== undefined && { priority }),
    ...(search?.trim() && {
      OR: [
        {
          title: {
            contains: search.trim(),
            mode: 'insensitive',
          },
        },
        {
          companyName: {
            contains: search.trim(),
            mode: 'insensitive',
          },
        },
      ],
    }),
  };

  const [items, total] = await this.prisma.$transaction([
    this.prisma.opportunity.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    }),
    this.prisma.opportunity.count({ where }),
  ]);

  return {
    data: items,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
 }

 async findOne(id: number) {
  const opportunity = await this.prisma.opportunity.findUnique({
    where: { id },
    include: {
      owner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      createdBy: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  if (!opportunity) {
    throw new NotFoundException(
      `Opportunity with ID ${id} not found`,
    );
  }

  return opportunity;
 }

  async update(id: number, dto: UpdateOpportunityDto) {
    if (Object.keys(dto).length === 0) {
     throw new BadRequestException(
      'At least one field must be provided to update the opportunity',
     );
    }
    const existing = await this.prisma.opportunity.findUnique({
      where: { id },
      select: {
        id: true,
        experienceMin: true,
        experienceMax: true,
        salaryMin: true,
        salaryMax: true,
      },
    });

    if (!existing) {
      throw new NotFoundException(`Opportunity with ID ${id} not found`);
    }

    // Validate the effective experience range, including unchanged values.
    const experienceMin = dto.experienceMin ?? existing.experienceMin;
    const experienceMax = dto.experienceMax ?? existing.experienceMax;

    if (
      experienceMin !== null &&
      experienceMin !== undefined &&
      experienceMax !== null &&
      experienceMax !== undefined &&
      experienceMax < experienceMin
    ) {
      throw new BadRequestException(
        'Maximum experience cannot be less than minimum experience',
      );
    }

    // Validate the effective salary range.
    const salaryMin = dto.salaryMin ?? existing.salaryMin;
    const salaryMax = dto.salaryMax ?? existing.salaryMax;

    if (
      salaryMin !== null &&
      salaryMin !== undefined &&
      salaryMax !== null &&
      salaryMax !== undefined &&
      Number(salaryMax) < Number(salaryMin)
    ) {
      throw new BadRequestException(
        'Maximum salary cannot be less than minimum salary',
      );
    }

    if (
      dto.salaryCurrency !== undefined &&
      !/^[A-Za-z]{3}$/.test(dto.salaryCurrency)
    ) {
      throw new BadRequestException(
        'Salary currency must be a three-letter currency code',
      );
    }

    // Construct the update payload from explicitly provided fields.
    const data: Prisma.OpportunityUpdateInput = {};

    if (dto.title !== undefined) data.title = dto.title.trim();
    if (dto.description !== undefined) data.description = dto.description.trim();

    if (dto.companyName !== undefined) {
      data.companyName = dto.companyName.trim() || null;
    }
    if (dto.clientContactName !== undefined) {
      data.clientContactName = dto.clientContactName.trim() || null;
    }
    if (dto.clientContactEmail !== undefined) {
      data.clientContactEmail = dto.clientContactEmail.trim().toLowerCase() || null;
    }

    if (dto.location !== undefined) data.location = dto.location.trim() || null;
    if (dto.employmentType !== undefined) data.employmentType = dto.employmentType;
    if (dto.workplaceType !== undefined) data.workplaceType = dto.workplaceType;
    if (dto.seniorityLevel !== undefined) {
      data.seniorityLevel = dto.seniorityLevel.trim() || null;
    }

    if (dto.experienceMin !== undefined) data.experienceMin = dto.experienceMin;
    if (dto.experienceMax !== undefined) data.experienceMax = dto.experienceMax;
    if (dto.salaryMin !== undefined) data.salaryMin = dto.salaryMin;
    if (dto.salaryMax !== undefined) data.salaryMax = dto.salaryMax;
    if (dto.salaryCurrency !== undefined) {
      data.salaryCurrency = dto.salaryCurrency.toUpperCase();
    }
    if (dto.openingsCount !== undefined) data.openingsCount = dto.openingsCount;

    if (dto.requiredSkills !== undefined) data.requiredSkills = dto.requiredSkills;
    if (dto.preferredSkills !== undefined) data.preferredSkills = dto.preferredSkills;
    if (dto.responsibilities !== undefined) data.responsibilities = dto.responsibilities;
    if (dto.educationRequirement !== undefined) {
      data.educationRequirement = dto.educationRequirement.trim() || null;
    }
    if (dto.mustHaveRequirements !== undefined) {
      data.mustHaveRequirements = dto.mustHaveRequirements;
    }
    if (dto.niceToHaveRequirements !== undefined) {
      data.niceToHaveRequirements = dto.niceToHaveRequirements;
    }

    if (dto.sourceType !== undefined) data.sourceType = dto.sourceType;
    if (dto.sourceName !== undefined) data.sourceName = dto.sourceName.trim() || null;
    if (dto.sourceUrl !== undefined) data.sourceUrl = dto.sourceUrl.trim() || null;
    if (dto.sourceNotes !== undefined) data.sourceNotes = dto.sourceNotes.trim() || null;

    if (dto.priority !== undefined) data.priority = dto.priority;
    if (dto.qualificationNotes !== undefined) {
      data.qualificationNotes = dto.qualificationNotes.trim() || null;
    }

    return this.prisma.opportunity.update({
      where: { id },
      data,
      include: {
        owner: {
          select: { id: true, name: true, email: true },
        },
        createdBy: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }
 
  async updateStatus(
    id: number,
    dto: UpdateOpportunityStatusDto,
    currentUserId: number,
  ) {
    // A lost opportunity must have a meaningful reason.
    const reason = dto.reason?.trim();

    if (dto.status === OpportunityStatus.CLOSED_LOST && !reason) {
      throw new BadRequestException(
        'A reason is required when closing an opportunity as lost',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      const existing = await tx.opportunity.findUnique({
        where: { id },
        select: {
          id: true,
          status: true,
        },
      });

      if (!existing) {
        throw new NotFoundException(
          `Opportunity with ID ${id} not found`,
        );
      }

      if (existing.status === dto.status) {
        throw new BadRequestException(
          `Opportunity is already in status ${dto.status}`,
        );
      }

      const now = new Date();

      const isClosed =
        dto.status === OpportunityStatus.FILLED_WON ||
        dto.status === OpportunityStatus.CLOSED_LOST;

      // Update the opportunity status and lifecycle timestamps.
      const opportunity = await tx.opportunity.update({
        where: { id },
        data: {
          status: dto.status,

          ...(dto.status === OpportunityStatus.QUALIFIED
            ? { qualifiedAt: now }
            : {}),

          ...(isClosed
            ? { closedAt: now }
            : { closedAt: null }),
        },
        include: {
          owner: {
            select: { id: true, name: true, email: true },
          },
          createdBy: {
            select: { id: true, name: true, email: true },
          },
        },
      });

      // Record the transition in the audit history.
      await tx.opportunityStatusHistory.create({
        data: {
          opportunityId: id,
          fromStatus: existing.status,
          toStatus: dto.status,
          reason: reason || null,
          changedById: currentUserId,
        },
      });

      return opportunity;
    });
  }

  
  async getStatusHistory(id: number) {
    const opportunity = await this.prisma.opportunity.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!opportunity) {
      throw new NotFoundException(
        `Opportunity with ID ${id} not found`,
      );
    }

    return this.prisma.opportunityStatusHistory.findMany({
      where: { opportunityId: id },
      orderBy: { createdAt: 'desc' },
      include: {
        changedBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  
  async createActivity(
    opportunityId: number,
    dto: CreateActivityDto,
    currentUserId: number,
  ) {
    // Validate that the opportunity exists.
    const opportunity = await this.prisma.opportunity.findUnique({
      where: { id: opportunityId },
      select: { id: true },
    });

    if (!opportunity) {
      throw new NotFoundException(
        `Opportunity with ID ${opportunityId} not found`,
      );
    }

    // Validate and parse the optional interaction date.
    let occurredAt: Date | undefined;

    if (dto.occurredAt !== undefined) {
      occurredAt = new Date(dto.occurredAt);

      if (Number.isNaN(occurredAt.getTime())) {
        throw new BadRequestException(
          'occurredAt must be a valid date and time',
        );
      }
    }

    const summary = dto.summary.trim();

    if (!summary) {
      throw new BadRequestException(
        'Activity summary cannot be empty',
      );
    }

    return this.prisma.activity.create({
      data: {
        opportunityId,
        type: dto.type,
        summary,
        details: dto.details?.trim() || null,
        ...(occurredAt ? { occurredAt } : {}),
        createdById: currentUserId,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }
 
  

  async getActivities(
    opportunityId: number,
    query: ListActivitiesQueryDto,
  ) {
    const opportunity = await this.prisma.opportunity.findUnique({
      where: { id: opportunityId },
      select: { id: true },
    });

    if (!opportunity) {
      throw new NotFoundException(
        `Opportunity with ID ${opportunityId} not found`,
      );
    }

    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;

    const where: Prisma.ActivityWhereInput = {
      opportunityId,
      ...(query.type ? { type: query.type } : {}),
    };

    const [activities, total] = await this.prisma.$transaction([
      this.prisma.activity.findMany({
        where,
        skip,
        take: limit,
        orderBy: [
          { occurredAt: query.sortOrder ?? 'desc' },
          { id: 'desc' },
        ],
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),
      this.prisma.activity.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data: activities,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1 && total > 0,
      },
    };
  }

}
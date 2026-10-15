import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js'
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateOpportunityDto } from './dto/create-opportunity.dto.js';
import { ListOpportunitiesQueryDto } from './dto/list-opportunities-query.dto.js';

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
}
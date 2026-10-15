export const mockJobOpportunities:any = [
  {
    id: "opp_01J9XYZ123",
    referenceNumber: "JOB-2026-000123",
    title: "Senior Full Stack Developer",
    clientId: "client_001",
    salesOwnerId: "user_001",
    createdBy: "user_001",

    source: {
      type: "linkedin",
      url: "https://www.linkedin.com/jobs/view/example",
      externalJobId: null,
      discoveredAt: "2026-10-09T09:00:00Z",
      metadata: {},
    },

    role: {
      category: "full_stack",
      seniority: "senior",
      employmentType: "contract",
      openingsCount: 2,

      experienceRange: {
        minYears: 4,
        maxYears: 7,
      },

      workMode: "remote",

      location: {
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
        remoteAllowed: false,
      },

      salaryRange: {
        min: 1800000,
        max: 2800000,
        currency: "INR",
        period: "year",
      },

      targetStartDate: null,
    },

    jobDescription: {
      originalText:
        "We are looking for a Senior Full Stack Developer with strong experience in React, TypeScript, Node.js, REST APIs, and PostgreSQL. The candidate should have experience building scalable web applications, writing maintainable code, and collaborating with cross-functional teams.",
      documentId: null,
      version: 1,
    },

    requirements: {
      skills: [
        {
          name: "React",
          importance: "must_have",
          source: "sales_verified",
        },
        {
          name: "TypeScript",
          importance: "must_have",
          source: "sales_verified",
        },
        {
          name: "Node.js",
          importance: "must_have",
          source: "sales_verified",
        },
        {
          name: "PostgreSQL",
          importance: "preferred",
          source: "jd_extracted",
        },
        {
          name: "AWS",
          importance: "preferred",
          source: "jd_extracted",
        },
      ],

      certifications: [],
      minimumEducation: null,
      domainExperience: [],
      otherConstraints: [],
      reviewStatus: "reviewed",
      reviewedBy: "user_001",
      reviewedAt: "2026-10-09T10:00:00Z",
    },

    commercial: {
      engagementType: "direct_hire",
      feeModel: "percentage",

      expectedRevenue: {
        amount: 300000,
        currency: "INR",
      },

      priority: "high",
      targetClosureDate: "2026-11-30",
      clientAuthorization: "pending",
    },

    workflow: {
      status: "ready_for_matching",
      closureReason: null,
      nextAction: "run_candidate_matching",
      nextActionDueAt: "2026-10-10T09:00:00Z",
      onHoldReason: null,
    },

    metrics: {
      candidatesMatched: 0,
      candidatesShortlisted: 0,
      candidatesSubmitted: 0,
      candidatesInterviewing: 0,
      offersMade: 0,
      hiresCompleted: 0,
    },

    notes:
      "Client prefers candidates with experience building production-grade web applications.",

    audit: {
      createdAt: "2026-10-09T09:00:00Z",
      updatedAt: "2026-10-09T10:00:00Z",
      closedAt: null,
      closedBy: null,
      version: 1,
    },
  },
];
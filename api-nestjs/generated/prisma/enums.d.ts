export declare const UserRole: {
    readonly SALESPERSON: "SALESPERSON";
    readonly MANAGER: "MANAGER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const OpportunityStatus: {
    readonly NEW: "NEW";
    readonly QUALIFYING: "QUALIFYING";
    readonly QUALIFIED: "QUALIFIED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly ON_HOLD: "ON_HOLD";
    readonly FILLED_WON: "FILLED_WON";
    readonly CLOSED_LOST: "CLOSED_LOST";
};
export type OpportunityStatus = (typeof OpportunityStatus)[keyof typeof OpportunityStatus];
export declare const OpportunityPriority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly URGENT: "URGENT";
};
export type OpportunityPriority = (typeof OpportunityPriority)[keyof typeof OpportunityPriority];
export declare const OpportunitySourceType: {
    readonly JOB_PLATFORM: "JOB_PLATFORM";
    readonly EMAIL: "EMAIL";
    readonly REFERRAL: "REFERRAL";
    readonly PHONE: "PHONE";
    readonly MEETING: "MEETING";
    readonly OTHER: "OTHER";
};
export type OpportunitySourceType = (typeof OpportunitySourceType)[keyof typeof OpportunitySourceType];
export declare const EmploymentType: {
    readonly FULL_TIME: "FULL_TIME";
    readonly PART_TIME: "PART_TIME";
    readonly CONTRACT: "CONTRACT";
    readonly TEMPORARY: "TEMPORARY";
    readonly FREELANCE: "FREELANCE";
    readonly INTERNSHIP: "INTERNSHIP";
    readonly OTHER: "OTHER";
};
export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType];
export declare const WorkplaceType: {
    readonly REMOTE: "REMOTE";
    readonly HYBRID: "HYBRID";
    readonly ONSITE: "ONSITE";
};
export type WorkplaceType = (typeof WorkplaceType)[keyof typeof WorkplaceType];
export declare const ActivityType: {
    readonly CALL: "CALL";
    readonly EMAIL: "EMAIL";
    readonly MEETING: "MEETING";
    readonly NOTE: "NOTE";
    readonly OTHER: "OTHER";
};
export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType];
export declare const FollowUpStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type FollowUpStatus = (typeof FollowUpStatus)[keyof typeof FollowUpStatus];

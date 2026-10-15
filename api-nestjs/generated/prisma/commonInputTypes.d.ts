import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumEmploymentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel> | $Enums.EmploymentType | null;
};
export type EnumWorkplaceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkplaceType | Prisma.EnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.WorkplaceType[] | Prisma.ListEnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.WorkplaceType[] | Prisma.ListEnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumWorkplaceTypeNullableFilter<$PrismaModel> | $Enums.WorkplaceType | null;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type EnumOpportunitySourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunitySourceType | Prisma.EnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunitySourceType[] | Prisma.ListEnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunitySourceType[] | Prisma.ListEnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunitySourceTypeFilter<$PrismaModel> | $Enums.OpportunitySourceType;
};
export type EnumOpportunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | Prisma.EnumOpportunityStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunityStatusFilter<$PrismaModel> | $Enums.OpportunityStatus;
};
export type EnumOpportunityPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityPriority | Prisma.EnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunityPriority[] | Prisma.ListEnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunityPriority[] | Prisma.ListEnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunityPriorityFilter<$PrismaModel> | $Enums.OpportunityPriority;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel>;
};
export type EnumWorkplaceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkplaceType | Prisma.EnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.WorkplaceType[] | Prisma.ListEnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.WorkplaceType[] | Prisma.ListEnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumWorkplaceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.WorkplaceType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWorkplaceTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWorkplaceTypeNullableFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type EnumOpportunitySourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunitySourceType | Prisma.EnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunitySourceType[] | Prisma.ListEnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunitySourceType[] | Prisma.ListEnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunitySourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.OpportunitySourceType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOpportunitySourceTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOpportunitySourceTypeFilter<$PrismaModel>;
};
export type EnumOpportunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | Prisma.EnumOpportunityStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOpportunityStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOpportunityStatusFilter<$PrismaModel>;
};
export type EnumOpportunityPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityPriority | Prisma.EnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunityPriority[] | Prisma.ListEnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunityPriority[] | Prisma.ListEnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunityPriorityWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOpportunityPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOpportunityPriorityFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | Prisma.EnumActivityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityType[] | Prisma.ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityType[] | Prisma.ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType;
};
export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | Prisma.EnumActivityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityType[] | Prisma.ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityType[] | Prisma.ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActivityTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActivityTypeFilter<$PrismaModel>;
};
export type EnumFollowUpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpStatus | Prisma.EnumFollowUpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FollowUpStatus[] | Prisma.ListEnumFollowUpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FollowUpStatus[] | Prisma.ListEnumFollowUpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFollowUpStatusFilter<$PrismaModel> | $Enums.FollowUpStatus;
};
export type EnumFollowUpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpStatus | Prisma.EnumFollowUpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FollowUpStatus[] | Prisma.ListEnumFollowUpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FollowUpStatus[] | Prisma.ListEnumFollowUpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFollowUpStatusWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFollowUpStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFollowUpStatusFilter<$PrismaModel>;
};
export type EnumOpportunityStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | Prisma.EnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumOpportunityStatusNullableFilter<$PrismaModel> | $Enums.OpportunityStatus | null;
};
export type EnumOpportunityStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | Prisma.EnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumOpportunityStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOpportunityStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOpportunityStatusNullableFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumEmploymentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel> | $Enums.EmploymentType | null;
};
export type NestedEnumWorkplaceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkplaceType | Prisma.EnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.WorkplaceType[] | Prisma.ListEnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.WorkplaceType[] | Prisma.ListEnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumWorkplaceTypeNullableFilter<$PrismaModel> | $Enums.WorkplaceType | null;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedEnumOpportunitySourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunitySourceType | Prisma.EnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunitySourceType[] | Prisma.ListEnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunitySourceType[] | Prisma.ListEnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunitySourceTypeFilter<$PrismaModel> | $Enums.OpportunitySourceType;
};
export type NestedEnumOpportunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | Prisma.EnumOpportunityStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunityStatusFilter<$PrismaModel> | $Enums.OpportunityStatus;
};
export type NestedEnumOpportunityPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityPriority | Prisma.EnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunityPriority[] | Prisma.ListEnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunityPriority[] | Prisma.ListEnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunityPriorityFilter<$PrismaModel> | $Enums.OpportunityPriority;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel>;
};
export type NestedEnumWorkplaceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkplaceType | Prisma.EnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.WorkplaceType[] | Prisma.ListEnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.WorkplaceType[] | Prisma.ListEnumWorkplaceTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumWorkplaceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.WorkplaceType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWorkplaceTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWorkplaceTypeNullableFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumOpportunitySourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunitySourceType | Prisma.EnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunitySourceType[] | Prisma.ListEnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunitySourceType[] | Prisma.ListEnumOpportunitySourceTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunitySourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.OpportunitySourceType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOpportunitySourceTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOpportunitySourceTypeFilter<$PrismaModel>;
};
export type NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | Prisma.EnumOpportunityStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOpportunityStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOpportunityStatusFilter<$PrismaModel>;
};
export type NestedEnumOpportunityPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityPriority | Prisma.EnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.OpportunityPriority[] | Prisma.ListEnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OpportunityPriority[] | Prisma.ListEnumOpportunityPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOpportunityPriorityWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOpportunityPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOpportunityPriorityFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | Prisma.EnumActivityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityType[] | Prisma.ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityType[] | Prisma.ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType;
};
export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | Prisma.EnumActivityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityType[] | Prisma.ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityType[] | Prisma.ListEnumActivityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActivityTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActivityTypeFilter<$PrismaModel>;
};
export type NestedEnumFollowUpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpStatus | Prisma.EnumFollowUpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FollowUpStatus[] | Prisma.ListEnumFollowUpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FollowUpStatus[] | Prisma.ListEnumFollowUpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFollowUpStatusFilter<$PrismaModel> | $Enums.FollowUpStatus;
};
export type NestedEnumFollowUpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpStatus | Prisma.EnumFollowUpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FollowUpStatus[] | Prisma.ListEnumFollowUpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FollowUpStatus[] | Prisma.ListEnumFollowUpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFollowUpStatusWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFollowUpStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFollowUpStatusFilter<$PrismaModel>;
};
export type NestedEnumOpportunityStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | Prisma.EnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumOpportunityStatusNullableFilter<$PrismaModel> | $Enums.OpportunityStatus | null;
};
export type NestedEnumOpportunityStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | Prisma.EnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.OpportunityStatus[] | Prisma.ListEnumOpportunityStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumOpportunityStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOpportunityStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOpportunityStatusNullableFilter<$PrismaModel>;
};

import { RatePlan as TRatePlan } from "../api/ratePlan/RatePlan";

export const RATEPLAN_TITLE_FIELD = "id";

export const RatePlanTitle = (record: TRatePlan): string => {
  return record.id?.toString() || String(record.id);
};

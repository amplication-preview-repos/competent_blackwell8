import { Gds as TGds } from "../api/gds/Gds";

export const GDS_TITLE_FIELD = "id";

export const GdsTitle = (record: TGds): string => {
  return record.id?.toString() || String(record.id);
};

import { Ota as TOta } from "../api/ota/Ota";

export const OTA_TITLE_FIELD = "id";

export const OtaTitle = (record: TOta): string => {
  return record.id?.toString() || String(record.id);
};

import { UserAppAccess as TUserAppAccess } from "../api/userAppAccess/UserAppAccess";

export const USERAPPACCESS_TITLE_FIELD = "id";

export const UserAppAccessTitle = (record: TUserAppAccess): string => {
  return record.id?.toString() || String(record.id);
};

import { JsonValue } from "type-fest";
import { UserAppAccess } from "../userAppAccess/UserAppAccess";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userAppAccesses?: Array<UserAppAccess>;
  username: string;
};

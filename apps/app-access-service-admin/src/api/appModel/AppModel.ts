import { UserAppAccess } from "../userAppAccess/UserAppAccess";

export type AppModel = {
  cookies: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  url: string | null;
  userAppAccesses?: Array<UserAppAccess>;
};

import { AppModel } from "../appModel/AppModel";
import { User } from "../user/User";

export type UserAppAccess = {
  appField?: AppModel | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

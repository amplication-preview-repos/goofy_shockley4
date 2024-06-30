import { InputJsonValue } from "../../types";
import { UserAppAccessUpdateManyWithoutUsersInput } from "./UserAppAccessUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userAppAccesses?: UserAppAccessUpdateManyWithoutUsersInput;
  username?: string;
};

import { InputJsonValue } from "../../types";
import { UserAppAccessCreateNestedManyWithoutUsersInput } from "./UserAppAccessCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userAppAccesses?: UserAppAccessCreateNestedManyWithoutUsersInput;
  username: string;
};

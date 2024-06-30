import { UserAppAccessWhereInput } from "./UserAppAccessWhereInput";
import { UserAppAccessOrderByInput } from "./UserAppAccessOrderByInput";

export type UserAppAccessFindManyArgs = {
  where?: UserAppAccessWhereInput;
  orderBy?: Array<UserAppAccessOrderByInput>;
  skip?: number;
  take?: number;
};

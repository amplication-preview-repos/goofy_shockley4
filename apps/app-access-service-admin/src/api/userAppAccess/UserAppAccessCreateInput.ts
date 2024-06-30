import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAppAccessCreateInput = {
  appField?: AppModelWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAppAccessUpdateInput = {
  appField?: AppModelWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

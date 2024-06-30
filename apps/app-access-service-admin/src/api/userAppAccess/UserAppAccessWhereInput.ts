import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAppAccessWhereInput = {
  appField?: AppModelWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

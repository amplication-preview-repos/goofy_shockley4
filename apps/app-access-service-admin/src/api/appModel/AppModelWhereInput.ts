import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserAppAccessListRelationFilter } from "../userAppAccess/UserAppAccessListRelationFilter";

export type AppModelWhereInput = {
  cookies?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
  userAppAccesses?: UserAppAccessListRelationFilter;
};

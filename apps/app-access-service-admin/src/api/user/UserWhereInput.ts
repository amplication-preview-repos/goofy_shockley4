import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserAppAccessListRelationFilter } from "../userAppAccess/UserAppAccessListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userAppAccesses?: UserAppAccessListRelationFilter;
  username?: StringFilter;
};

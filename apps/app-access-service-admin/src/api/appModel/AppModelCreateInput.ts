import { UserAppAccessCreateNestedManyWithoutAppModelsInput } from "./UserAppAccessCreateNestedManyWithoutAppModelsInput";

export type AppModelCreateInput = {
  cookies?: string | null;
  name?: string | null;
  url?: string | null;
  userAppAccesses?: UserAppAccessCreateNestedManyWithoutAppModelsInput;
};

import { UserAppAccessUpdateManyWithoutAppModelsInput } from "./UserAppAccessUpdateManyWithoutAppModelsInput";

export type AppModelUpdateInput = {
  cookies?: string | null;
  name?: string | null;
  url?: string | null;
  userAppAccesses?: UserAppAccessUpdateManyWithoutAppModelsInput;
};

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserAppAccessModuleBase } from "./base/userAppAccess.module.base";
import { UserAppAccessService } from "./userAppAccess.service";
import { UserAppAccessController } from "./userAppAccess.controller";
import { UserAppAccessResolver } from "./userAppAccess.resolver";

@Module({
  imports: [UserAppAccessModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserAppAccessController],
  providers: [UserAppAccessService, UserAppAccessResolver],
  exports: [UserAppAccessService],
})
export class UserAppAccessModule {}

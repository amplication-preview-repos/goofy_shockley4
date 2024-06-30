import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AppModelModuleBase } from "./base/appModel.module.base";
import { AppModelService } from "./appModel.service";
import { AppModelController } from "./appModel.controller";
import { AppModelResolver } from "./appModel.resolver";

@Module({
  imports: [AppModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [AppModelController],
  providers: [AppModelService, AppModelResolver],
  exports: [AppModelService],
})
export class AppModelModule {}

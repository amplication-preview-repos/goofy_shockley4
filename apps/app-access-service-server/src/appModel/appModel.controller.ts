import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AppModelService } from "./appModel.service";
import { AppModelControllerBase } from "./base/appModel.controller.base";

@swagger.ApiTags("appModels")
@common.Controller("appModels")
export class AppModelController extends AppModelControllerBase {
  constructor(
    protected readonly service: AppModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

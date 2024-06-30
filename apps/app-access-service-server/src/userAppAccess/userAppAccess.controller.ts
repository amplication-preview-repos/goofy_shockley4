import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserAppAccessService } from "./userAppAccess.service";
import { UserAppAccessControllerBase } from "./base/userAppAccess.controller.base";

@swagger.ApiTags("userAppAccesses")
@common.Controller("userAppAccesses")
export class UserAppAccessController extends UserAppAccessControllerBase {
  constructor(
    protected readonly service: UserAppAccessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

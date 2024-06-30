import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserAppAccessResolverBase } from "./base/userAppAccess.resolver.base";
import { UserAppAccess } from "./base/UserAppAccess";
import { UserAppAccessService } from "./userAppAccess.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserAppAccess)
export class UserAppAccessResolver extends UserAppAccessResolverBase {
  constructor(
    protected readonly service: UserAppAccessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

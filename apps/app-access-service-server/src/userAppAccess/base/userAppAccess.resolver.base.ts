/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserAppAccess } from "./UserAppAccess";
import { UserAppAccessCountArgs } from "./UserAppAccessCountArgs";
import { UserAppAccessFindManyArgs } from "./UserAppAccessFindManyArgs";
import { UserAppAccessFindUniqueArgs } from "./UserAppAccessFindUniqueArgs";
import { CreateUserAppAccessArgs } from "./CreateUserAppAccessArgs";
import { UpdateUserAppAccessArgs } from "./UpdateUserAppAccessArgs";
import { DeleteUserAppAccessArgs } from "./DeleteUserAppAccessArgs";
import { AppModel } from "../../appModel/base/AppModel";
import { User } from "../../user/base/User";
import { UserAppAccessService } from "../userAppAccess.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserAppAccess)
export class UserAppAccessResolverBase {
  constructor(
    protected readonly service: UserAppAccessService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserAppAccess",
    action: "read",
    possession: "any",
  })
  async _userAppAccessesMeta(
    @graphql.Args() args: UserAppAccessCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserAppAccess])
  @nestAccessControl.UseRoles({
    resource: "UserAppAccess",
    action: "read",
    possession: "any",
  })
  async userAppAccesses(
    @graphql.Args() args: UserAppAccessFindManyArgs
  ): Promise<UserAppAccess[]> {
    return this.service.userAppAccesses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserAppAccess, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserAppAccess",
    action: "read",
    possession: "own",
  })
  async userAppAccess(
    @graphql.Args() args: UserAppAccessFindUniqueArgs
  ): Promise<UserAppAccess | null> {
    const result = await this.service.userAppAccess(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserAppAccess)
  @nestAccessControl.UseRoles({
    resource: "UserAppAccess",
    action: "create",
    possession: "any",
  })
  async createUserAppAccess(
    @graphql.Args() args: CreateUserAppAccessArgs
  ): Promise<UserAppAccess> {
    return await this.service.createUserAppAccess({
      ...args,
      data: {
        ...args.data,

        appField: args.data.appField
          ? {
              connect: args.data.appField,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserAppAccess)
  @nestAccessControl.UseRoles({
    resource: "UserAppAccess",
    action: "update",
    possession: "any",
  })
  async updateUserAppAccess(
    @graphql.Args() args: UpdateUserAppAccessArgs
  ): Promise<UserAppAccess | null> {
    try {
      return await this.service.updateUserAppAccess({
        ...args,
        data: {
          ...args.data,

          appField: args.data.appField
            ? {
                connect: args.data.appField,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserAppAccess)
  @nestAccessControl.UseRoles({
    resource: "UserAppAccess",
    action: "delete",
    possession: "any",
  })
  async deleteUserAppAccess(
    @graphql.Args() args: DeleteUserAppAccessArgs
  ): Promise<UserAppAccess | null> {
    try {
      return await this.service.deleteUserAppAccess(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AppModel, {
    nullable: true,
    name: "appField",
  })
  @nestAccessControl.UseRoles({
    resource: "AppModel",
    action: "read",
    possession: "any",
  })
  async getAppField(
    @graphql.Parent() parent: UserAppAccess
  ): Promise<AppModel | null> {
    const result = await this.service.getAppField(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: UserAppAccess): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

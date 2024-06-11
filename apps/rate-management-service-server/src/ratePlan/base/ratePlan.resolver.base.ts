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
import { RatePlan } from "./RatePlan";
import { RatePlanCountArgs } from "./RatePlanCountArgs";
import { RatePlanFindManyArgs } from "./RatePlanFindManyArgs";
import { RatePlanFindUniqueArgs } from "./RatePlanFindUniqueArgs";
import { CreateRatePlanArgs } from "./CreateRatePlanArgs";
import { UpdateRatePlanArgs } from "./UpdateRatePlanArgs";
import { DeleteRatePlanArgs } from "./DeleteRatePlanArgs";
import { RatePlanService } from "../ratePlan.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RatePlan)
export class RatePlanResolverBase {
  constructor(
    protected readonly service: RatePlanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RatePlan",
    action: "read",
    possession: "any",
  })
  async _ratePlansMeta(
    @graphql.Args() args: RatePlanCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RatePlan])
  @nestAccessControl.UseRoles({
    resource: "RatePlan",
    action: "read",
    possession: "any",
  })
  async ratePlans(
    @graphql.Args() args: RatePlanFindManyArgs
  ): Promise<RatePlan[]> {
    return this.service.ratePlans(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RatePlan, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RatePlan",
    action: "read",
    possession: "own",
  })
  async ratePlan(
    @graphql.Args() args: RatePlanFindUniqueArgs
  ): Promise<RatePlan | null> {
    const result = await this.service.ratePlan(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RatePlan)
  @nestAccessControl.UseRoles({
    resource: "RatePlan",
    action: "create",
    possession: "any",
  })
  async createRatePlan(
    @graphql.Args() args: CreateRatePlanArgs
  ): Promise<RatePlan> {
    return await this.service.createRatePlan({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RatePlan)
  @nestAccessControl.UseRoles({
    resource: "RatePlan",
    action: "update",
    possession: "any",
  })
  async updateRatePlan(
    @graphql.Args() args: UpdateRatePlanArgs
  ): Promise<RatePlan | null> {
    try {
      return await this.service.updateRatePlan({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => RatePlan)
  @nestAccessControl.UseRoles({
    resource: "RatePlan",
    action: "delete",
    possession: "any",
  })
  async deleteRatePlan(
    @graphql.Args() args: DeleteRatePlanArgs
  ): Promise<RatePlan | null> {
    try {
      return await this.service.deleteRatePlan(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

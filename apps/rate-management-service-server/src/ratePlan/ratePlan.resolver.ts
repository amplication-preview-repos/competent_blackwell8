import * as graphql from "@nestjs/graphql";
import { RatePlanResolverBase } from "./base/ratePlan.resolver.base";
import { RatePlan } from "./base/RatePlan";
import { RatePlanService } from "./ratePlan.service";

@graphql.Resolver(() => RatePlan)
export class RatePlanResolver extends RatePlanResolverBase {
  constructor(protected readonly service: RatePlanService) {
    super(service);
  }
}

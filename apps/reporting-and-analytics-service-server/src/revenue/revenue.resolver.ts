import * as graphql from "@nestjs/graphql";
import { RevenueResolverBase } from "./base/revenue.resolver.base";
import { Revenue } from "./base/Revenue";
import { RevenueService } from "./revenue.service";

@graphql.Resolver(() => Revenue)
export class RevenueResolver extends RevenueResolverBase {
  constructor(protected readonly service: RevenueService) {
    super(service);
  }
}

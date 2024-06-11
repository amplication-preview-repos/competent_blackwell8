import * as graphql from "@nestjs/graphql";
import { GdsResolverBase } from "./base/gds.resolver.base";
import { Gds } from "./base/Gds";
import { GdsService } from "./gds.service";

@graphql.Resolver(() => Gds)
export class GdsResolver extends GdsResolverBase {
  constructor(protected readonly service: GdsService) {
    super(service);
  }
}

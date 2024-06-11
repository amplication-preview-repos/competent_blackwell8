import * as graphql from "@nestjs/graphql";
import { OtaResolverBase } from "./base/ota.resolver.base";
import { Ota } from "./base/Ota";
import { OtaService } from "./ota.service";

@graphql.Resolver(() => Ota)
export class OtaResolver extends OtaResolverBase {
  constructor(protected readonly service: OtaService) {
    super(service);
  }
}

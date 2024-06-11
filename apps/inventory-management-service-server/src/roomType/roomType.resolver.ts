import * as graphql from "@nestjs/graphql";
import { RoomTypeResolverBase } from "./base/roomType.resolver.base";
import { RoomType } from "./base/RoomType";
import { RoomTypeService } from "./roomType.service";

@graphql.Resolver(() => RoomType)
export class RoomTypeResolver extends RoomTypeResolverBase {
  constructor(protected readonly service: RoomTypeService) {
    super(service);
  }
}

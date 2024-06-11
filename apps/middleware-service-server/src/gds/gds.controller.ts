import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GdsService } from "./gds.service";
import { GdsControllerBase } from "./base/gds.controller.base";

@swagger.ApiTags("gds")
@common.Controller("gds")
export class GdsController extends GdsControllerBase {
  constructor(protected readonly service: GdsService) {
    super(service);
  }
}

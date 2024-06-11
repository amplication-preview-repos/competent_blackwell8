import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RevenueService } from "./revenue.service";
import { RevenueControllerBase } from "./base/revenue.controller.base";

@swagger.ApiTags("revenues")
@common.Controller("revenues")
export class RevenueController extends RevenueControllerBase {
  constructor(protected readonly service: RevenueService) {
    super(service);
  }
}

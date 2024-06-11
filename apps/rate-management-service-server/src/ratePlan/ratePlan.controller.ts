import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RatePlanService } from "./ratePlan.service";
import { RatePlanControllerBase } from "./base/ratePlan.controller.base";

@swagger.ApiTags("ratePlans")
@common.Controller("ratePlans")
export class RatePlanController extends RatePlanControllerBase {
  constructor(protected readonly service: RatePlanService) {
    super(service);
  }
}

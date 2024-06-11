import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OtaService } from "./ota.service";
import { OtaControllerBase } from "./base/ota.controller.base";

@swagger.ApiTags("otas")
@common.Controller("otas")
export class OtaController extends OtaControllerBase {
  constructor(protected readonly service: OtaService) {
    super(service);
  }
}

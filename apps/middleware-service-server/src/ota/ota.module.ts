import { Module } from "@nestjs/common";
import { OtaModuleBase } from "./base/ota.module.base";
import { OtaService } from "./ota.service";
import { OtaController } from "./ota.controller";
import { OtaResolver } from "./ota.resolver";

@Module({
  imports: [OtaModuleBase],
  controllers: [OtaController],
  providers: [OtaService, OtaResolver],
  exports: [OtaService],
})
export class OtaModule {}

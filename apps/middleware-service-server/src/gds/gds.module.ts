import { Module } from "@nestjs/common";
import { GdsModuleBase } from "./base/gds.module.base";
import { GdsService } from "./gds.service";
import { GdsController } from "./gds.controller";
import { GdsResolver } from "./gds.resolver";

@Module({
  imports: [GdsModuleBase],
  controllers: [GdsController],
  providers: [GdsService, GdsResolver],
  exports: [GdsService],
})
export class GdsModule {}

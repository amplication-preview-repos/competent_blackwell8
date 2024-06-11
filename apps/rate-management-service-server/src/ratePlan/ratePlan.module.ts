import { Module } from "@nestjs/common";
import { RatePlanModuleBase } from "./base/ratePlan.module.base";
import { RatePlanService } from "./ratePlan.service";
import { RatePlanController } from "./ratePlan.controller";
import { RatePlanResolver } from "./ratePlan.resolver";

@Module({
  imports: [RatePlanModuleBase],
  controllers: [RatePlanController],
  providers: [RatePlanService, RatePlanResolver],
  exports: [RatePlanService],
})
export class RatePlanModule {}

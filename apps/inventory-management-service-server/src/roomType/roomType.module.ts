import { Module } from "@nestjs/common";
import { RoomTypeModuleBase } from "./base/roomType.module.base";
import { RoomTypeService } from "./roomType.service";
import { RoomTypeController } from "./roomType.controller";
import { RoomTypeResolver } from "./roomType.resolver";

@Module({
  imports: [RoomTypeModuleBase],
  controllers: [RoomTypeController],
  providers: [RoomTypeService, RoomTypeResolver],
  exports: [RoomTypeService],
})
export class RoomTypeModule {}

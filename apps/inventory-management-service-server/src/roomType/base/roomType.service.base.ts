/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, RoomType as PrismaRoomType } from "@prisma/client";

export class RoomTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RoomTypeCountArgs, "select">): Promise<number> {
    return this.prisma.roomType.count(args);
  }

  async roomTypes<T extends Prisma.RoomTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomTypeFindManyArgs>
  ): Promise<PrismaRoomType[]> {
    return this.prisma.roomType.findMany<Prisma.RoomTypeFindManyArgs>(args);
  }
  async roomType<T extends Prisma.RoomTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomTypeFindUniqueArgs>
  ): Promise<PrismaRoomType | null> {
    return this.prisma.roomType.findUnique(args);
  }
  async createRoomType<T extends Prisma.RoomTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomTypeCreateArgs>
  ): Promise<PrismaRoomType> {
    return this.prisma.roomType.create<T>(args);
  }
  async updateRoomType<T extends Prisma.RoomTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomTypeUpdateArgs>
  ): Promise<PrismaRoomType> {
    return this.prisma.roomType.update<T>(args);
  }
  async deleteRoomType<T extends Prisma.RoomTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomTypeDeleteArgs>
  ): Promise<PrismaRoomType> {
    return this.prisma.roomType.delete(args);
  }
}

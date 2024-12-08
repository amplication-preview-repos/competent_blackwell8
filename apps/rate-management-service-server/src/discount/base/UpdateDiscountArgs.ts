/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscountWhereUniqueInput } from "./DiscountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DiscountUpdateInput } from "./DiscountUpdateInput";

@ArgsType()
class UpdateDiscountArgs {
  @ApiProperty({
    required: true,
    type: () => DiscountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscountWhereUniqueInput)
  @Field(() => DiscountWhereUniqueInput, { nullable: false })
  where!: DiscountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DiscountUpdateInput,
  })
  @ValidateNested()
  @Type(() => DiscountUpdateInput)
  @Field(() => DiscountUpdateInput, { nullable: false })
  data!: DiscountUpdateInput;
}

export { UpdateDiscountArgs as UpdateDiscountArgs };

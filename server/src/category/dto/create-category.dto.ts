import { ObjectType, Field, ID } from 'type-graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@ObjectType()
export class CategoryType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @Field()
  @IsString()
  readonly image: string;
  @Field()
  @IsString()
  readonly description: string;
}

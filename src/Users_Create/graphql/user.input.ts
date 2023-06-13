import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  User_ID: number;

  @Field()
  Face_img: string;

  @Field()
  Name: string;

  @Field()
  Address: string;

  @Field()
  Birthday: Date;

  @Field()
  Mail: string;

  @Field()
  Pass: string;

  @Field()
  Sex_ID: number;

  @Field()
  Age: number;

  @Field()
  Job: string;

  @Field()
  Hobby: string;

  @Field()
  Intro: string;

  @Field()
  SID: number;
}

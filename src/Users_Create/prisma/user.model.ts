import { Prisma } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  User_ID: number;
  Face_img: string;
  Name: string;
  Address: string;
  Birthday: Date;
  Mail: string;
  Pass: string;
  Age: number;
  Job: string;
  Hobby: string;
  Intro: string;
  SID: number;
}

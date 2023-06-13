import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './Users_Create/graphql/user.service';
import { PrismaService } from './Users_Create/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,UserService,PrismaService],
})
export class AppModule {}

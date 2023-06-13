import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Users_Create/prisma/prisma.service';
import { User } from 'src/Users_Create/prisma/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }
}

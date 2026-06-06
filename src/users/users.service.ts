import { Injectable } from '@nestjs/common';
import { prisma } from '../lib/prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return prisma.users.create({
      data: createUserDto,
    });
  }

  findAll() {
    return prisma.users.findMany();
  }

  findOne(id: number) {
    return prisma.users.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return prisma.users.delete({
      where: { id },
    });
  }
}

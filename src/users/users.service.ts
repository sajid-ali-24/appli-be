import { Injectable } from '@nestjs/common';
import { prisma } from '../lib/prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HashService } from '../common/services/hash.service';

@Injectable()
export class UsersService {
  constructor(private hashService: HashService) {}
  async create(createUserDto: CreateUserDto) {
    const payload = {
      ...createUserDto,
      password: await this.hashService.hash(createUserDto.password),
    };
    return prisma.users.create({
      data: payload,
    });
  }

  findAll() {
    return prisma.users.findMany();
  }

  findOne(id: string) {
    return prisma.users.findUnique({
      where: { id },
    });
  }

  findByEmail(email: string) {
    return prisma.users.findFirst({
      where: { email },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return prisma.users.delete({
      where: { id },
    });
  }
}

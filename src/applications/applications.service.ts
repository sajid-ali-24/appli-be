import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { prisma } from '../lib/prisma';

@Injectable()
export class ApplicationsService {
  create(createApplicationDto: CreateApplicationDto) {
    return prisma.application.create({ data: createApplicationDto });
  }

  findAll() {
    return prisma.application.findMany({
      include: {
        notes: true,
      },
    });
  }

  findOne(id: string) {
    return prisma.application.findUnique({ where: { id } });
  }

  update(id: string, updateApplicationDto: UpdateApplicationDto) {
    return prisma.application.update({
      where: { id },
      data: updateApplicationDto,
    });
  }

  remove(id: string) {
    return prisma.application.delete({ where: { id } });
  }
}

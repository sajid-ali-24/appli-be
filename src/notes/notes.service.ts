import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { prisma } from '../lib/prisma';

@Injectable()
export class NotesService {
  async create(createNoteDto: CreateNoteDto) {
    return await prisma.notes.create({ data: createNoteDto });
  }

  async findAll() {
    return await prisma.notes.findMany();
  }

  async findOne(id: string) {
    return await prisma.notes.findUnique({ where: { id } });
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    return await prisma.notes.update({
      where: { id },
      data: updateNoteDto,
    });
  }

  async remove(id: string) {
    return await prisma.notes.delete({ where: { id } });
  }
}

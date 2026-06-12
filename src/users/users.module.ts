import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { HashService } from '../common/services/hash.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, HashService],
})
export class UsersModule {}

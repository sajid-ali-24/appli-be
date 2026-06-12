import { Injectable } from '@nestjs/common';
import hasher from 'bcrypt';

@Injectable()
export class HashService {
  async hash(text: string) {
    return await hasher.hash(text, 10);
  }

  async compare(text: string, hash: string) {
    return await hasher.compare(text, hash);
  }
}

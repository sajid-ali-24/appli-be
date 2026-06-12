import { Note } from '../../notes/entities/note.entity';
import { User } from '../../users/entities/user.entity';

export class Application {
  id!: string;
  company!: string;
  link!: string;
  status!: string;
  user_id!: string;
  role!: string;
  hr!: string;
  metadata!: object;
  users!: User[];
  notes!: Note[];
}

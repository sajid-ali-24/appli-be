import { Application } from '../../applications/entities/application.entity';

export class Note {
  id!: string;
  text!: string;
  application_id!: string;
  application!: Application;
}

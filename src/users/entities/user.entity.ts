import { Application } from '../../applications/entities/application.entity';

export class User {
  id!: string;
  user_name!: string;
  full_name!: string;
  email!: string;
  phone!: string;
  password!: string;
  profile!: string;
  experience!: number;
  bio!: string;
  application!: Application[];
}

export class CreateUserDto {
  user_name!: string;
  full_name!: string;
  email!: string;
  phone?: string;
  password!: string;
  profile?: string;
  experience?: number;
  bio?: string;
}

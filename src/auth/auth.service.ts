import { BadRequestException, Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../common/services/hash.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}
  async signIn(payload: SignInDto) {
    const { password, email } = payload;
    console.log(payload);
    const user = await this.usersService.findByEmail(email);
    console.log(user);
    if (!user)
      throw new BadRequestException('Bad Request', {
        cause: new Error(),
        description: 'Invalid credentials!',
      });
    // If Exist Check password and compare it
    const match = await this.hashService.compare(password, user.password);
    if (!match) {
      throw new BadRequestException('Bad Request', {
        cause: new Error(),
        description: 'Invalid credentials',
      });
    }

    const token_payload = { sub: user.id, user_name: user.user_name };

    const token = await this.jwtService.signAsync(token_payload);

    return { data: user, success: true, message: 'Sign in successful!', token };
  }

  async signUp(payload: SignUpDto) {
    const password = await this.hashService.hash(payload.password);

    const user = await this.usersService.create({
      ...payload,
      password,
    });

    return { data: user, success: true, message: 'Sign up successful!' };
  }

  profile() {
    return `This action returns all auth`;
  }

  signOut(id: string) {
    return `This action returns a #${id} auth`;
  }
}

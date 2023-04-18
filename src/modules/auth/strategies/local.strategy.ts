import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../useCases/auth.service';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'register', passwordField: 'password' });
  }

  async validate(
    register: string,
    password: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.authService.validateUser(register, password);
    if (!user) {
      throw new HttpException(
        'Usuário ou senha incorretos',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}

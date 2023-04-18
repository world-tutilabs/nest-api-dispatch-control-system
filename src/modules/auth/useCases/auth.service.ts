import { UserRepository } from 'src/modules/users/repository/UserRepository';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    register: string,
    password: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.findByRegister(register);
    const passwordMatch = bcrypt.compare(password, user.password);

    if (user && passwordMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      id: user.id,
      register: user.register,
      fk_role: user.fk_role,
    };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.SECRET,
      }),
    };
  }
}

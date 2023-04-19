import { UserRepository } from 'src/modules/users/repository/UserRepository';
import { JwtService } from '@nestjs/jwt';
import { HttpException, Injectable } from '@nestjs/common';
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

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const { password, ...result } = user;
        return result;
      }
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

  async valitadeToken(data: string) {
    if(!data){
      throw new HttpException('Faltando token', 401)
    }
    const [,token] = data.split(" ")
    try {
      return await this.jwtService.verifyAsync(token,{publicKey: process.env.SECRET})
    } catch (error) {
      throw new HttpException('Token inválido', 401)
    }
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ValidateTokenService {
  constructor(
    private jwtService: JwtService,
  ) {}

  async execute(data: string) {
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

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class CreateUserService {
  async execute(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

}
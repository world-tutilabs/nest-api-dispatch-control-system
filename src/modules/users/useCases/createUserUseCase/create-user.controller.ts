import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateUserService } from './create-user.service';


@Controller('users')
export class CreateUsersController {
  constructor(private readonly CreateUserService: CreateUserService) {}

  @Post("create")
  async handle(@Body() createUserDto: CreateUserDto) {
    return this.CreateUserService.execute(createUserDto);
  }

}
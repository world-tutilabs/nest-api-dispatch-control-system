import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateUserService } from './create-user.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../../entities/user.entity';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
@ApiTags("Users")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class CreateUsersController {
  constructor(private readonly CreateUserService: CreateUserService) {}
  
  @Post("create")
  async handle(@Body() createUserDto: CreateUserDto) {
    return this.CreateUserService.execute(createUserDto);
  }

}
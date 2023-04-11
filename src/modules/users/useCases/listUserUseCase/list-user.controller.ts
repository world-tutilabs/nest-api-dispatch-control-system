import { Controller, Get } from '@nestjs/common';
import { ListUserService } from './list-user.service';

@Controller('users')
export class ListUsersController {
  constructor(private readonly listUserService: ListUserService) {}

  @Get()
  async handle() {
    return this.listUserService.execute();
  }

}
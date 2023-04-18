import { Injectable } from '@nestjs/common';

@Injectable()
export class ListUserService {
  async execute() {
    return 'List users' + process.env.EMAIL_HOST;
  }

}
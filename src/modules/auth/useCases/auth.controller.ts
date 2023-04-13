import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from '../dto/login.dto';

@ApiTags("login")
@Controller('login')
export class AuthController {
  constructor(private authService: AuthService){}

  @ApiOperation({summary: "Login"})
  @ApiBody({type: LoginDTO})
  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
}
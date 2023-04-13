import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('login')
export class AuthController {
  constructor(private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({summary: "Login"})
  @ApiBody({ schema: { properties: { register: { type: 'string', description: "Matrícula do usuario" }, password: { type: 'string', description: "Senha do usuario" } } } })  
  @Post()
  login(@Request() req) {
    return this.authService.login(req.user)
  }
}
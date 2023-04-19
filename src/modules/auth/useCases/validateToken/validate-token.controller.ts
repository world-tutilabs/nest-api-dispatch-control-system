import { Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ValidateTokenService } from './validate-token.service';

@Controller('validateToken')
export class ValidateTokenController {
  constructor(private validateTokenService: ValidateTokenService) {}
  @Get()
  validateToken(@Request() req) {
    return this.validateTokenService.execute(req.headers.authorization);
  }
}

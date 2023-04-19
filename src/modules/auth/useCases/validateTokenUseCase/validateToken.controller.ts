import { Controller, Get, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ValidateTokenService } from './validateToken.service';

@ApiTags('validateToken')
@ApiBearerAuth()
@Controller('validateToken')
export class ValidateTokenController {
  constructor(private validateTokenService: ValidateTokenService) {}

  @Get()
  validateToken(@Request() req) {
    return this.validateTokenService.execute(req.headers.authorization);
  }
}

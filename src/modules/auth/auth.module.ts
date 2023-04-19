import { Module } from '@nestjs/common';
import { AuthService } from './useCases/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './useCases/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ValidateTokenController } from './useCases/validateToken/validate-token.controller';
import { ValidateTokenService } from './useCases/validateToken/validate-token.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [AuthController, ValidateTokenController],
  providers: [AuthService, ValidateTokenService, LocalStrategy, JwtStrategy],
  exports: [AuthService, ValidateTokenService],
})
export class AuthModule {}

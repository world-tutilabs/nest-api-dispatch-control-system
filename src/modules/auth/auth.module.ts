import { Module } from '@nestjs/common';
import { AuthService } from './useCases/authUseCase/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './useCases/authUseCase/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ValidateTokenController } from './useCases/validateTokenUseCase/validateToken.controller';
import { ValidateTokenService } from './useCases/validateTokenUseCase/validateToken.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '8h' },
    }),
  ],
  controllers: [AuthController, ValidateTokenController],
  providers: [AuthService, ValidateTokenService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

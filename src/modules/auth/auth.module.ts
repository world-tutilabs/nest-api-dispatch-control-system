import { Module } from '@nestjs/common';
import { AuthService } from './useCases/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './useCases/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [ PassportModule, JwtModule.register({
    signOptions: { expiresIn: '8h' },
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}

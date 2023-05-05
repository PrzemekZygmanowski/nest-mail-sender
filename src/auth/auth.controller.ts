// auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  @Post('')
  signUp(@Body() userDto: User): Promise<void> {
    return this.authService.signUp(userDto);
  }
}

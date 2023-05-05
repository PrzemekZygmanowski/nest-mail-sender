// email.service.ts

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendUserWelcome(user: User, token: string) {
    const confirmation_url = `example.com/auth/confirm?token=${token}`;
    await this.mailerService.sendMail({
      to: user.email,
      from: 'p.zygmanowski@o2.pl',
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './mail',
      context: {
        name: user.name,
        confirmation_url,
      },
    });
  }
}

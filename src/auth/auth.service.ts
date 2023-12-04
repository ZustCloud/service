import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  singin() {
    return { msg: 'I am signup' };
  }

  signup() {
    return { msg: 'I am signin' };
  }
}

import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getHello() {
    // Ejemplo: contar usuarios en tu tabla "User"
    const usersCount = await this.prisma.user.count();

    return {
      message: 'Hola Gustavo 🚀, NestJS + Prisma + PostgreSQL están listos 🎉',
      totalUsuarios: usersCount,
    };
  }
}

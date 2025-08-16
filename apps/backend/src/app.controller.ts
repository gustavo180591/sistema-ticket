import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hola Gustavo 🚀, tu backend ya está funcionando con NestJS y Prisma 🎉';
  }
}

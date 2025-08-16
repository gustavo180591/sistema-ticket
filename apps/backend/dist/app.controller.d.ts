import { PrismaService } from './prisma.service';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getHello(): Promise<{
        message: string;
        totalUsuarios: number;
    }>;
}

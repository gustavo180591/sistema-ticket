import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: { email: 'admin@example.com', name: 'Admin', passwordHash },
  });

  await prisma.ticket.createMany({
    data: [
      { subject: 'Issue with login', description: 'User cannot log in', status: 'PENDING', assigneeId: admin.id },
      { subject: 'Feature request', description: 'Add dark mode', status: 'COMPLETED', assigneeId: admin.id },
      { subject: 'Bug report', description: 'Crash on submit', status: 'PENDING', assigneeId: admin.id },
      { subject: 'Performance issue', description: 'Slow list', status: 'COMPLETED', assigneeId: admin.id },
      { subject: 'Security vulnerability', description: 'XSS in comments', status: 'PENDING', assigneeId: admin.id }
    ]
  });
}

main().finally(() => prisma.$disconnect());
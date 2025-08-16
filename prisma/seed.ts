import { PrismaClient, TicketStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Crear usuario admin
  const passwordHash = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      passwordHash
    },
  });

  // Crear tickets de prueba
  await prisma.ticket.createMany({
    data: [
      { subject: 'Issue with login', description: 'User cannot log in', status: TicketStatus.PENDING, assigneeId: admin.id },
      { subject: 'Feature request', description: 'Add dark mode', status: TicketStatus.COMPLETED, assigneeId: admin.id },
      { subject: 'Bug report', description: 'Crash on submit', status: TicketStatus.PENDING, assigneeId: admin.id },
      { subject: 'Performance issue', description: 'Slow list', status: TicketStatus.COMPLETED, assigneeId: admin.id },
      { subject: 'Security vulnerability', description: 'XSS in comments', status: TicketStatus.PENDING, assigneeId: admin.id }
    ]
  });

  console.log('✅ Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

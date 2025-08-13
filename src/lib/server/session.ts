import { prisma } from './prisma';
import { randomBytes } from 'crypto';

const ttlHours = Number(process.env.SESSION_TTL_HOURS ?? 72);

export async function createSession(userId: string) {
  const id = randomBytes(24).toString('hex');
  const expiresAt = new Date(Date.now() + ttlHours * 3600 * 1000);
  await prisma.session.create({ data: { id, userId, expiresAt } });
  return id;
}

export async function getSession(sessionId: string) {
  const now = new Date();
  return prisma.session.findFirst({
    where: { id: sessionId, expiresAt: { gt: now } },
    include: { user: true }
  });
}

export async function destroySession(sessionId: string) {
  await prisma.session.delete({ where: { id: sessionId } }).catch(() => {});
}
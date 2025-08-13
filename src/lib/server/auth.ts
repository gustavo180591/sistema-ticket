import { prisma } from './prisma';
import bcrypt from 'bcryptjs';

export async function register(name: string, email: string, password: string) {
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw new Error('Email ya registrado');
  const passwordHash = await bcrypt.hash(password, 10);
  return prisma.user.create({ data: { name, email, passwordHash } });
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Credenciales inválidas');
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new Error('Credenciales inválidas');
  return user;
}
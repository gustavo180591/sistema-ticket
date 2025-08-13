import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, url }) => {
  if (!locals.user) throw redirect(302, '/auth/login');

  const status = url.searchParams.get('status'); // ALL|OPEN|CLOSED etc. adaptamos a nuestro enum
  const order = url.searchParams.get('order') === 'asc' ? 'asc' : 'desc';

  const where = status && status !== 'ALL'
    ? { status: status as any }
    : {};

  const tickets = await prisma.ticket.findMany({
    where,
    orderBy: { createdAt: order },
    include: { assignee: true }
  });

  return { tickets, order };
};
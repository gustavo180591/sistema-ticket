import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { redirect, fail } from '@sveltejs/kit';
import { CommentSchema } from '$lib/server/validations';
import { writeFile } from 'fs/promises';
import { randomBytes } from 'crypto';
import path from 'path';

export const load: PageServerLoad = async ({ params, locals }) => {
  if (!locals.user) throw redirect(302, '/auth/login');
  const id = Number(params.id);
  const ticket = await prisma.ticket.findUnique({
    where: { id },
    include: { comments: { include: { author: true }, orderBy: { createdAt: 'desc' } }, attachments: true }
  });
  if (!ticket) throw redirect(302, '/tickets');
  return { ticket };
};

export const actions: Actions = {
  comment: async ({ request, params, locals }) => {
    if (!locals.user) return fail(401, { error: 'No auth' });
    const id = Number(params.id);
    const fd = await request.formData();
    const content = String(fd.get('content') || '');
    const parsed = CommentSchema.safeParse({ content });
    if (!parsed.success) return fail(400, { error: 'Comentario vacío' });

    await prisma.comment.create({ data: { content, ticketId: id, authorId: locals.user.id } });
    return { success: true };
  },
  status: async ({ request, params, locals }) => {
    if (!locals.user) return fail(401, { error: 'No auth' });
    const id = Number(params.id);
    const fd = await request.formData();
    const status = String(fd.get('status')) as any; // REJECTED|PENDING|PROCESSING|COMPLETED
    await prisma.ticket.update({ where: { id }, data: { status } });
    return { success: true };
  },
  attach: async ({ request, params, locals }) => {
    if (!locals.user) return fail(401, { error: 'No auth' });
    const id = Number(params.id);
    const fd = await request.formData();
    const files = fd.getAll('files') as File[];

    for (const file of files) {
      if (!(file instanceof File)) continue;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const ext = path.extname(file.name) || '';
      const name = randomBytes(8).toString('hex') + ext;
      const rel = `/data/uploads/${name}`; // ruta interna contenedor
      const publicUrl = `/uploads/${name}`; // expuesta por static config (ver abajo)
      await writeFile(rel, buffer);
      await prisma.attachment.create({ data: { ticketId: id, url: publicUrl, mime: file.type, size: buffer.length } });
    }
    return { success: true };
  }
};
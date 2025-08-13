import { fail, redirect } from '@sveltejs/kit';
import { login } from '$lib/server/auth';
import { createSession } from '$lib/server/session';
import { LoginSchema } from '$lib/server/validations';

export const actions = {
  default: async ({ request, cookies }) => {
    const fd = await request.formData();
    const data = {
      email: String(fd.get('email') || ''),
      password: String(fd.get('password') || '')
    };

    const parsed = LoginSchema.safeParse(data);
    if (!parsed.success) {
      return fail(400, { ...data, error: 'Datos inválidos' });
    }

    try {
      const user = await login(parsed.data.email, parsed.data.password);
      const sid = await createSession(user.id);
      cookies.set('session', sid, { path: '/', httpOnly: true, sameSite: 'lax', secure: false, maxAge: 60 * 60 * 24 * 3 });
      throw redirect(303, '/tickets');
    } catch (e: any) {
      return fail(400, { ...data, error: e.message });
    }
  }
};
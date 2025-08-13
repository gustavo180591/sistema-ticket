import type { Handle } from '@sveltejs/kit';
import { getSession } from '$lib/server/session';

export const handle: Handle = async ({ event, resolve }) => {
  const cookie = event.cookies.get('session');
  event.locals.sessionId = cookie ?? null;
  event.locals.user = null;

  if (cookie) {
    const session = await getSession(cookie);
    if (session) {
      event.locals.user = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name
      };
    } else {
      event.cookies.delete('session', { path: '/' });
    }
  }

  const response = await resolve(event);
  return response;
};
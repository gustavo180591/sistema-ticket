// See https://kit.svelte.dev/docs/types#app
import type { User } from '@prisma/client';

declare global {
  namespace App {
    interface Locals {
      user: (Pick<User, 'id'|'email'|'name'>) | null;
      sessionId: string | null;
    }
    interface PageData {
      user: (Pick<User, 'id'|'email'|'name'>) | null;
    }
  }
}

export {};
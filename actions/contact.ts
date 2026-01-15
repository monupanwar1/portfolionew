'use server';

import prisma from '@/lib/db';
import { ContactInput, contactSchema } from '@/lib/type';

export async function submitContact(data: ContactInput) {
  try {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.issues[0]?.message || 'Invalid input',
      };
    }
    const { name, email, message } = parsed.data;

    await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });
    return { success: true };
  } catch (e) {
    return { success: false, error: 'something went wrong' };
  }
}

import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'I’d love to know your name 🙂'),
  email: z.string().email('Oops! That doesn’t look like a real email 😅'),
  message: z.string().min(5, 'Don’t be shy — write a little more! 💬'),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type projectsCards = {
  bgImage: string;
  projectVideo: string;
  projectName: string;
  projectTitle: string;
  exploreLink: string;
};

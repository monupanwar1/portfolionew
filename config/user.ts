export const user = {
  name: process.env.NEXT_PUBLIC_NAME || '',
  description: process.env.NEXT_PUBLIC_ROLE || '',
  resume: process.env.NEXT_PUBLIC_RESUME || '',

  socials: {
    github: process.env.NEXT_PUBLIC_GITHUB || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || '',
    instagram: process.env.NEXT_PUBLIC_TWITTER || '',
  },
};

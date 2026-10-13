'use client';

import { submitContact } from '@/actions/contact';
import { ContactInput, contactSchema } from '@/lib/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Element } from 'react-scroll';

import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { TextAnimate } from './ui/text-animate';
import { Textarea } from './ui/textarea';

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: ContactInput) => {
    startTransition(async () => {
      const res = await submitContact(data);

      if (res?.success) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error(res?.error || 'Something went wrong');
      }
    });
  };

  return (
    <Element name='contact'>
      <section id='contact' className='p-4 font-sans'>
        <div className='flex min-h-screen flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-[#080807] px-4 py-16 sm:px-8'>
          {/* HEADING */}
          <div className='mb-4 text-center'>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400'>
              Have a project in mind?
            </p>

            <h1 className='text-center text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-8xl'>
              <TextAnimate
                className='font-extrabold text-white'
                animation='blurInUp'
                by='word'
              >
                LET&apos;S MAKE IT HAPPEN
              </TextAnimate>
              <span className='text-lime-400'>.</span>
            </h1>

            <p className='mx-auto mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base'>
              Have an idea, an opportunity, or just want to connect? Send me a
              message. I&apos;d love to hear from you.
            </p>
          </div>

          {/* CONTACT FORM */}
          <Card className='mt-10 mb-8 h-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[#11110f] px-3 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:px-6 sm:py-7'>
            <CardHeader className='pb-6'>
              <div className='mb-3 flex items-center justify-center'>
                <span className='rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-lime-300'>
                  GET IN TOUCH
                </span>
              </div>

              <CardTitle className='text-center text-3xl font-bold tracking-tight text-white'>
                Say Hello<span className='text-lime-400'>.</span>
              </CardTitle>
              <p className='mt-2 text-center text-sm text-white/45'>
                I&apos;ll get back to you as soon as possible.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6'>
                  {/* NAME */}
                  <div className='grid gap-2'>
                    <label
                      htmlFor='contact-name'
                      className='text-sm font-medium text-white/80'
                    >
                      Your name
                    </label>

                    <Input
                      id='contact-name'
                      autoComplete='name'
                      placeholder='What should I call you?'
                      {...register('name')}
                      className='h-12 rounded-xl border border-white/10 bg-[#1b1b18] px-4 text-white placeholder:text-white/30 focus-visible:border-lime-400/60 focus-visible:ring-1 focus-visible:ring-lime-400/30'
                    />

                    {errors.name && (
                      <p className='text-sm text-red-400'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className='grid gap-2'>
                    <label
                      htmlFor='contact-email'
                      className='text-sm font-medium text-white/80'
                    >
                      Email address
                    </label>

                    <Input
                      id='contact-email'
                      type='email'
                      autoComplete='email'
                      placeholder='you@example.com'
                      {...register('email')}
                      className='h-12 rounded-xl border border-white/10 bg-[#1b1b18] px-4 text-white placeholder:text-white/30 focus-visible:border-lime-400/60 focus-visible:ring-1 focus-visible:ring-lime-400/30'
                    />

                    {errors.email && (
                      <p className='text-sm text-red-400'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div className='grid gap-2'>
                    <label
                      htmlFor='contact-message'
                      className='text-sm font-medium text-white/80'
                    >
                      Your message
                    </label>

                    <Textarea
                      id='contact-message'
                      placeholder='Tell me a little about your idea...'
                      {...register('message')}
                      className='min-h-36 resize-none rounded-xl border border-white/10 bg-[#1b1b18] px-4 py-3 text-white placeholder:text-white/30 focus-visible:border-lime-400/60 focus-visible:ring-1 focus-visible:ring-lime-400/30'
                    />

                    {errors.message && (
                      <p className='text-sm text-red-400'>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* SUBMIT */}
                  <CardFooter className='p-0 pt-2'>
                    <Button
                      type='submit'
                      disabled={isPending}
                      className='h-12 w-full rounded-xl bg-lime-400 font-bold text-[#080807] transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.15)] disabled:cursor-not-allowed disabled:opacity-60'
                    >
                      {isPending ? 'Sending...' : 'Send Message'}
                      {!isPending && <span className='ml-2 text-lg'>↗</span>}
                    </Button>
                  </CardFooter>
                </div>
              </form>
            </CardContent>
          </Card>

          <p className='text-center text-xs tracking-wide text-white/30'>
            Let&apos;s build something meaningful together.
          </p>
        </div>
      </section>
    </Element>
  );
}

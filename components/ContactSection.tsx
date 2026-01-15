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
  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  // transition for loading state
  const [isPending, startTransition] = useTransition();

  // submit handler
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
      <section id='contact' className='p-4'>
        <div className='p-4 bg-[#0C0C0B] min-h-screen rounded-sm flex items-center justify-center flex-col'>
          <div>
            <h1 className='font-bold text-6xl md:text-8xl md:w-2xl text-center text-white'>
              <TextAnimate
                className='font-bold text-white text-5xl md:text-7xl'
                animation='blurInUp'
                by='word'
              >
                LET&apos;S MAKE IT HAPPEN
              </TextAnimate>
            </h1>
          </div>

          <Card className='w-full bg-[#22211E] mt-20 max-w-xl h-150 mb-20 px-6 border-0 outline-1'>
            <CardHeader>
              <CardTitle className='font-bold text-3xl text-center text-white'>
                Say Hello
              </CardTitle>
            </CardHeader>

            <CardContent>
              {/* ✅ FORM */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='border border-none text-white'
              >
                <div className='flex flex-col gap-12'>
                  {/* NAME */}
                  <div className='grid'>
                    <Input
                      className='py-6 border border-muted-foreground outline-1 bg-[#32302D]'
                      placeholder='Drop a name'
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className='grid gap-2'>
                    <Input
                      className='py-6 border-muted-foreground outline-1 bg-[#32302D]'
                      placeholder='Wanna hear back? Add your email'
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div className='grid gap-2'>
                    <Textarea
                      className='resize-none h-40 text-white border-muted-foreground outline-1 bg-[#32302D]'
                      placeholder='Say hello or drop a note...'
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <CardFooter className='flex-col gap-2 p-0'>
                    <Button
                      type='submit'
                      disabled={isPending}
                      className='w-full bg-white/75 hover:bg-white font-bold text-neutral-950 py-6 mt-6 mb-2'
                    >
                      {isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </CardFooter>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Element>
  );
}

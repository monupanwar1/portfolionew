import { Button } from './ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export default function ContactSection() {
  return (
    <section className='p-10'>
      <div className='p-4 bg-[#0C0C0B] min-h-screen rounded-sm flex items-center justify-center flex-col'>
        <div>
          <h1 className='font-bold text-8xl line-clamp-3  text-center text-white'>
            LET'S MAKE <br /> IT HAPPEN
          </h1>
        </div>
        <Card className='w-full bg-[#22211E] mt-20 max-w-xl h-150 mb-20 px-6 border-0 outline-1'>
          <CardHeader>
            <CardTitle className='font-bold text-3xl text-center text-white'>
              Say Hello
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className='border border-none  '>
              <div className='flex flex-col gap-12'>
                <div className='grid '>
                  <Input
                    className='py-6 border border-muted-foreground outline-1 bg-[#32302D]'
                    id='name'
                    type='text'
                    placeholder='Drop a name'
                    required
                  />
                </div>
                <div className='grid gap-2 '>
                  <Input
                    className='py-6 border-muted-foreground outline-1 bg-[#32302D]'
                    id='mail'
                    placeholder='Wanna hear back? Add your email'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Textarea
                    className='resize-none h-40 text-white border-muted-foreground outline-1 bg-[#32302D] '
                    id='mail'
                    placeholder='Say hello or drop a note...'
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex-col gap-2'>
            <Button
              type='submit'
              className='w-full bg-white/75 hover:bg-white font-bold text-neutral-950 py-6 mt-6 mb-2'
            >
              Send Message
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

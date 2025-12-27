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
    <section className='px-4 bg-[#0C0C0B]'>
      <div>
        <h1 className='font-bold  text-4xl/relaxed'>
          LET'S MAKE <br /> IT HAPPEN
        </h1>
      </div>
      <Card className='w-full max-w-sm bg-[#22211E]'>
        <CardHeader>
          <CardTitle>Say Hello</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Input
                  id='name'
                  type='text'
                  placeholder='Drop a name'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Input
                  id='mail'
                  type='text'
                  placeholder='Wanna hear back? Add your email'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Textarea
                  id='mail'
                  placeholder='Say hello or drop a note...'
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex-col gap-2'>
          <Button type='submit' className='w-full'>
            Send Message
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

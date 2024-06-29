import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row'>
      <div className='relative mb-8 size-[240px] lg:mb-0 lg:size-[424px]'>
        <Image src='/hero.svg' fill alt='hero' />
      </div>
      <div className='flex flex-col items-center gap-y-8'>
        <h1 className='max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl'>
          Learn, practice, and master new languages with Lingo.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className='size-5 animate-spin text-muted-foreground' />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode='modal'>
                <Button size='lg' variant='secondary' className='w-full'>
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode='modal'>
                <Button
                  size='lg'
                  variant='primaryOutline'
                  className='mt-2 w-full'
                >
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size='lg' variant='secondary' className='w-full' asChild>
                <Link href='/learn'>Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

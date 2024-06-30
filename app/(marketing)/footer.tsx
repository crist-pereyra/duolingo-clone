import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block'>
      <div className='mx-auto flex h-full max-w-screen-lg items-center justify-evenly'>
        <Button variant='ghost' size='lg' className='w-full'>
          <Image
            src='/hr.svg'
            alt='Croatian'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Croatian
        </Button>
        <Button variant='ghost' size='lg' className='w-full'>
          <Image
            src='/es.svg'
            alt='Spanish'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Spanish
        </Button>
        <Button variant='ghost' size='lg' className='w-full'>
          <Image
            src='/fr.svg'
            alt='French'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          French
        </Button>
        <Button variant='ghost' size='lg' className='w-full'>
          <Image
            src='/it.svg'
            alt='Italian'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Italian
        </Button>
        <Button variant='ghost' size='lg' className='w-full'>
          <Image
            src='/jp.svg'
            alt='Japanese'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};

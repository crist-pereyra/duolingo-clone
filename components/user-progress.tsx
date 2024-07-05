import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';
import { courses } from '@/db/schema';

interface Props {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}
export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className='flex w-full items-center justify-between gap-x-2'>
      <Link href='/courses'>
        <Button variant='ghost'>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
            className='rounded-md border'
          />
        </Button>
      </Link>
      <Link href='/shop'>
        <Button variant='ghost' className='text-orange-500'>
          <Image
            src='/points.svg'
            alt='points'
            width={28}
            height={28}
            className='mr-2'
          />
          {points}
        </Button>
      </Link>
      <Link href='/shop'>
        <Button variant='ghost' className='text-rose-500'>
          <Image
            src='/heart.svg'
            alt='hearts'
            width={28}
            height={28}
            className='mr-2'
          />
          {hasActiveSubscription ? (
            <InfinityIcon className='size-4 stroke-[3]' />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};

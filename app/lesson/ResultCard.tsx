import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  variant: 'points' | 'hearts';
  value: number;
}
export const ResultCard = ({ variant, value }: Props) => {
  const imageSrc = variant === 'points' ? '/points.svg' : '/heart.svg';
  return (
    <div
      className={cn(
        'rounded-2xl border-2 w-full',
        variant === 'points' && 'bg-orange-400 border-orange-400',
        variant === 'hearts' && 'bg-rose-500 border-rose-500'
      )}
    >
      <div
        className={cn(
          'p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs',
          variant === 'points' && 'bg-orange-400',
          variant === 'hearts' && 'bg-rose-500'
        )}
      >
        {variant === 'points' ? 'Total XP' : 'Hearts Left'}
      </div>
      <div
        className={cn(
          'rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lgs',
          variant === 'points' && 'text-orange-400',
          variant === 'hearts' && 'text-rose-500'
        )}
      >
        <Image
          src={imageSrc}
          alt='Icon'
          width={30}
          height={30}
          className='mr-1.5'
        />
        {value}
      </div>
    </div>
  );
};

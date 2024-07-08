import { Progress } from '@/components/ui/progress';
import { useExitModal } from '@/store/exit-modal.store';
import { InfinityIcon, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
}
export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: Props) => {
  const open = useExitModal((state) => state.open);
  return (
    <header className='mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]'>
      <X
        onClick={open}
        className='cursor-pointer text-slate-500 transition hover:opacity-75'
      />
      <Progress value={percentage} />
      <div className='flex items-center font-bold text-rose-500'>
        <Image
          src='/heart.svg'
          alt='heart'
          width={28}
          height={28}
          className='mr-2'
        />
        {hasActiveSubscription ? (
          <InfinityIcon className='size-6 stroke-[3]' />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};

'use client';
import { refillHearts } from '@/actions/user-progress';
import { createStripeUrl } from '@/actions/user-subscription';
import { Button } from '@/components/ui/button';
import { POINTS_TO_REFILL } from '@/constants';
import Image from 'next/image';
import React, { useTransition } from 'react';
import { toast } from 'sonner';

interface Props {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}
const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();
  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) return;
    startTransition(() => {
      refillHearts().catch(() => toast.error('Something went wrong'));
    });
  };
  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => toast.error('Something went wrong'));
    });
  };
  return (
    <ul className='w-full'>
      <div className='flex w-full items-center gap-x-4 border-t-2 p-4'>
        <Image src='/heart.svg' alt='heart' width={60} height={60} />
        <div className='flex-1'>
          <p className='text-base font-bold text-neutral-700 lg:text-xl'>
            Refill hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5 ? (
            'full'
          ) : (
            <div className='flex items-center'>
              <Image src='/points.svg' alt='Points' width={20} height={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
      <div className='flex w-full items-center gap-x-4 border-t-2 p-4 pt-8'>
        <Image src='/unlimited.svg' alt='unlimited' width={60} height={60} />
        <div className='flex-1'>
          <p className='text-base font-bold text-neutral-700 lg:text-xl'>
            Unlimited hearts
          </p>
        </div>
        <Button onClick={onUpgrade} disabled={pending}>
          {hasActiveSubscription ? 'settings' : 'upgrade'}
        </Button>
      </div>
    </ul>
  );
};

export default Items;

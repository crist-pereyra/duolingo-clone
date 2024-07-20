'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import Image from 'next/image';
import { Button } from '../ui/button';
import { usePracticeModal } from '@/store/practice.store';

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const isOpen = usePracticeModal((state) => state.isOpen);
  const close = usePracticeModal((state) => state.close);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <div className='mb-5 flex w-full items-center justify-center'>
            <Image src='/heart.svg' alt='Heart' width={100} height={100} />
          </div>
          <DialogTitle className='text-center text-2xl font-bold'>
            Practice lesson
          </DialogTitle>
          <DialogDescription className='text-center text-base'>
            Use practice lessons to regain hearts and points. You cannot loose
            hearts or points in practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='mb-4'>
          <div className='flex w-full flex-col gap-y-4'>
            <Button
              variant='primary'
              className='w-full'
              size='lg'
              onClick={close}
            >
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

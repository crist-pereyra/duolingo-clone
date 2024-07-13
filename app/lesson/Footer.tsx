import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';
import React from 'react';

import { useKey, useMedia } from 'react-use';
interface Props {
  onCheck: () => void;
  status: 'correct' | 'wrong' | 'none' | 'completed';
  disabled?: boolean;
  lessonId?: number;
}
export const Footer = ({ onCheck, status, disabled, lessonId }: Props) => {
  useKey('Enter', onCheck, {}, [onCheck]);
  const isMobile = useMedia('(max-width: 1024px)');
  return (
    <footer
      className={cn(
        'lg:h-[140px] h-[100px] border-t-2',
        status === 'correct' && 'border-transparent bg-green-100',
        status === 'wrong' && 'border-transparent bg-rose-100'
      )}
    >
      <div className='mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10'>
        {status === 'correct' && (
          <div className='flex items-center text-base font-bold text-green-500 lg:text-2xl'>
            <CheckCircle className='mr-4 size-6 lg:size-10' />
            Nicely Done!
          </div>
        )}
        {status === 'wrong' && (
          <div className='flex items-center text-base font-bold text-rose-500 lg:text-2xl'>
            <XCircle className='mr-4 size-6 lg:size-10' />
            Try Again
          </div>
        )}
        {status === 'completed' && (
          <Button
            variant='default'
            size={isMobile ? 'sm' : 'lg'}
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            Practice again
          </Button>
        )}
        <Button
          disabled={disabled}
          className='ml-auto'
          onClick={onCheck}
          size={isMobile ? 'sm' : 'lg'}
          variant={status === 'wrong' ? 'danger' : 'secondary'}
        >
          {status === 'none' && 'Check'}
          {status === 'correct' && 'Next'}
          {status === 'wrong' && 'Retry'}
          {status === 'completed' && 'Continue'}
        </Button>
      </div>
    </footer>
  );
};

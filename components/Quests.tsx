import { quests } from '@/constants';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Progress } from './ui/progress';

interface Props {
  points: number;
}
export const Quests = ({ points }: Props) => {
  return (
    <div className='space-y-4 rounded-xl border-2 p-4'>
      <div className='flex w-full items-center justify-between space-y-2'>
        <h3 className='text-lg font-bold'>Quests</h3>
        <Link href='/quests'>
          <Button size='sm' variant='primaryOutline'>
            View all
          </Button>
        </Link>
      </div>
      <ul className='w-full space-y-4'>
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;
          return (
            <div
              key={quest.value}
              className='flex w-full items-center gap-x-3 pb-4'
            >
              <Image src='/points.svg' alt='points' width={40} height={40} />
              <div className='flex w-full flex-col gap-y-2'>
                <p className='text-sm font-bold text-neutral-700'>
                  {quest.title}
                </p>
                <Progress value={progress} className='h-2' />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

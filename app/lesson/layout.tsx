import React from 'react';

interface Props {
  children: React.ReactNode;
}
const LessonLayout = ({ children }: Props) => {
  return (
    <div className='flex h-full flex-col'>
      <div className='flex size-full flex-col'>{children}</div>
    </div>
  );
};

export default LessonLayout;

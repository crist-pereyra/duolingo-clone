import { Button } from '@/components/ui/button';
import React from 'react';

const ButtonsPage = () => {
  return (
    <div className='space-y-4 p-4 flex flex-col max-w-[200px]'>
      <Button>Default</Button>
      <Button variant={'primary'}>Primary</Button>
      <Button variant={'primaryOutline'}>Primary outline</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'secondaryOutline'}>Secondary outline</Button>
      <Button variant={'danger'}>Danger</Button>
      <Button variant={'dangerOutline'}>Danger outline</Button>
      <Button variant={'super'}>Super</Button>
      <Button variant={'superOutline'}>Super outline</Button>
      <Button variant={'ghost'}>Ghost</Button>
      <Button variant={'sidebar'}>Sidebar</Button>
      <Button variant={'sidebarOutline'}>Sidebar outline</Button>
    </div>
  );
};

export default ButtonsPage;

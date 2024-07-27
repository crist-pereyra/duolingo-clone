import { isAdmin } from '@/lib/admin';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import React from 'react';

const AdminPage = () => {
  if (!isAdmin()) {
    redirect('/');
  }
  const App = dynamic(() => import('./app'), { ssr: false });
  return <App />;
};

export default AdminPage;

import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/sonner';
import { ExitModal } from '@/components/modals/exit-modal';
import { HeartsModal } from '@/components/modals/hearts-modal';
import { PracticeModal } from '@/components/modals/practice-modal';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lingo',
  description:
    'Welcome to Lingo! This is a dynamic, engaging, and feature-packed clone of Duolingo, crafted with the latest and greatest in web development technologies',
  icons: {
    icon: '/mascot.svg',
  },
  openGraph: {
    images: '/lingo-preview.png',
  },
  themeColor: '#22c55e', // Added themeColor property matching bg-green-500
};
export const viewport: Viewport = {
  themeColor: '#22C55E',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

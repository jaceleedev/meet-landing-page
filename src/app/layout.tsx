import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-red-hat-display',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Meet landing page',
  description:
    'A responsive meet landing page built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Meet Landing Page',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Meet landing page',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/meet-landing-page',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meet-landing-page-sandy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Meet landing page',
    description:
      'A responsive meet landing page built for a Frontend Mentor challenge.',
    url: 'https://meet-landing-page-sandy.vercel.app',
    siteName: 'Frontend Mentor | Meet landing page',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1717412068/Challenges/alfzk9bgpu96efqlzzcu.jpg',
        width: 1440,
        height: 1895,
        alt: 'Meet landing page desktop size',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1617954611/Challenges/hrl5nbkambu87iagtlhj.jpg',
        width: 1536,
        height: 4256,
        alt: 'Meet landing page tablet size',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1617954640/Challenges/tbbnwelvtjzuy9ilbl2x.jpg',
        width: 750,
        height: 4430,
        alt: 'Meet landing page mobile size',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Meet landing page',
    description:
      'A responsive meet landing page built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1717412068/Challenges/alfzk9bgpu96efqlzzcu.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-light ${redHatDisplay.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

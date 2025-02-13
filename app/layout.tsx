import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CustomCursor } from '@/components/custom-cursor';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nigel Mashayamombe  | Full Stack Developer',
  description: 'Portfolio of Nigel Mashayamombe  - Full Stack Developer specializing in Next.js, React, and TypeScript',
  openGraph: {
    title: 'Nigel Mashayamombe  | Full Stack Developer',
    description: 'Portfolio of Nigel Mashayamombe  - Full Stack Developer specializing in Next.js, React, and TypeScript',
    url: 'https://shrapneltech.dev',
    siteName: 'Nigel Mashayamombe  Portfolio',
    images: [
      {
        url: 'https://shrapneltech.dev/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
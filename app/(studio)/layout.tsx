import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Elisabeth's website`,
  description: 'Frontend developers blog website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

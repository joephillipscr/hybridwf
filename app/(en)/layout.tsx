import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Newsreader } from 'next/font/google';
import '../globals.css';
import RootShell from '@/components/RootShell';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { buildMetadata } from '@/lib/meta';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['500', '600'],
  display: 'swap',
});

export const metadata: Metadata = buildMetadata('en', 'home');

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell
      lang="en"
      fontVars={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      {children}
      <GoogleAnalytics />
    </RootShell>
  );
}

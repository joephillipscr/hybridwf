import HomePage from '@/components/pages/HomePage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'home');

export default function Page() {
  return <HomePage lang="en" />;
}

import ChangelogPage from '@/components/pages/ChangelogPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'changelog');

export default function Page() {
  return <ChangelogPage lang="en" />;
}

import SourcesPage from '@/components/pages/SourcesPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'sources');

export default function Page() {
  return <SourcesPage lang="en" />;
}

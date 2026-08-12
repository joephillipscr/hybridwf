import StandardPage from '@/components/pages/StandardPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'standard');

export default function Page() {
  return <StandardPage lang="en" />;
}

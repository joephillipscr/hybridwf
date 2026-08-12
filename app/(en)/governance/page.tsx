import GovernancePage from '@/components/pages/GovernancePage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'governance');

export default function Page() {
  return <GovernancePage lang="en" />;
}

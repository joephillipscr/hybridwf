import MaturityPage from '@/components/pages/MaturityPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'maturity');

export default function Page() {
  return <MaturityPage lang="en" />;
}

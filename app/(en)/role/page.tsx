import RolePage from '@/components/pages/RolePage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'role');

export default function Page() {
  return <RolePage lang="en" />;
}

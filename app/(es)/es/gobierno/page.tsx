import GovernancePage from '@/components/pages/GovernancePage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'governance');

export default function Page() {
  return <GovernancePage lang="es" />;
}

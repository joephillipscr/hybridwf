import TransitionsPage from '@/components/pages/TransitionsPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'transitions');

export default function Page() {
  return <TransitionsPage lang="es" />;
}

import SourcesPage from '@/components/pages/SourcesPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'sources');

export default function Page() {
  return <SourcesPage lang="es" />;
}

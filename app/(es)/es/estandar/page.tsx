import StandardPage from '@/components/pages/StandardPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'standard');

export default function Page() {
  return <StandardPage lang="es" />;
}

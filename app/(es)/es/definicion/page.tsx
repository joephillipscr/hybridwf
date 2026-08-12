import DefinitionPage from '@/components/pages/DefinitionPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'definition');

export default function Page() {
  return <DefinitionPage lang="es" />;
}

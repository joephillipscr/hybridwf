import PrinciplesPage from '@/components/pages/PrinciplesPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'principles');

export default function Page() {
  return <PrinciplesPage lang="es" />;
}

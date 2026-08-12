import MaturityPage from '@/components/pages/MaturityPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'maturity');

export default function Page() {
  return <MaturityPage lang="es" />;
}

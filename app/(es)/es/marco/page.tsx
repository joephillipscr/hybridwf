import FrameworkPage from '@/components/pages/FrameworkPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'framework');

export default function Page() {
  return <FrameworkPage lang="es" />;
}

import RolePage from '@/components/pages/RolePage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'role');

export default function Page() {
  return <RolePage lang="es" />;
}

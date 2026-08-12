import ChangelogPage from '@/components/pages/ChangelogPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'changelog');

export default function Page() {
  return <ChangelogPage lang="es" />;
}

import LicensePage from '@/components/pages/LicensePage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'license');

export default function Page() {
  return <LicensePage lang="es" />;
}

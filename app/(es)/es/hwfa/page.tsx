import HwfaPage from '@/components/pages/HwfaPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'hwfa');

export default function Page() {
  return <HwfaPage lang="es" />;
}

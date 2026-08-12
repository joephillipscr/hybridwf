import HomePage from '@/components/pages/HomePage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('es', 'home');

export default function Page() {
  return <HomePage lang="es" />;
}

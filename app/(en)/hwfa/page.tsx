import HwfaPage from '@/components/pages/HwfaPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'hwfa');

export default function Page() {
  return <HwfaPage lang="en" />;
}

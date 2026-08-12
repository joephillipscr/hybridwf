import HwfsPage from '@/components/pages/HwfsPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'hwfs');

export default function Page() {
  return <HwfsPage lang="en" />;
}

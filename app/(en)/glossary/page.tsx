import GlossaryPage from '@/components/pages/GlossaryPage';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('en', 'glossary');

export default function Page() {
  return <GlossaryPage lang="en" />;
}

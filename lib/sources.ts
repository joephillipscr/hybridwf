import type { T } from './i18n';

export interface Source {
  id: string;
  label: string;
  url: string;
  kind: 'market' | 'standards' | 'academic' | 'books';
}

export const SOURCES: Source[] = [
  { id: 'S1', label: 'Lattice — “Leading the Way in Responsible AI Employment” (9 Jul 2024)', url: 'https://lattice.com/blog/leading-the-way-in-responsible-ai-employment', kind: 'market' },
  { id: 'S2', label: 'SHRM — Lattice scraps plans to treat AI bots as employees after backlash (Jul 2024)', url: 'https://www.shrm.org/topics-tools/news/technology/lattice-scraps-plans-to-treat-ai-bots-as-employees-after-backlash', kind: 'market' },
  { id: 'S3', label: 'Salesforce — What Is Digital Labor? / Agentforce positioning', url: 'https://www.salesforce.com/agentforce/digital-labor/', kind: 'market' },
  { id: 'S4', label: 'Microsoft — Six core capabilities to scale agent adoption in 2026', url: 'https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/6-core-capabilities-to-scale-agent-adoption-in-2026/', kind: 'market' },
  { id: 'S5', label: 'Microsoft — Introducing Microsoft Scout / Autopilots, always-on agents (2 Jun 2026)', url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/', kind: 'market' },
  { id: 'S6', label: 'ianai — AI Employee / role-based authority and persistent digital worker', url: 'https://www.ianai.co/', kind: 'market' },
  { id: 'S7', label: 'AIEmployee.com — AI Employee platform', url: 'https://home.aiemployee.com/', kind: 'market' },
  { id: 'S8', label: 'GIZIN — AI collaboration / AI Employees', url: 'https://gizin.co.jp/', kind: 'market' },
  { id: 'S9', label: 'ISO 30414:2025 — Human resource management, HCRD', url: 'https://www.iso.org/standard/30414', kind: 'standards' },
  { id: 'S10', label: 'ISO/TC 260 — Human resource management standards catalogue', url: 'https://www.iso.org/committee/628737/x/catalogue/p/1/u/0/w/0/d/0/', kind: 'standards' },
  { id: 'S11', label: 'CIPD — Performance Management factsheet', url: 'https://www.cipd.org/en/knowledge/factsheets/performance-factsheet/', kind: 'standards' },
  { id: 'S12', label: 'CIPD — Line managers’ role in supporting the people profession', url: 'https://www.cipd.org/uk/knowledge/factsheets/line-managers-factsheet/', kind: 'standards' },
  { id: 'S13', label: 'ILO — Safe and healthy working environment as a fundamental principle and right', url: 'https://www.ilo.org/topics-and-sectors/safety-and-health-work/safe-and-healthy-working-environment-fundamental-principle-and-right-work', kind: 'standards' },
  { id: 'S14', label: 'NIST — AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework', kind: 'standards' },
  { id: 'S15', label: 'NIST — AI RMF Playbook', url: 'https://airc.nist.gov/airmf-resources/playbook/', kind: 'standards' },
  { id: 'S16', label: 'Johnston et al. — The Shift to Agentic AI: Evidence from Codex (2026)', url: 'https://arxiv.org/abs/2606.26959', kind: 'academic' },
  { id: 'S17', label: 'Liu — The Organizational Behavior of Agentic AI (2026)', url: 'https://arxiv.org/abs/2606.30986', kind: 'academic' },
  { id: 'S18', label: 'Agentic Business Process Management: A Research Manifesto (2026)', url: 'https://arxiv.org/html/2603.18916v3', kind: 'academic' },
  { id: 'S19', label: 'Alenezi — Human-AI Collaboration and the Transformation of Software Engineering Work (2026)', url: 'https://arxiv.org/abs/2606.03394', kind: 'academic' },
  { id: 'S20', label: 'Intelligent AI Delegation (2026)', url: 'https://arxiv.org/html/2602.11865v1', kind: 'academic' },
  { id: 'S29', label: 'Elish — Moral Crumple Zones: Cautionary Tales in Human-Robot Interaction (2019)', url: 'https://estsjournal.org/index.php/ests/article/view/260', kind: 'academic' },
  { id: 'S21', label: 'GIZIN — AI Employee Starter Book', url: 'https://store.gizin.co.jp/en/ai-employee-book', kind: 'books' },
  { id: 'S22', label: 'GIZIN — AI Employee Master Book', url: 'https://store.gizin.co.jp/en/ai-employee-master', kind: 'books' },
  { id: 'S23', label: 'B. Jaiswal — AI EMPLOYEE: How One Person Does the Work of Ten (Jun 2026)', url: 'https://play.google.com/store/books/details/B_JAISWAL_AI_EMPLOYEE?id=0w3uEQAAQBAJ', kind: 'books' },
  { id: 'S24', label: 'OECD — AI Principles (human-centred values: dignity, autonomy, social justice, labour rights)', url: 'https://oecd.ai/en/ai-principles', kind: 'standards' },
  { id: 'S25', label: 'EU — Artificial Intelligence Act: regulatory framework on AI (risk-based approach)', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai', kind: 'standards' },
  { id: 'S26', label: 'EU — GDPR Article 22: automated individual decision-making', url: 'https://gdpr-info.eu/art-22-gdpr/', kind: 'standards' },
  { id: 'S27', label: 'EU — AI Act Article 26: obligations of deployers of high-risk AI systems (worker information)', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-26', kind: 'standards' },
  { id: 'S28', label: 'EU — AI Act Article 86: right to explanation of individual decision-making', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-86', kind: 'standards' },
  { id: 'S30', label: 'EU — AI Act Article 50: transparency obligations for AI interacting with people (Commission FAQ)', url: 'https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act', kind: 'standards' },
  { id: 'S31', label: 'EU — GDPR Article 5: principles relating to processing of personal data', url: 'https://gdpr-info.eu/art-5-gdpr/', kind: 'standards' },
  { id: 'S32', label: 'ISO/IEC 42001 — Artificial intelligence management system', url: 'https://www.iso.org/standard/42001', kind: 'standards' },
  { id: 'S33', label: 'ISO/IEC 42005 — AI system impact assessment', url: 'https://www.iso.org/standard/42005', kind: 'standards' },
];

export const KIND_LABEL: Record<Source['kind'], T> = {
  market: { en: 'Market and vendors', es: 'Mercado y proveedores' },
  standards: { en: 'Standards and institutions', es: 'Estándares e instituciones' },
  academic: { en: 'Academic signals', es: 'Señales académicas' },
  books: { en: 'Books and competing works', es: 'Libros y obras competidoras' },
};

export const METHOD_NOTES: T[] = [
  {
    en: 'Market research represents a snapshot as of 9 August 2026. Product positioning and capabilities change quickly.',
    es: 'La investigación de mercado representa un corte al 9 de agosto de 2026. El posicionamiento y las capacidades de producto cambian rápidamente.',
  },
  {
    en: 'Vendor claims are read as product positioning, not as independent validation of performance. That includes the author’s own platform.',
    es: 'Las afirmaciones de vendors se interpretan como posicionamiento de producto, no como validación independiente de performance. Eso incluye la plataforma del propio autor.',
  },
  {
    en: 'The 120-principle matrix is an original synthesis drawn from HR, management, workforce analytics, security and risk. It does not attribute those principles to any single organisation.',
    es: 'La matriz de 120 principios es una síntesis propia inspirada en disciplinas de RR. HH., management, workforce analytics, seguridad y riesgo. No pretende atribuir esos principios a una única organización.',
  },
  {
    en: 'ISO 30414:2025 and the ISO/TC 260 catalogue are used as evidence that human resource management comprises multiple measurable, standardisable areas; CIPD for performance and line management; ILO for the boundaries of human rights; NIST for AI risk governance. None of these bodies endorses this standard.',
    es: 'ISO 30414:2025 y el catálogo ISO/TC 260 se usan como evidencia de que la gestión de recursos humanos comprende múltiples áreas medibles y estandarizables; CIPD para performance y line management; OIT para fronteras de derechos humanos; NIST para gobierno de riesgo de IA. Ninguna de esas instituciones respalda este estándar.',
  },
  {
    en: 'The arXiv papers are preprints unless otherwise stated, and are used as signals of emerging research rather than settled scientific consensus.',
    es: 'Los papers de arXiv son preprints salvo que se indique otra cosa, y se usan como señales de investigación emergente, no como consenso científico definitivo.',
  },
  {
    en: 'The definition, the nine-property test, the maturity model, the transition playbooks, the HWFA and this standard itself are conceptual proposals developed in this work. They are not official standards of ISO, NIST, the ILO or any cited vendor.',
    es: 'La definición, el test de nueve propiedades, el modelo de madurez, los playbooks de transición, el HWFA y este mismo estándar son propuestas conceptuales desarrolladas en este trabajo. No son estándares oficiales de ISO, NIST, la OIT ni de ningún proveedor citado.',
  },
];

export const CONCEPTUAL: T[] = [
  { en: 'Henri Fayol — unity of command, authority and responsibility, division of labour.', es: 'Henri Fayol — unidad de mando, autoridad/responsabilidad, división del trabajo.' },
  { en: 'Peter Drucker — management by objectives, effectiveness and managerial responsibility.', es: 'Peter Drucker — dirección por objetivos, efectividad y responsabilidad gerencial.' },
  { en: 'W. Edwards Deming — measurement, system, variation and continuous improvement.', es: 'W. Edwards Deming — medición, sistema, variación y mejora continua.' },
  { en: 'Dave Ulrich and the modern tradition of human resource management — talent design and organisational capability.', es: 'Dave Ulrich y la tradición moderna de human resource management — diseño del talento y capacidad organizacional.' },
  { en: 'Contemporary practice in performance management, organisational design, RBAC, least privilege, segregation of duties and enterprise risk management.', es: 'Prácticas contemporáneas de performance management, diseño organizacional, RBAC, least privilege, segregación de funciones y gestión de riesgo empresarial.' },
];

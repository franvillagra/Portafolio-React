import smartwayLogo from '../assets/img/Smartway.png';
import dsntecLogo   from '../assets/img/Dsntec.jpg';
import wirallLogo   from '../assets/img/Wirall.jpg';
import tagLogo      from '../assets/img/Tag.png';
import macenaLogo   from '../assets/img/Macena.jpg';
import utnLogo      from '../assets/img/UTN.jpg';
import cymImg      from '../assets/img/project2.png';
import avatelImg    from '../assets/img/Avatel.png';
import racoImg      from '../assets/img/Raco.png';
import molinosImg   from '../assets/img/Molinos.png';
import rodeoImg     from '../assets/img/ROdeo.png';
import gecrosImg     from '../assets/img/project-img1.png';
import uncLogo      from '../assets/img/unc.jpg';
import azureLogo      from '../assets/img/azure.jpg';
import udemyLogo      from '../assets/img/udemy.png';
/* ─── Work Experience ─────────────────────────────────────────────────── */
export const experiences = [
  {
    id: 1,
    company: 'SMARTWAY',
    client: 'Avatel',
    period: 'May 2023 – Mar 2026',
    duration: '~3 years',
    role: 'Full Stack / Backend Developer',
    logo: smartwayLogo,
    tech: ['.NET 6', 'Vue.js 2', 'Docker', 'Oracle', 'Redis', 'Hangfire', 'RabbitMQ', 'Elasticsearch', 'Kong Gateway'],
    highlights: [
      'Maintained and optimized large-scale enterprise telecom systems for Avatel',
      'Designed microservices integrations improving system reliability and throughput',
      'Streamlined deployments via Docker containerization workflows',
      'Performance tuning across critical billing and porting processes',
    ],
  },
  {
    id: 2,
    company: 'EMPACT IT',
    client: 'DsnTec',
    period: 'Sept 2022 – May 2023',
    duration: '~8 months',
    role: '.NET Developer / Mobile Developer',
    logo: dsntecLogo,
    tech: ['ASP.NET Core', 'Flutter', 'SQL Server'],
    highlights: [
      'Built and maintained backend REST services for business applications',
      'Developed a cross-platform mobile app from scratch with Flutter',
      'Optimized SQL Server queries reducing response times significantly',
    ],
  },
  {
    id: 3,
    company: 'WIRALL',
    client: 'Raco',
    period: 'Feb 2022 – Sept 2022',
    duration: '~7 months',
    role: 'Full Stack Developer',
    logo: wirallLogo,
    tech: ['.NET Core 5', 'Angular 10', 'MySQL', 'Docker'],
    highlights: [
      'Led full Java-to-.NET migration — improved performance and maintainability',
      'Modernized legacy frontend with Angular 10',
      'Containerized services with Docker improving scalability',
    ],
  },
  {
    id: 4,
    company: 'TAG LATAM',
    client: null,
    period: 'Aug 2021 – Feb 2022',
    duration: '~6 months',
    role: '.NET Developer',
    logo: tagLogo,
    tech: ['ASP.NET', 'Razor', '.NET Core', 'SQL Server', 'PostgreSQL', 'Jenkins'],
    highlights: [
      'Maintained enterprise web systems with high-availability SLAs',
      'Improved database performance across SQL Server and PostgreSQL instances',
      'Implemented CI/CD pipelines via Jenkins, reducing manual deployment effort',
    ],
  },
  {
    id: 5,
    company: 'MACENA S.A.',
    client: null,
    period: '2018 – 2021',
    duration: '~3 years',
    role: 'BI Developer / Full Stack Developer',
    logo: macenaLogo,
    tech: ['SQL Server', 'ETL', 'Pentaho', 'Saiku', 'VB.NET', 'ASP.NET', 'Vue.js'],
    highlights: [
      'Built data warehouse and ETL pipelines with Pentaho for business intelligence',
      'Developed interactive BI dashboards enabling data-driven decisions',
      'Migrated legacy VB.NET monolith to modern .NET Core stack',
    ],
  },
];

/* ─── Tech Stack ──────────────────────────────────────────────────────── */
export const techStack = [
  {
    category: 'Backend',
    color: 'blue',
    items: ['C#', '.NET / .NET Core', 'ASP.NET Core', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Frontend',
    color: 'cyan',
    items: ['Vue.js', 'Angular', 'Flutter', 'React', 'Razor'],
  },
  {
    category: 'Databases',
    color: 'emerald',
    items: ['SQL Server', 'Oracle', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'DevOps & CI/CD',
    color: 'violet',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitFlow'],
  },
  {
    category: 'Cloud & AI',
    color: 'amber',
    items: ['Azure', 'Azure AI', 'Azure Fundamentals'],
  },
  {
    category: 'Tools & Messaging',
    color: 'rose',
    items: ['RabbitMQ', 'Elasticsearch', 'Hangfire', 'Kong Gateway', 'n8n'],
  },
];

/* ─── Projects ────────────────────────────────────────────────────────── */
export const projects = [
  {
    id: 1,
    title: 'Avatel – Telecom Enterprise Platform',
    company: 'SMARTWAY · Avatel',
    image: avatelImg,
    description:
      'Large-scale telecom operations platform handling number porting, portability processes, billing cycles, and system integrations for a major Spanish telecom operator.',
    tech: ['.NET 6', 'Vue.js 2', 'Oracle', 'Redis', 'RabbitMQ', 'Elasticsearch', 'Docker'],
  },
  {
    id: 2,
    title: 'Raco – IoT Fleet Management Platform',
    company: 'WIRALL · Raco',
    image: racoImg,
    description:
      'Enterprise IoT platform for fleet and asset management. Migrated from Java to .NET Core 5 and modernized the Angular frontend while containerizing all services for better scalability.',
    tech: ['.NET Core 5', 'Angular 10', 'MySQL', 'Docker'],
  },
  {
    id: 3,
    title: 'Molinos – Agribusiness Data System',
    company: 'Molinos S.A',
    image: molinosImg,
    description:
      'Enterprise data management system for agricultural operations — handling large volumes of transactional data, reporting workflows, and integration with legacy ERP systems.',
    tech: ['ASP.NET', 'SQL Server', 'ETL', 'Pentaho'],
  },
  {
    id: 4,
    title: 'Rodeo – Management Platform',
    company: 'Rodeo Houston',
    image: rodeoImg,
    description:
      'Business management web platform with custom reporting, user management, and multi-module architecture. Built with .NET Core backend and a fully responsive frontend.',
    tech: ['.NET Core', 'Vue.js', 'SQL Server', 'REST API'],
  },
    {
    id: 5,
    title: 'Cym',
    company: 'Internal Project',
    image: cymImg,
    description:
      'Business management web platform with custom reporting, user management, and multi-module architecture. Built with .NET Core backend and a fully responsive frontend.',
    tech: ['.NET Core', 'Vue.js', 'SQL Server', 'REST API'],
  },
    {
    id: 6,
    title: 'Gecros',
    company: 'Macena S.A.',
    image: gecrosImg,
    description:
      'Business management web platform with custom reporting, user management, and multi-module architecture. Built with .NET Core backend and a fully responsive frontend.',
    tech: ['.NET Core', 'Vue.js', 'SQL Server', 'REST API'],
  },
];

/* ─── Certifications ─────────────────────────────────────────────────── */
export const certifications = [
  {
    title: 'Systems Engineer',
    institution: 'Universidad Tecnológica Nacional (UTN)',
    year: '2021',
    logo: utnLogo,
    status: 'completed',
  },
  {
    title: 'Azure AI-200 Certification',
    institution: 'Microsoft Azure',
    year: '2025',
    logo: azureLogo,
    status: 'in-progress',
  },
  {
    title: 'DevOps: Docker, Kubernetes, Jenkins & GitFlow CI/CD',
    institution: 'Online Certification',
    year: '2023',
    logo: udemyLogo,
    status: 'completed',
  },
  {
    title: 'English – Level 5',
    institution: 'Universidad Nacional de Córdoba (UNC)',
    year: '2024',
    logo: uncLogo,
    status: 'in-progress',
  },
];

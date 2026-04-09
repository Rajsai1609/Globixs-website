import { PrismaClient, JobStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Services
  const services = [
    {
      slug: 'staff-augmentation',
      title: 'Staff Augmentation',
      shortDesc: 'Embed pre-vetted engineers and analysts into your team quickly.',
      longDesc:
        'Globixs places skilled professionals across full-stack development, cloud engineering, data analytics, QA, and platform operations to help enterprise teams deliver faster.',
      category: 'IT Staffing',
      icon: 'users',
    },
    {
      slug: 'it-consulting',
      title: 'IT Consulting',
      shortDesc: 'Strategic technology guidance for modernization and scale.',
      longDesc:
        'We provide consulting support for cloud architecture, digital transformation planning, delivery operating models, and platform modernization initiatives.',
      category: 'IT Staffing',
      icon: 'lightbulb',
    },
    {
      slug: 'managed-services',
      title: 'Managed Services',
      shortDesc: 'Operational support across core IT and support functions.',
      longDesc:
        'From network administration and IAM to security operations and helpdesk support, our managed services teams help stabilize and scale day-to-day technology operations.',
      category: 'IT Staffing',
      icon: 'shield',
    },
    {
      slug: 'data-services',
      title: 'Data & Analytics Services',
      shortDesc: 'Data engineering, analytics, and BI delivery support.',
      longDesc:
        'We support enterprise data initiatives spanning BI reporting, analytics engineering, dashboarding, and AI/ML pipeline enablement for decision intelligence.',
      category: 'IT Staffing',
      icon: 'chart',
    },
    {
      slug: 'release-engineering',
      title: 'Release Engineering',
      shortDesc: 'CI/CD, QA automation, and production release support.',
      longDesc:
        'Our teams help automate release processes, strengthen testing discipline, and improve deployment reliability from development through production operations.',
      category: 'IT Staffing',
      icon: 'refresh',
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }

  // Industries
  await prisma.industry.createMany({
    data: [
      {
        slug: 'healthcare',
        name: 'Healthcare',
        summary:
          'Supporting providers, payers, and health-tech companies with compliant, patient-centric solutions.',
      },
      {
        slug: 'finance',
        name: 'Finance',
        summary:
          'Modernizing financial platforms with a focus on security, resilience, and regulatory alignment.',
      },
      {
        slug: 'banking',
        name: 'Banking',
        summary:
          'Digital banking capabilities, integrations, and data solutions for regional and global institutions.',
      },
      {
        slug: 'retail',
        name: 'Retail',
        summary:
          'Omnichannel experiences, inventory visibility, and analytics for modern retail organizations.',
      },
      {
        slug: 'logistics',
        name: 'Logistics',
        summary:
          'Visibility and optimization across the supply chain, from warehouse to last-mile.',
      },
      {
        slug: 'media',
        name: 'Media',
        summary:
          'Content platforms, personalization, and analytics for media and entertainment brands.',
      },
      {
        slug: 'enterprise-technology',
        name: 'Enterprise Technology',
        summary:
          'Partnering with software and platform providers to extend, implement, and support their solutions.',
      },
    ],
    skipDuplicates: true,
  });

  // Jobs
  const jobs = [
    {
      slug: 'senior-full-stack-engineer',
      title: 'Senior Full-Stack Engineer',
      location: 'Remote - US',
      employmentType: 'Full-time',
      summary:
        'Build and scale customer-facing products and internal platforms used by enterprise teams.',
      description:
        'As a Senior Full-Stack Engineer, you will design, build, and operate modern web applications in collaboration with product managers, designers, and platform teams. You will contribute across architecture, implementation, testing, and production reliability while mentoring engineers and driving engineering standards.',
      requirements:
        '- 6+ years of professional software engineering experience\n- Strong experience building production systems with modern frontend and backend frameworks\n- Experience designing APIs, data models, and distributed services\n- Experience with cloud platforms and CI/CD workflows\n- Strong communication and stakeholder collaboration skills',
      status: JobStatus.OPEN,
    },
    {
      slug: 'cloud-devops-engineer',
      title: 'Cloud / DevOps Engineer',
      location: 'Hybrid - Dallas, TX',
      employmentType: 'Contract',
      summary:
        'Design and improve cloud infrastructure, deployment automation, and production reliability.',
      description:
        'In this role, you will partner with engineering and security teams to build scalable cloud foundations and resilient delivery pipelines. You will focus on infrastructure as code, observability, release automation, and operational excellence for mission-critical workloads.',
      requirements:
        '- 4+ years of experience in DevOps, SRE, or cloud platform engineering\n- Hands-on expertise with infrastructure as code (Terraform or equivalent)\n- Experience with container orchestration and cloud networking fundamentals\n- Experience implementing monitoring, alerting, and incident response practices\n- Strong scripting and automation mindset',
      status: JobStatus.OPEN,
    },
    {
      slug: 'data-analyst',
      title: 'Data Analyst',
      location: 'Onsite - Chicago, IL',
      employmentType: 'Contract-to-hire',
      summary:
        'Deliver insights through analytics, reporting, and data storytelling for business stakeholders.',
      description:
        'As a Data Analyst, you will work with cross-functional teams to define metrics, analyze trends, and build dashboards that support strategic decision making. You will transform data into clear recommendations and communicate findings to both technical and non-technical audiences.',
      requirements:
        '- 3+ years of experience in analytics, business intelligence, or data analysis roles\n- Advanced SQL proficiency and strong data validation practices\n- Experience with BI platforms such as Power BI, Tableau, or Looker\n- Ability to communicate insights clearly with business stakeholders\n- Experience translating ambiguous business questions into measurable analyses',
      status: JobStatus.DRAFT,
    },
  ];

  for (const job of jobs) {
    await prisma.job.upsert({
      where: { slug: job.slug },
      update: job,
      create: job,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


/**
 * Server-side Portfolio Context
 * 
 * This module provides trusted portfolio information to the AI assistant.
 * It's based on the main profile data but is used only on the server side.
 * The assistant uses this as its knowledge base to answer questions.
 */

export const portfolioContext = {
  personal: {
    name: 'Yashfa Mir',
    location: 'Rawalpindi, Pakistan',
    email: 'yashfamir22@gmail.com',
    degree: 'Bachelor of Science in Information Technology',
    university: 'National University of Modern Languages (NUML), Islamabad',
    cgpa: '3.67',
    status: 'Final semester',
    summary:
      'Motivated IT undergraduate with hands-on experience in UI/UX design, programming, database management, and digital marketing. Passionate about crafting intuitive, user-centered digital experiences through wireframing, prototyping, user flows, and strong visual identity design.',
  },

  skills: {
    design: [
      'UI/UX Design',
      'Wireframing',
      'Prototyping',
      'User Flow Design',
      'User Research',
      'Visual Identity & Branding',
      'Figma',
      'Canva',
    ],
    technical: [
      'Digital Marketing',
      'Database Management',
      'Technical Documentation',
      'Programming',
      'MySQL',
      'SQL Server',
      'C++',
      'Java',
      'MS Office',
    ],
    soft: ['Creativity', 'Problem-Solving', 'Team Collaboration', 'Attention to Detail', 'Adaptability', 'Continuous Learning'],
  },

  experience: [
    {
      role: 'Front-End AI Engineering Intern',
      organization: 'FlyRank AI / FlyRank Corp.',
      location: 'Remote',
      date: 'July 1, 2026 – August 31, 2026',
      description:
        'Educational internship focused on front-end implementation patterns for AI-enabled product experiences. Built responsive, mobile-optimized pages and reusable UI blocks. Practiced storefront patterns aligned with Shopline/Shopify-style patterns. Used modern frameworks and AI tools to assist with coding.',
    },
    {
      role: 'Virtual Internship – UI/UX Designer',
      organization: 'DevelopersHub Corporation',
      location: 'Remote',
      date: 'Jul–Aug 2025',
      description:
        'Designed and improved user interfaces using Figma for web and mobile applications. Created end-to-end wireframes, interactive prototypes, and user flows. Focused on accessibility and usability.',
    },
    {
      role: 'Virtual Internship – C++ Programming',
      organization: 'DEP-Pakistan',
      location: 'Remote',
      date: 'July 2024',
      description:
        'Four-week virtual internship focused on object-oriented programming, data structures, and problem-solving. Received the "Best Award" for outstanding skills and contributions.',
    },
    {
      role: 'Marketing Associate',
      organization: 'EBL Pakistan',
      location: 'Pakistan',
      date: '2022–2023',
      description:
        'Promoted financial services through digital media and personal outreach. Supported client acquisition and lead-generation activities. Gained experience in affiliate marketing, client communication, and digital campaign coordination.',
    },
    {
      role: 'Documentation Coordinator',
      organization: 'NSES Society – NUML University',
      location: 'Islamabad',
      date: '2022–2023',
      description:
        'Prepared reports, proposals, and write-ups for society events and communications. Coordinated documentation workflows and content records.',
    },
  ],

  projects: [
    {
      title: 'SkillPulse AI',
      description: 'AI-Powered Career Guidance Platform',
      year: '2025',
      tools: ['Figma', 'UI/UX Design', 'User Research'],
      details:
        'Designed an AI-powered career guidance platform helping students identify strengths and explore career paths. Designed onboarding screens, skill-mapping dashboards, and results pages with a clean visual language.',
      caseStudy: '/projects/skillpulse',
    },
    {
      title: 'Social Connect App',
      description: 'Minimal Social Media Application',
      year: '2025',
      tools: ['Figma', 'Wireframing', 'Prototyping'],
      details:
        'Designed a minimal social media application focused on communication, content sharing, and digital communities. Created low-to-high fidelity wireframes, interactive prototypes, and a reusable component library.',
      caseStudy: '/projects/social-connect',
    },
    {
      title: 'Soda Pop Product Design',
      description: 'Beverage Branding & Packaging',
      year: '2025',
      tools: ['Figma', 'Canva', 'Visual Identity Design'],
      details: 'Created beverage branding and packaging design. Developed color systems, typography hierarchy, and label layouts.',
      caseStudy: '/projects/soda-pop',
    },
  ],

  certifications: [
    {
      title: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic',
    },
    {
      title: 'Claude 101',
      issuer: 'Anthropic',
    },
    {
      title: 'Foundations of Project Management',
      issuer: 'Coursera',
    },
    {
      title: 'Project Initiation: Starting a Successful Project',
      issuer: 'Coursera',
    },
    {
      title: 'Project Planning: Putting It All Together',
      issuer: 'Coursera',
    },
  ],

  awards: [
    'Best Award – C++ Virtual Internship, DEP-Pakistan',
    'Active Member – NSES Documentation Team, NUML University',
    'Participated in technology, UI/UX design, and digital marketing workshops',
    'Participated in collaborative software and design projects',
  ],

  interests: [
    'UI/UX Design',
    'Frontend Development',
    'AI and Product Thinking',
    'User-Centered Design',
    'Digital Product Strategy',
  ],
};

/**
 * Generates a formatted portfolio summary for the AI assistant
 * This is sent with each request to provide context
 */
export function generatePortfolioSummary(): string {
  const { personal, skills, experience, projects, certifications } = portfolioContext;

  return `
About Yashfa Mir:
${personal.summary}

Location: ${personal.location}
Education: ${personal.degree} from ${personal.university} (CGPA: ${personal.cgpa}, ${personal.status})
Email: ${personal.email}

Core Skills:
- Design: ${skills.design.join(', ')}
- Technical: ${skills.technical.join(', ')}
- Soft Skills: ${skills.soft.join(', ')}

Recent Projects:
${projects
  .map(
    (p) => `
- ${p.title} (${p.year}): ${p.description}
  Tools: ${p.tools.join(', ')}
  Details: ${p.details}
  Case Study: ${p.caseStudy}
`
  )
  .join('')}

Experience Highlights:
${experience
  .slice(0, 2)
  .map(
    (exp) => `
- ${exp.role} at ${exp.organization} (${exp.date})
  ${exp.description}
`
  )
  .join('')}

Certifications:
${certifications.map((cert) => `- ${cert.title} (${cert.issuer})`).join('\n')}

Professional Interests: ${portfolioContext.interests.join(', ')}
`;
}

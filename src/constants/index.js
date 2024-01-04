import * as img from '../assets/index.js';
export const experiences = {
  heading: 'the History of Innovation',
  title: 'experiences',
  subtitle: 'traditional, non-tranditional',
  details: [
    {
      title: 'Software Engineer',
      company_name: 'IMAGINEXT',
      icon: '',
      iconBg: '#383E56',
      date: '2022 - Current',
      points: [
        'Leveraged Next.js and Node.js for a seamless, interactive debugging experience.',
        'Published an npm package for effortless integration and community collaboration.',
        'Implemented TypeScript for smoother onboarding, simpler dependencies, and streamlined maintenance.',
        'Built visualization tools (D3 & AST parser) for clear navigation and understanding of complex Next.js applications.',
        'Crafted robust E2E tests with Cypress to ensure app stability and rapid issue resolution.',
        'Product developed under tech accelerator with OS Labs (opensourcelabs.io)',
      ],
    },
    {
      title: 'Market Risk Associate',
      company_name: 'CHINA MERCHANTS BANK',
      icon: '',
      iconBg: '#383E56',
      date: '2016 - Current',
      points: [
        'Developed and integrated 100% of fair market value models, seamlessly integrated with third-party APIs.',
        'Optimized VBA scripts and custom algorithms for monitoring FX rates, enforcing internal policies.',
        'Achieved 80% faster processing while ensuring compliance with profit & loss limits.',
        'Automated file transfers and folder creation with Batch Scripts, saving over an hour per week in productivity.',
        'Designed and maintained monthly transaction reports using SQL databases, guaranteeing reliable summary statistics.',
      ],
    },
  ],
};

export const skills = {
  heading: 'What products are made of',
  title: 'skills',
  subtitle: 'front-end, back-end, and another-end',
};

export const projects = {
  heading: 'From zero to pixels',
  title: 'projects',
  subtitle: 'code caffeine, code brew',
  one: {
    name: 'OpenAI Exploration',
    address: 'https://github.com/arrickx/openai-exploration',
    src: img.gptLogo,
    alt: 'GPT Project Icon',
    description:
      'This project demonstrates various functionalities of the OpenAI API,including chat, Document QA, function calling, and semantic search.',
    tag: '#openai #langchain #javascript',
  },
  two: {
    name: 'LastResort',
    address: 'https://github.com/arrickx/lastResort',
    src: img.lastresortLogo,
    alt: 'LastResort Project Icon',
    description:
      'A website where anonymous micro-stories capture the fleeting essence of daily life, inviting you to share, reflect, and connect.',
    tag: '#react #express #webpack',
  },
};

export const github = {
  address: 'https://github.com/arrickx',
  src: img.githubLogo,
  alt: 'GitHub Logo',
};

export const linkedin = {
  address: 'https://www.linkedin.com/in/richterlau/',
  src: img.linkedinLogo,
  alt: 'LinkedIn Logo',
};

export const email = {
  address:
    'mailto:richterxlau@gmail.com?subject=Reaching%20out%20from%20%5BCompany%20Name%5D&body=Hi%20Richter,%0D%0A%0D%0AThis%20is%20%5BName%5D%20from%20%5BCompany%20Name%5D.%20Are%20you%20interested%20in%20learning%20more%20about%20potential%20roles%20at%20our%20company%3F%20I%27d%20be%20happy%20to%20share%20some%20information%20and%20answer%20any%20questions%20you%20have.%0D%0A%0D%0ABest,%0D%0A%5BName%5D',
  src: img.emailLogo,
  alt: 'Email Logo',
};

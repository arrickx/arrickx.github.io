import * as img from '../assets/index.js';
export const author = {
  name:'RICHTER LAU',
  statement:'In the code flow, building impossible.',
  statement2:'Always coding, always learning.',
  src: img.owlLight,
  alt: 'Hero Logo'
}
export const experiences = {
  heading: 'the History of Innovation',
  title: 'experiences',
  subtitle: 'traditional, non-tranditional',
  one:{
      title: 'Software Engineer',
      company_name: 'IMAGINEXT',
      date: '2022 - Current',
      details: [
        'Leveraged Next.js and Node.js for a seamless, interactive debugging experience.',
        'Published an npm package for effortless integration and community collaboration.',
        'Implemented TypeScript for smoother onboarding, simpler dependencies, and streamlined maintenance.',
        'Built visualization tools (D3 & AST parser) for clear navigation and understanding of complex Next.js applications.',
        'Crafted robust E2E tests with Cypress to ensure app stability and rapid issue resolution.',
        'Product developed under tech accelerator with OS Labs (opensourcelabs.io)',
      ],
    },
    two:{
      title: 'Market Risk Associate',
      company_name: 'CHINA MERCHANTS BANK',
      date: '2016 - Current',
      details: [
        'Developed and integrated 100% of fair market value models, seamlessly integrated with third-party APIs.',
        'Optimized VBA scripts and custom algorithms for monitoring FX rates, enforcing internal policies.',
        'Achieved 80% faster processing while ensuring compliance with profit & loss limits.',
        'Automated file transfers and folder creation with Batch Scripts, saving over an hour per week in productivity.',
        'Designed and maintained monthly transaction reports using SQL databases, guaranteeing reliable summary statistics.',
      ],
    },
};

export const skills = {
  heading: 'What products are made of',
  title: 'skills',
  subtitle: 'front-end, back-end, and another-end',
  backend: {
    title: 'back-end',
    style:'max-md:order-2',
    item: [
      { src: img.nodeLogo, alt: 'Node.js Logo' },
      { src: img.mongoLogo, alt: 'MongoDB Logo' },
      { src: img.psqlLogo, alt: 'PostgreSQL Logo' },
      { src: img.graphqlLogo, alt: 'GraphQL Logo' },
    ],
  },
  frontend: {
    title: 'front-end',
    style:'max-md:order-1',
    item: [
      { src: img.reactLogo, alt: 'React Logo' },
      { src: img.jsLogo, alt: 'JavaScript Logo' },
      { src: img.reduxLogo, alt: 'Redux Logo' },
      { src: img.tsLogo, alt: 'TypeScript Logo' },
    ],
  },
  tools: {
    title: 'testings & tools',
    style:'max-md:order-3',
    item: [
      { src: img.openaiLogo, alt: 'OpenAI Logo' },
      { src: img.figmaLogo, alt: 'Figma Logo' },
      { src: img.gitLogo, alt: 'Git Logo' },
      { src: img.jestLogo, alt: 'Jest Logo' },
    ],
  },
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

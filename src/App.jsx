import * as img from './assets/index.js';
import FooterIcon from './components/FooterIcon.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import * as data from './constants/index.js';
import './index.css';

function App() {
  return (
    <div>
      <div className='font-outfit justify-end items-center bg-stone-950 flex flex-col px-20 py-12 max-md:px-5'>
        {/* hero */}
        <header className='w-full max-w-[1440px] mt-14 max-md:max-w-full max-md:mt-40 section-break'>
          <div className='gap-5 flex max-md:flex-col max-md:items-center max-md:gap-0'>
            <article className='flex flex-col items-stretch w-[55%] mt-[25%] max-md:w-full max-md:ml-0 max-md:mt-20 max-md:order-2'>
              <div className='justify-center items-stretch flex flex-col'>
                <h1 className='text-white text-left font-bold text-5xl tracking-widest leading-[80px] max-xl:text-4xl max-md:text-3xl max-md:leading-10  max-md:text-center'>
                  RICHTER LAU
                </h1>
                <p className='text-zinc-400 text-left text-3xl leading-15 max-xl:text-2xl max-lg:text-xl max-md:text-center max-md:mt-6'>
                  In the code flow, building impossible.
                </p>
              </div>
            </article>
            <figure className='flex flex-col items-stretch w-[45%] max-w-xl max-md:w-full max-md:max-w-[280px] max-md:order1'>
              <img
                loading='lazy'
                src={img.hero}
                alt='Hero Image'
                className='w-full max-md:mt-50 rounded-[50px] '
              />
            </figure>
          </div>
        </header>
        {/* skills */}
        <SectionHeading
          heading={data.skills.heading}
          title='skills'
          subtitle='front-end, back-end, and another-end'
        />
        {/* icons */}
        <section className='section-wrap'>
          <section className=' max-md:order-2'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.nodeLogo} alt='Node.js Logo' />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img
                  loading='lazy'
                  src={img.mongoLogo}
                  alt='MongoDB Logo'
                  className='p-2.5'
                />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.psqlLogo} alt='PostgreSQL Logo' />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.graphqlLogo} alt='GraphQL Logo' />
              </div>
            </div>
            <p className='text-subtitle icon-title'>back-end</p>
          </section>

          <section className='max-md:order-1'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.reactLogo} alt='React Logo' />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.jsLogo} alt='JavaScript Logo' />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.reduxLogo} alt='Redux Logo' />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.tsLogo} alt='TypeScript Logo' />
              </div>
            </div>
            <p className='text-subtitle icon-title'>front-end</p>
          </section>

          <section className='max-md:order-3'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.openaiLogo} alt='OpenAI Logo' />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img
                  loading='lazy'
                  src={img.figmaLogo}
                  alt='Figma Logo'
                  className='p-1.5'
                />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.gitLogo} alt='Git Logo' />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.jestLogo} alt='Jest Logo' />
              </div>
            </div>
            <p className='text-subtitle icon-title'>testings & tools</p>
          </section>
        </section>

        {/* experiences */}
        <SectionHeading
          heading={data.experiences.heading}
          title={data.experiences.title}
          subtitle={data.experiences.subtitle}
        />
        <section className='section-wrap'>
          <div className='section-column'>
            <p className='text-head'>IMAGINEXT</p>
            <p className='text-title2'>Software Engineer</p>
            <p className='text-subtitle'>2022 - Present</p>
            <ul className='text-desc'>
              <li>
                Leveraged Next.js and Node.js for a seamless, interactive
                debugging experience.
              </li>
              <li>
                Published an npm package for effortless integration and
                community collaboration.
              </li>
              <li>
                Implemented TypeScript for smoother onboarding, simpler
                dependencies, and streamlined maintenance.
              </li>
              <li>
                Built visualization tools (D3 &amp; AST parser) for clear
                navigation and understanding of complex Next.js applications.
              </li>
              <li>
                Crafted robust E2E tests with Cypress to ensure app stability
                and rapid issue resolution.
              </li>
              <li>
                Product developed under tech accelerator with OS Labs
                (opensourcelabs.io).
              </li>
            </ul>
          </div>
          <div className='section-column'>
            <p className='text-head'>CHINA MERCHANTS BANK</p>
            <p className='text-title2'>Credit Risk Associate</p>
            <p className='text-subtitle'>2016 - Present</p>
            <ul className='text-desc'>
              <li>
                Developed and integrated 100% of fair market value models,
                seamlessly integrated with third-party APIs.
              </li>
              <li>
                Optimized VBA scripts and custom algorithms for monitoring FX
                rates, enforcing internal policies.
              </li>
              <li>
                Achieved 80% faster processing while ensuring compliance with
                profit &amp; loss limits.
              </li>
              <li>
                Automated file transfers and folder creation with Batch Scripts,
                saving over an hour per week in productivity.
              </li>
              <li>
                Designed and maintained monthly transaction reports using SQL
                databases, guaranteeing reliable summary statistics
              </li>
            </ul>
          </div>
        </section>

        {/* projects */}
        <SectionHeading
          heading={data.projects.heading}
          title={data.projects.title}
          subtitle={data.projects.subtitle}
        />

        <section className='section-wrap'>
          <ProjectCard
            title={data.projects.one.name}
            href={data.projects.one.address}
            src={data.projects.one.src}
            alt={data.projects.one.alt}
            description={data.projects.one.description}
            tag={data.projects.one.tag}
          />

          <ProjectCard
            title={data.projects.two.name}
            href={data.projects.two.address}
            src={data.projects.two.src}
            alt={data.projects.two.alt}
            description={data.projects.two.description}
            tag={data.projects.two.tag}
          />
        </section>

        <footer className='max-md:-mt-24'>
          <p className='text-lg md:text-xl lg:text-2xl text-accent'>
            Always coding, always learning.
          </p>
          <div className='flex flex-row justify-center gap-5 mt-5'>
            <FooterIcon
              href={data.github.address}
              src={data.github.src}
              alt={data.github.alt}
            />
            <FooterIcon
              href={data.linkedin.address}
              src={data.linkedin.src}
              alt={data.linkedin.alt}
            />
            <FooterIcon
              href={data.email.address}
              src={data.email.src}
              alt={data.email.alt}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

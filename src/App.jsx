import * as img from './assets/index.js';
import './index.css';

function App() {
  return (
    <div>
      <div className='font-outfit justify-end items-center bg-stone-950 flex flex-col px-20 py-12 max-md:px-5'>
        {/* hero */}
        <header className='w-full max-w-[1440px] mt-14 max-md:max-w-full max-md:mt-10'>
          <div className='gap-5 flex max-md:flex-col max-md:items-center max-md:gap-0'>
            <article className='flex flex-col items-stretch w-[55%] mt-[25%] max-md:w-full max-md:ml-0 max-md:mt-8 max-md:order-2'>
              <div className='justify-center items-stretch flex flex-col'>
                <h1 className='text-white text-left font-bold text-5xl tracking-widest leading-[80px] max-xl:text-4xl max-md:text-3xl max-md:leading-10  max-md:text-center'>
                  RICHTER LAU
                </h1>
                <p className='text-zinc-400 text-left text-3xl leading-15 max-xl:text-2xl max-lg:text-xl max-md:text-center'>
                  In the code flow, building impossible.
                </p>
              </div>
            </article>
            <figure className='flex flex-col items-stretch w-[45%] max-w-xl max-md:w-full max-md:max-w-[280px] max-md:order1'>
              <img
                loading='lazy'
                src={img.hero}
                className='w-full max-md:mt-50 rounded-[50px] '
              />
            </figure>
          </div>
        </header>
        {/* skills */}
        <p className='text-head'>what products made of</p>
        <p className='text-title'>skills</p>
        <p className='text-subtitle'>front-end , back-end and another-end</p>
        {/* icons */}
        <section className='section-wrap'>
          <section className=' max-md:order-2'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.nodeLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.mongoLogo} className='p-2.5' />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.psqlLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.graphqlLogo} />
              </div>
            </div>
            <p className='text-subtitle icon-title'>back-end</p>
          </section>

          <section className='max-md:order-1'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.reactLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.jsLogo} />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.reduxLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.tsLogo} />
              </div>
            </div>
            <p className='text-subtitle icon-title'>front-end</p>
          </section>

          <section className='max-md:order-3'>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.openaiLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.figmaLogo} className='p-1.5' />
              </div>
            </div>
            <div className='icon-row'>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.gitLogo} />
              </div>
              <div className='icon-px bg-zinc-900'>
                <img loading='lazy' src={img.jestLogo} />
              </div>
            </div>
            <p className='text-subtitle icon-title'>testings & tools</p>
          </section>
        </section>

        {/* experiences */}
        <p className='text-head'>the History of Innovation</p>
        <p className='text-title'>experiences</p>
        <p className='text-subtitle'>traditional, non-tranditional</p>
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
        <p className='text-head'>From zero to pixels</p>
        <p className='text-title'>projects</p>
        <p className='text-subtitle'>code caffeine, code brew</p>

        <section className='section-wrap'>
          <div className='section-column '>
            <p className='text-title2'>OpenAI Exploration</p>
            <img loading='lazy' src={img.gptLogo} className='project-img' />
            <p className='project-desc'>
              This project demonstrates various functionalities of the OpenAI
              API,including chat, Document QA, function calling, and semantic
              search.
            </p>
            <p className='project-desc text-accent'>
              #openai #langchain #javascript
            </p>
          </div>

          <div className='section-column'>
            <p className='text-title2'>LastResort</p>
            <img
              loading='lazy'
              src={img.lastresortLogo}
              className='project-img'
            />
            <p className='project-desc'>
              A website where anonymous micro-stories capture the fleeting
              essence of daily life, inviting you to share, reflect, and
              connect.
            </p>
            <p className='project-desc text-accent'>#react #express #webpack</p>
          </div>
        </section>

        <footer>
          <p className='text-lg md:text-xl lg:text-2xl text-accent'>
            Always coding, always learning.
          </p>
          <div className='flex flex-row justify-center gap-5'>
            <a
              className='footer-icon bg-zinc-900'
              href='https://github.com/arrickx'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img loading='lazy' src={img.githubLogo} />
            </a>
            <a
              className='footer-icon bg-zinc-900'
              href='https://www.linkedin.com/in/richterlau/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img loading='lazy' src={img.linkedinLogo} />
            </a>
            <a
              className='footer-icon bg-zinc-900'
              href='mailto:richterxlau@gmail.com?subject=Reaching%20out%20from%20%5BCompany%20Name%5D&body=Hi%20Richter,%0D%0AThis%20is%20%5BName%5D%20from%20%5BCompany%20Name%5D.%20Are%20you%20interested%20in%20learning%20more%20about%20potential%20roles%20at%20our%20company%3F%20I%27d%20be%20happy%20to%20share%20some%20information%20and%20answer%20any%20questions%20you%20have.%0D%0ABest,%0D%0A%5BName%5D'
            >
              <img loading='lazy' src={img.emailLogo} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

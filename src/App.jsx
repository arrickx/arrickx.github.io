import * as img from './assets/index.js';
import ExperienceCard from './components/ExperienceCard.jsx';
import FooterIcon from './components/FooterIcon.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import SkillCard from './components/SkillCard.jsx';
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
          title={data.skills.title}
          subtitle={data.skills.subtitle}
        />
        {/* icons */}
        <section className='section-wrap'>
          <SkillCard
            className='max-md:order-2'
            skillSet={data.skills.backend}
          />

          <SkillCard
            className='max-md:order-1'
            skillSet={data.skills.frontend}
          />

          <SkillCard className='max-md:order-3' skillSet={data.skills.tools} />
        </section>

        {/* experiences */}
        <SectionHeading
          heading={data.experiences.heading}
          title={data.experiences.title}
          subtitle={data.experiences.subtitle}
        />
        <section className='section-wrap'>
          <ExperienceCard
            company={data.experiences.one.company_name}
            title={data.experiences.one.title}
            date={data.experiences.one.date}
            details={data.experiences.one.details}
          />
          <ExperienceCard
            company={data.experiences.two.company_name}
            title={data.experiences.two.title}
            date={data.experiences.two.date}
            details={data.experiences.two.details}
          />
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

        {/* footer */}
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

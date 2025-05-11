import ExperienceCard from './components/ExperienceCard.jsx';
import FooterIcon from './components/FooterIcon.jsx';
import Header from './components/Header.jsx';
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
        <Header
          name={data.author.name}
          statement={data.author.statement}
          src={data.author.src}
          alt={data.author.alt}
        />
        {/* skills */}
        <SectionHeading
          heading={data.skills.heading}
          title={data.skills.title}
          subtitle={data.skills.subtitle}
        />
        {/* icons */}
        <section className='section-wrap'>
          <SkillCard skillSet={data.skills.backend} index={0} />
          <SkillCard skillSet={data.skills.frontend} index={1} />
          <SkillCard skillSet={data.skills.tools} index={2} />
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
            index={0}
          />
          <ExperienceCard
            company={data.experiences.two.company_name}
            title={data.experiences.two.title}
            date={data.experiences.two.date}
            details={data.experiences.two.details}
            index={1}
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
            index={0}
          />

          <ProjectCard
            title={data.projects.two.name}
            href={data.projects.two.address}
            src={data.projects.two.src}
            alt={data.projects.two.alt}
            description={data.projects.two.description}
            tag={data.projects.two.tag}
            index={1}
          />
        </section>

        {/* footer */}
        <footer className='max-md:-mt-24'>
          <p className='text-lg md:text-xl lg:text-2xl text-accent'>
            {data.author.statement2}
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

import ExperienceCard from './components/ExperienceCard.jsx';
import FooterIcon from './components/FooterIcon.jsx';
import Header from './components/Header.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import SkillCard from './components/SkillCard.jsx';
import * as data from './constants/index.js';
import './index.css';
import ThemeToggleButton from './components/ThemeToggleButton.jsx';
import AskButton from './components/AskButton.jsx';

// Main application component that renders the portfolio layout
function App() {
  return (
    <div>
      <ThemeToggleButton />
      <AskButton />
      <div className='font-outfit justify-end items-center flex flex-col px-20 py-12 max-md:px-5'>
        <Header
          name={data.author.name}
          statement={data.author.statement}
          src={data.author.src}
          alt={data.author.alt}
        />

        <SectionHeading
          heading={data.skills.heading}
          title={data.skills.title}
          subtitle={data.skills.subtitle}
        />
        <section className='section-wrap'>
          <SkillCard skillSet={data.skills.backend} index={0} />
          <SkillCard skillSet={data.skills.frontend} index={1} />
          <SkillCard skillSet={data.skills.tools} index={2} />
        </section>

        <SectionHeading
          heading={data.experiences.heading}
          title={data.experiences.title}
          subtitle={data.experiences.subtitle}
        />
        <section className='section-wrap'>
          {data.experiences.items.map((experience, index) => (
            <ExperienceCard
              key={index}
              company={experience.company_name}
              title={experience.title}
              date={experience.date}
              details={experience.details}
              index={index}
            />
          ))}
        </section>

        <SectionHeading
          heading={data.projects.heading}
          title={data.projects.title}
          subtitle={data.projects.subtitle}
        />

        <section className='section-wrap'>
          {data.projects.items.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.name}
              href={project.address}
              src={project.src}
              alt={project.alt}
              description={project.description}
              tag={project.tag}
              index={index}
            />
          ))}
        </section>

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

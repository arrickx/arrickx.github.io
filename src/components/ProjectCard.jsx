import PropTypes from 'prop-types';

const ProjectCard = ({ title, href, src, alt, description, tag }) => {
  return (
    <div className='section-column '>
      <p className='text-title2'>{title}</p>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <img loading='lazy' src={src} alt={alt} className='project-img' />
      </a>
      <p className='project-desc'>{description}</p>
      <p className='project-desc text-accent max-md:mb-16'>{tag}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
export default ProjectCard;

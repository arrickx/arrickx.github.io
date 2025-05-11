import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const ProjectCard = ({ title, href, src, alt, description, tag, index }) => {
  return (
    <motion.div 
      className='section-column '
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className='text-title2'>{title}</p>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <motion.img 
          loading='lazy' 
          src={src} 
          alt={alt} 
          className='project-img' 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </a>
      <p className='project-desc'>{description}</p>
      <p className='project-desc text-accent max-md:mb-16'>{tag}</p>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  index: PropTypes.number
};
export default ProjectCard;

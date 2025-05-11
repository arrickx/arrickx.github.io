import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SkillIcon = ({ src, alt }) => {
  return (
    <motion.div 
      className='icon-px bg-zinc-900'
      whileHover={{ scale: 1.1, backgroundColor: '#52525b' /* zinc-600 */ }}
    >
      <img loading='lazy' src={src} alt={alt} />
    </motion.div>
  );
};

SkillIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default SkillIcon;

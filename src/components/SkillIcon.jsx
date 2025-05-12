import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SkillIcon = ({ src, alt }) => {
  const isOpenAiIcon = alt === 'OpenAI Logo';

  return (
    <motion.div 
      className={`icon-px ${isOpenAiIcon ? 'openai-icon-wrapper' : ''}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
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

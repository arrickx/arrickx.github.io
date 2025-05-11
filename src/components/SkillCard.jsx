import PropTypes from 'prop-types';
import SkillIcon from './SkillIcon.jsx';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger delay
      duration: 0.5,
    },
  }),
};

const SkillCard = ({ skillSet, index }) => {
  return (
    <motion.section 
      className={skillSet.style}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index} // Pass index for stagger
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='icon-row'>
        <SkillIcon src={skillSet.item[0].src} alt={skillSet.item[0].alt} />

        <SkillIcon src={skillSet.item[1].src} alt={skillSet.item[1].alt} />
      </div>
      <div className='icon-row'>
        <SkillIcon src={skillSet.item[2].src} alt={skillSet.item[2].alt} />
        <SkillIcon src={skillSet.item[3].src} alt={skillSet.item[3].alt} />
      </div>
      <p className='text-subtitle icon-title'>{skillSet.title}</p>
    </motion.section>
  );
};

SkillCard.propTypes = {
  skillSet: PropTypes.object.isRequired,
  index: PropTypes.number // Add index for stagger
};
export default SkillCard;

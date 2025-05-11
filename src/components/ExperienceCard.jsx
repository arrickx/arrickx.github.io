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

const ExperienceCard = ({ company, title, date, details, index }) => {
  return (
    <motion.div 
      className='section-column'
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className='text-head'>{company}</p>
      <p className='text-title2'>{title}</p>
      <p className='text-subtitle'>{date}</p>
      <ul className='text-desc'>
        {details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </motion.div>
  );
};

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  index: PropTypes.number
};
export default ExperienceCard;

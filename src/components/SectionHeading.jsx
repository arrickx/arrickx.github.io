import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SectionHeading = ({ heading, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className='text-head'>{heading}</p>
      <p className='text-title'>{title}</p>
      <p className='text-subtitle'>{subtitle}</p>
    </motion.div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default SectionHeading;

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FooterIcon = ({ href, src, alt }) => {
  return (
    <motion.a
      className='footer-icon'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <img loading='lazy' src={src} alt={alt} />
    </motion.a>
  );
};

FooterIcon.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default FooterIcon;

import PropTypes from 'prop-types';

const FooterIcon = ({ href, src, alt }) => {
  return (
    <a
      className='footer-icon bg-zinc-900'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img loading='lazy' src={src} alt={alt} />
    </a>
  );
};

FooterIcon.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default FooterIcon;

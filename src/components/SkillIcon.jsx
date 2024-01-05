import PropTypes from 'prop-types';

const SkillIcon = ({ src, alt }) => {
  return (
    <div className='icon-px bg-zinc-900'>
      <img loading='lazy' src={src} alt={alt} />
    </div>
  );
};

SkillIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default SkillIcon;

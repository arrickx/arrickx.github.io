import PropTypes from 'prop-types';

const SectionHeading = ({ heading, title, subtitle }) => {
  return (
    <div>
      <p className='text-head'>{heading}</p>
      <p className='text-title'>{title}</p>
      <p className='text-subtitle'>{subtitle}</p>
    </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default SectionHeading;

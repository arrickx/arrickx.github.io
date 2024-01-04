import PropTypes from 'prop-types';

const ExperienceCard = ({ company, title, date, details }) => {
  return (
    <div className='section-column'>
      <p className='text-head'>{company}</p>
      <p className='text-title2'>{title}</p>
      <p className='text-subtitle'>{date}</p>
      <ul className='text-desc'>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
};
export default ExperienceCard;

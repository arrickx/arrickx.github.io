import PropTypes from 'prop-types';
import SkillIcon from './SkillIcon.jsx';

const SkillCard = ({ skillSet }) => {
  return (
    <section>
      <div className='icon-row'>
        <SkillIcon src={skillSet.item[0].src} alt={skillSet.item[0].alt} />

        <SkillIcon src={skillSet.item[1].src} alt={skillSet.item[1].alt} />
      </div>
      <div className='icon-row'>
        <SkillIcon src={skillSet.item[2].src} alt={skillSet.item[2].alt} />
        <SkillIcon src={skillSet.item[3].src} alt={skillSet.item[3].alt} />
      </div>
      <p className='text-subtitle icon-title'>{skillSet.title}</p>
    </section>
  );
};

SkillCard.propTypes = {
  skillSet: PropTypes.object.isRequired,
};
export default SkillCard;

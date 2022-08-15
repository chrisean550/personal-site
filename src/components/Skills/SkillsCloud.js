import Skill from "./Skill";
import skills from './skills.json';

const SkillsCloud = () => {

  return (
    <div className='skills-cloud'>
      <ul className='cloud-list'>
        {
          skills.map((item, i) =>
            <Skill 
              key={i}
              skill={item.skill} 
            />
          )
        }
      </ul>
    </div>
  )
}

export default SkillsCloud;

import './index.scss';

import { skills } from './index.constants';

const Skills = () => {
  return (
    <div className="cv__skills">
      <h1 className="cv__skills-title">Skills</h1>
      <div className="cv__skill-box">
        {skills.map(skill => (
          <div className="cv__skill-box-skill" key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  )
}

export default Skills
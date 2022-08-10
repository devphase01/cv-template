import './Projects.scss';

import { personalProjects } from '../../utils/Projects';

const Personal = () => {
  return (
    <div className="cv__personal">
      <div className="cv__personal-title">Personal Projects</div>
      <div className="cv__personal-projects">
        {personalProjects.map(project => (
          <div className="cv__personal-project">
            <div className="cv__personal-project-title">
              <p className="cv__personal-project-name">{project.name}</p>
              <span></span>
              <p className="cv__personal-project-type">{project.type}</p>
            </div>

            <div className="cv__personal-project-timeline">
              <p>{project.timeStart}</p>
              <span>-</span>
              <p>{project.timeEnd}</p>
            </div>

            <div className="cv__personal-project-description">
              {project.description}
            </div>

            <div className="cv__personal-project-gitHub">
              GitHub: <a href={project.gitHub} target="blank">{project.gitHub}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Personal
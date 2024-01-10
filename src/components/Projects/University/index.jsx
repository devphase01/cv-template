import '../index.scss';

import { projects } from './index.constants';

const University = () => {
  return (
    <div className="cv__university">
      <div className="cv__university-title">University Projects</div>
      <div className="cv__university-projects">
        {projects.map(project => (
          <div className="cv__university-project">
            <div className="cv__university-project-title">
              <p className="cv__university-project-name">{project.name}</p>
              <span></span>
              <p className="cv__university-project-type">{project.type}</p>
            </div>

            <div className="cv__university-project-timeline">
              <p>{project.timeStart}</p>
              <span>-</span>
              <p>{project.timeEnd}</p>
            </div>

            <div className="cv__university-project-description">
              {project.description}
            </div>

            {project.gitHub ? (
              <div className="cv__university-project-gitHub">
                GitHub: <a href={project.gitHub} target="blank">{project.gitHub}</a>
              </div>
            ): ""}

          </div>
        ))}
      </div>
    </div>
  )
}

export default University
import './index.scss';

const Projects = ({ title, projects }) => {
  return (
    <div className="cv__projects">
      <div className="cv__projects-title">{title}</div>
      <div className="cv__projects-projects">
        {projects.map(project => (
          <div className="cv__projects-project">
            <div className="cv__projects-project-title">
              <p className="cv__projects-project-name">{project.name}</p>
              <span />
              <p className="cv__projects-project-type">{project.type}</p>
            </div>

            <div className="cv__projects-project-timeline">
              <p>{project.timeStart}</p>
              <span>-</span>
              <p>{project.timeEnd}</p>
            </div>

            <div className="cv__projects-project-description">
              {project.description}
            </div>

            <div className="cv__projects-project-achievements">
              <h4 className="cv__projects-project-achievements-title">Achievements</h4>

              <ul className="cv__projects-project-achievements-list">
                {project.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}
              </ul>
            </div>

            {project.github === null ? (
              <div className="cv__projects-project-gitHub">
                GitHub: <a href={project.gitHub} target="blank">{project.gitHub}</a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
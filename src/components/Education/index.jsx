import './index.scss';

const Education = () => {
  return (
    <div className="cv__education">
      <h1 className="cv__education-title">Education</h1>
      <div className="cv__education-degree">
        Bachelor <span>-</span> System Analysis
      </div>

      <div className="cv__education-school">
        Lviv Polytechnic National University
      </div>

      <div className="cv__education-time">
        2021 <span>-</span> Present
      </div>

      <div className="cv__education-description"></div>
    </div>
  )
}

export default Education
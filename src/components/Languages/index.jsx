import './index.scss';

import { languages } from './index.constants';

const Languages = () => {
  return (
    <div className="cv__languages">
      <h1 className="cv__languages-title">Languages</h1>
      <div className="cv__languages-box">
        {languages.map(language => (
          <div className="cv__languages-box-lang" key={language.lang}>
            <p className="lang">{language.lang}</p> <span>-</span> <p className="level">{language.level}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Languages
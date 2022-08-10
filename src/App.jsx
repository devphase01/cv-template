import './App.scss';

import { About, Divider, Skills, Education, Header, Languages, Personal, University } from './components';

const App = () => {
  return (
    <div className="cv">
      <Header />
      <About />
      <Divider />

      <div className="cv__content-section">
        <div className="cv__left-side">
          <Skills />
          <Education />
          <Languages />
        </div>

        <div className="cv__right-side">
          <Personal />
          <University />
        </div>
      </div>
    </div>
  )
}

export default App
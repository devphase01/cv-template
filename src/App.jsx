import './App.scss';

import { About, Divider, Skills, Education, Header, Languages, Projects } from './components';
import { projects } from './components/Projects/index.constants';

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
          <Projects title="Experience" projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default App;

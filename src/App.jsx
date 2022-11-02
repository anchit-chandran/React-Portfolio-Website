import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

import data from './resources/data/data';

// {/* Cover page */ }
// {/* <Header /> */ }

// {/* Projects */ }
// {/* <Projects data={data} /> */ }

// {/* EDUCATION AND SKILLS */ }
// {/* <EducationAndSkills /> */ }


function App() {

  return (
    <div>
      <Navbar />
      <div className="App h-100" >
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col h-100">

              {/* COVER PAGE START */}
              <Header />
              {/* COVER PAGE END*/}
              {/* PROJECT PAGE START */}
              <Projects data={data} />
              {/* PROJECT PAGE END */}

              {/* Skills PAGE START */}
              <Skills data={data} />
              {/* Skills PAGE END */}

              {/* Education PAGE START */}
              <Education data={data} />
              {/* Education PAGE END */}

              {/* Contact PAGE START */}
              <Contact data={data} />
              {/* Contact PAGE END */}

            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;

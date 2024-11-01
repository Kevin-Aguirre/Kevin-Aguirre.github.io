import Navbar from "./components/Navbar";

import AboutMe from "./components/AboutMe";
import AllProjects from "./components/AllProjects";

import Experience from "./components/Experience";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe"

import Footer from "./components/Footer";
import {AUTHENTICATED} from "./constants";


function App()  {

  return (
    <div>
      <Navbar/>
      <AboutMe
        isAuthenticated={AUTHENTICATED}
      />
      <AllProjects
        isAuthenticated={AUTHENTICATED}
      />
      <Resume/>
      <Experience/>
      <ContactMe/>
      <Footer/>
    </div>

  );
}

export default App;
import Navbar from "./components/Navbar";

import Introduction from "./components/Introduction"
import AboutMe from "./components/AboutMe";
import AllProjects from "./components/AllProjects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

function App()  {

  return (
    <div className="bg-indigo-950">
      <Navbar/>
      <div className="px-20">
        <Introduction/>
        <AboutMe/>
        <AllProjects/>
        <Experience/>
        <Resume/>
      </div>
    </div>

  );
}

export default App;
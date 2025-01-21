
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import AndroidProjects from "./components/AndeoidProjects";
// import "./assets/css/media.css"
import "./assets/css/style.css"

import WedProjects from "./components/WedProjects";

function App() {
  return (
    <>

      {/* Header */}
      <Header />

      {/* About section */}
      <About />

      {/* android project  section */}
      <AndroidProjects />

      {/* android project  section */}
      <WedProjects />

      {/* contact section */}
      <Contact />
      


      <script src="https://kit.fontawesome.com/a076d05399.js"></script>

     
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import AndroidProjects from "./components/AndeoidProjects";
import "./App.css";
// import "./assets/css/media.css"
import WedProjects from "./components/WedProjects";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

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
      
      {/*  scroll up  */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="fa-solid fa-arrow-up"></i>
      </a>

      <script src="https://kit.fontawesome.com/a076d05399.js"></script>

       {/* scroll reveal */}
      <script src="./assets/js/scroll.js"></script>

      {/*  link js */}
      <script src="./assets/js/main.js"></script>
    </>
  );
}

export default App;

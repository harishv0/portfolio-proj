import './App.css';
import Banner from './components/Banner';
import NavBar  from "./components/NavBar";
import Project from './components/Project';
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills />
      <Project/>
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

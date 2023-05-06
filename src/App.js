import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";


function App() {
  return (

    <div className="App">
      <Navbar/>

     
    {/* <Home/> */}

    {/*<Projects/>*/}
    <Project/>
    
   {/*<Contact/>*/}
    <Footer/>
    </div>
  );
}

export default App;

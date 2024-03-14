import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      
      <Services />
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;

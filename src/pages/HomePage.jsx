import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Value from "../components/Value/Value";

function HomePage() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      <Services />
      <Value />
      <Contact />

      <Footer />
    </div>
  );
}

export default HomePage;

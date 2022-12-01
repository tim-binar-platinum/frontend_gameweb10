
import Hero from "./components/Landing/Hero";
import Service from "./components/Landing/Service";
import Faq from "./components/Landing/Faq";
import Footer from "./components/Landing/Footer";
import Navbar from "./components/Navbar";
import LeaderBoard from "./components/Landing/LeaderBoard";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Faq />
      <LeaderBoard />
      <Footer />
    </div>
  );
}

export default App;

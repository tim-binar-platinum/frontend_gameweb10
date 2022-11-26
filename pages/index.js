/* eslint-disable react/react-in-jsx-scope */
import Hero from "./components/Landing/Hero";
import Service from "./components/Landing/Service";
import Faq from "./components/Landing/Faq";
import Footer from "./components/Landing/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {" "}
&nbsp;
      <Service />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

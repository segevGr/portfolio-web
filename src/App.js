import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Profession from "./components/profession/Profession";
import Stack from "./components/stack/Stack";
import Experience from "./components/Experience";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="md:min-h-screen md:py-5 md:px-28 bg-graySide overflow-x-hidden">
      <div className="md:p-5 md:rounded-xl md:shadow-xl py-2 bg-background ">
        <Navbar />
        <Hero />
        <Profession />
        <Stack />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;

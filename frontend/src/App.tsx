import { Footer } from "./pages/components/Footer";
import { Navbar } from "./pages/components/Navbar";
import { About } from "./pages/sections/About";
import { Contact } from "./pages/sections/Contact";
import { Experience } from "./pages/sections/Experience";
import { Hero } from "./pages/sections/Hero";
import { Projects } from "./pages/sections/Projects";
import { Testimonials } from "./pages/sections/Testimonial";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
// test commentv 2

export default App;

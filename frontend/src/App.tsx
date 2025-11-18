import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./pages/components/Footer";
import { Navbar } from "./pages/components/Navbar";
import { About } from "./pages/sections/About";
import { Contact } from "./pages/sections/Contact";
import { Experience } from "./pages/sections/Experience";
import { Hero } from "./pages/sections/Hero";
import { Projects } from "./pages/sections/Projects";
import { Testimonials } from "./pages/sections/Testimonial";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
        <Navbar />
        <main className="pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

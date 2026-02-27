import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./pages/components/Footer";
import { Navbar } from "./pages/components/Navbar";
import { About } from "./pages/sections/About";
import { Contact } from "./pages/sections/Contact";
import { Experience } from "./pages/sections/Experience";
import { Hero } from "./pages/sections/Hero";
import { Projects } from "./pages/sections/Projects";
import { SplashScreen } from "./pages/sections/SplashScreen";
import { Testimonials } from "./pages/sections/Testimonial";
import { AnimatePresence } from "framer-motion";

function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Sections */}
      {!loading && (
        <>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
        <Navbar />
        <main className="">
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

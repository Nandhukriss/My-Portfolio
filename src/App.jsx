import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";
import { TimeLine } from "./components/TimeLine";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import PageLoader from "./components/PageLoader";
import { useEffect, useState } from "react";
import { inject } from '@vercel/analytics';
 
inject();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <PageLoader />
      ) : (
        <div>
          <Navbar />
          <Home />
          <TimeLine />
          <Skills />
          <Projects />
          <SocialLinks />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;

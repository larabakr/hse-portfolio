import type { NextPage } from "next";

import Biography from "../comps/biography";
import Contact from "../comps/contact";
import Demos from "../comps/demos";
import Footer from "../comps/footer";
import Hero from "../comps/hero";
import Portfolio from "../comps/portfolio";
import Studio from "../comps/studio";
import Testimonials from "../comps/testimonials";

const Home: NextPage = () => {
  return (
    <div className="app">
      <Hero />
      <Demos />
      <Studio />
      <Portfolio />
      <Biography />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

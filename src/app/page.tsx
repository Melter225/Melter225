import Header from "./header.tsx";
// import Hero from "./hero.tsx";
import Awards from "./awards.tsx";
import About from "./about.tsx";
import Projects from "./projects.tsx";
import Testimonials from "./testimonials.tsx";
import Contact from "./contact.tsx";
import Footer from "./footer.tsx";
import Copyright from "./copyright.tsx";

//light/dark mode, reactivity
export default function PersonalPortfolio() {
  return (
    <div className="scrollbar-hide">
      <Header />
      {/* <Hero /> */}
      <Awards />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}

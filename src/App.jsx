
// IMPORT COMPONENTS BELOW
import Navbar from './components/navigationbar';
import Footer from './components/Footer';

// IMPORT STYLES BELOW
import './scss/style.scss';
import './scss/animate.scss';
import './scss/gallery.scss';
import './scss/card.scss';
import './scss/BottomNav.scss';
import './scss/footer.scss';
import './scss/projectbanner.scss';
import './scss/navigationBar.scss';
import './scss/home.scss';
import './scss/about.scss';
import './scss/buildstrong.scss';
import './scss/mymori.scss';
import './scss/linkedin.scss';
import './scss/tacohaven.scss';
import './scss/inm.scss';
import './scss/projectCard.scss';
import './scss/flowspace.scss';
import './scss/spacing.scss';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; // Adjust path as needed
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';


// Import pages below 
import Home from './Home';
import BuildStrong from './Buildstrong';
import LinkedinLearning from './LinkedinLearning';
import MyMori from './MyMori';
import Flowspace from './Flowspace';
import Tacohaven from './Tacohaven';
import Inm from './Inm';
import AboutMe from './About';
import Gallery from './Gallery';



function App() {


  
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {

    // INSERT GLOBAL SCOPE ANIMATIONS BELOW
      // center text (multiple independent)
    gsap.utils.toArray(".center-text").forEach((el) => {
        gsap.from(el, {
        y: -30,
        scale: 0.15,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: el,
            start: "top 60%"
        }
        });
    });

    gsap.from(
      ".card-bg", {
            y: -30,
          opacity:0,
          duration: 0.8, 
          ease: "power2.out",
          stagger: 0.4,
          scrollTrigger: { trigger: ".card-bg", start: "top 80%" }
      }
    );

     gsap.from(
        ".listItem",{
            x:-80, 
            opacity:0, 
            duration: 0.8, 
            ease: "power2.inOut",
            stagger: 0.4,
            scrollTrigger: { trigger: ".listItem", start: "top 80%" }
        }
    );




  });




  return (


      <Router>
        <ScrollToTop/>
        <Navbar />   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buildstrong" element={<BuildStrong/>}></Route>
          <Route path="/linkedinlearning" element={<LinkedinLearning />} />
          <Route path="/mymori" element={<MyMori />} />
          <Route path="/flowspace" element={<Flowspace />} />
          <Route path="/tacohaven" element={<Tacohaven />} />
          <Route path="/inm" element={<Inm/>} />
          <Route path = "/gallery" element = {<Gallery/>}/>
          <Route path = "/about" element = {<AboutMe/>}/>
        </Routes>
        <Footer/>

      </Router>
      
    

  )
}

export default App;

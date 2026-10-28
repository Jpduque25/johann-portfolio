import { Link } from 'react-router-dom';
import { navigationArrow } from "../assets/icons/icons";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

export default function BottomNavigation({ projectName, link, direction = "next" }) {

  const isNext = direction === "next";

  gsap.registerPlugin(ScrollTrigger);
  const navTextRef = useRef();

  // GSAP animation for whichever element is active
  useGSAP(() => {
    if (!navTextRef.current) return;

    gsap.from(navTextRef.current, {
      opacity: 0,
      x: isNext ? -200 : 200, // left if next, right if prev
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {trigger: navTextRef.current, start: "top 80%"}
    });
  });

  return (
    <div className="project-card">

      {/* Desktop version */}
      <Link to={link} className={`project-container desktop ${!isNext ? 'prev' : ''}`}>
        <div className="project-text" ref={navTextRef}>
          <div className="first">{isNext ? "Next Project" : "Previous Project"}</div>
          <div className="second">{projectName}</div>
        </div>

        <div className="arrow">
          <img
            src={navigationArrow}
            alt="Arrow"
            className={`arrow1 ${!isNext ? 'prev' : ''}`}
          />
        </div>
      </Link>

      {/* Mobile version */}
      <Link to={link} className="project-container mobile">
        <div className="project-text">
          <span className="first">{isNext ? "Next Project:" : "Previous Project:"}</span>
          <span className="second">{projectName}</span>
        </div>
      </Link>

    </div>
  );
}
// Import images 
import gsap from "gsap";
import { useEffect, useRef } from "react";
import  {projectBanner}  from "../data2";



export default function ProjectBanner

({projectTitle, projectDescription,projKey})
{
    const textEl = useRef();

    useEffect(() => {
        gsap.fromTo(
            textEl.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );
    }, []);


    return(
        <>
            <section className = "projectbanner">

                <div ref = {textEl} className ="banner-text">
                    <h1>{projectTitle}</h1>
                    <p>{projectDescription}</p>
                </div>

                <div>
                    <img className = "banner-image" src= {projectBanner[projKey]}/>
                </div>

            </section>
       
        </>
    )

}
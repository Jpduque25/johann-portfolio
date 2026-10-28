import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger.js";

import { useEffect, useRef } from "react";
import ProjectOverview from "../projectoverview";



export default function ProjectCard({project}){


    gsap.registerPlugin(ScrollTrigger);
    const cardEl = useRef();

    useGSAP( () => {
        gsap.fromTo (
            cardEl.current, {
                y:250, opacity:0
            },
            
            {
                y:0, 
                opacity:1, 
                duration: 0.8, 
                ease: "power2.out",
                scrollTrigger: { trigger: cardEl.current , start: "top 80%" }

            }
        )

    });



    return(
        <>
            <section ref = {cardEl} className = "project-intro">
                <div className="content">

                    <div className ="context">
                        <ul className = "list">
                            <li><b>Timeline:</b> {project.timeline}</li>
                            <li><b>Disciplines:</b> {project.disciplines}</li>


                            
                            {project.tools && project.tools.length > 0 && (
                                <li className = "tools-row">
                                    <span className="tools-title"><b>Tools:</b></span>
                                    <ul className = "icon-list">
                                    {project.tools.map((icon, index) => (
                                        <li  class = "icon-item"key={index}>
                                            <img src={icon} alt={`tool-${index}`} />
                                        </li>
                                    ))}
                                    </ul>
                                </li>

                            )}
                          
                           
                            {project.collaborators && project.collaborators.length > 0 && (
                                <li className = "collaborators-row">
                                    <span className = "collaborators-title"><b>Collaborators:</b></span>
                                    <ul className="collaborators-list">
                                    {project.collaborators.map((name, index) => (
                                        <li key={index}>{name}</li>
                                    ))}
                                    </ul>
                                </li>
                            )}
                        </ul>

                        <div className="proj-overview">
                            <h3>PROJECT OVERVIEW</h3>
                            <p>{project.description}</p>

                        </div>
            
                        <div className = "button-list">
                            {project.url && project.url.length > 0 && (
                                project.url.map((link, index) => (
                                    
                                    <a
                                    className="proj-button"
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >{link.name}</a>
                                 
                                ))
                            )}

                        </div>
                         
                    </div>  
                </div>
            </section>


        </>



    )


}
       
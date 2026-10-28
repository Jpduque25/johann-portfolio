// import { useState } from "react";
import Card from './Card.jsx';
import {projectCard} from "../data.js";
import {Link} from 'react-router-dom';


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

export default function Cards(){


    gsap.registerPlugin(ScrollTrigger);
    const cardEl = useRef();

    useGSAP(() => {

     // Animate each .item individually on scroll
        gsap.utils.toArray(".item").forEach((el) => {
            gsap.from(el, {
                opacity: 0,
                y: 25,           
                duration: 2.5,
                ease: "power4.out",
                scrollTrigger: {
                trigger: el,
                start: "top 80%",
                },
            });
        });
            


    },{scope: cardEl });


    return(
        <div ref = {cardEl} className = "proj-grid">
            {projectCard.map( (project, index) => 
            <Card 
                key = {project.title} {...project} 
                className = 
                {`
                ${ index === 0 ? "large item" : ""} 
                ${ index === 1 ? "medium item" : ""} 
                ${ index === 2 ? "small item" : ""} 
                ${ index === 3 ? "small item" : ""} 
                ${ index === 4 ? "medium item" : ""} 
                ${ index === 5 ? "large item" : ""}          
                             
                `}
                />)}
        </div>

    )
}
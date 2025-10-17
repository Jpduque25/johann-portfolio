// import { useState } from "react";
import Card from './Card.jsx';
import {projectCard} from "../data.js";
import {Link} from 'react-router-dom';

export default function Cards(){
    return(
        <div className = "proj-grid">
            {projectCard.map( (project, index) => 
            <Card 
                key = {project.title} {...project} 
                className = 
                {`
                ${ index === 0 ? "large" : ""} 
                ${ index === 1 ? "small" : ""} 
                ${ index === 2 ? "small" : ""} 
                ${ index === 3 ? "small" : ""} 
                ${ index === 4 ? "small" : ""} 
                ${ index === 5 ? "small" : ""}                       
                `}
                />)}
        </div>

    )
}
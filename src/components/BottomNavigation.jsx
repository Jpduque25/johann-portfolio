import {Link} from 'react-router-dom';
import { navigationArrow } from "../assets/icons/icons";

export default function BottomNavigation({ projectName, link, direction = "next"} ){
 
    const isNext = direction === "next";
    return (

        <div className = "project-card">
            
            {/* Desktop version */}
            <Link to= {link} className={`project-container desktop ${!isNext ? 'prev' : ''} `}>
                <div className="project-text">
                    <div className = "first">{isNext ? "Next Project" : "Previous Project"}</div>
                    <div className = "second">{projectName}</div>
                </div>


                <div className= "arrow">
                    <img src={navigationArrow} 
                    alt="Arrow" 
                    className = {`arrow1 ${!isNext ? 'prev': ''}`}
                    />
                </div>

          
            </Link>
            

            {/* Mobile version */}
            <Link to= {link} className="project-container mobile">
                <div className="project-text">
                    <span className = "first">Next Project:</span>
                    <span className = "second">{projectName}</span>
                </div>
            </Link>
            
        </div>
    )
}
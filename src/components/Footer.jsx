import mainlogo from '../assets/Johann-logo-new.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return(

        <footer>
            <div className="contact">
                
                <div className="contact-grid-container">

                    <div className="contact-grid logo">
                        <Link to = "/"><img src= {mainlogo} alt="Johann's logo"/></Link>
                    </div>

                    <div className="contact-grid">

                        <h3>CURRENT STATUS</h3>
                        <ul>
                            <li>Seeking <b>full-time</b> employment.</li>
                            <li>Available for <b>freelancing/contract</b> roles.</li>
                        </ul>
                        
                    </div>

                    <div className="contact-grid">

                        <div>
                            <h3>CONTACT</h3>
                            <ul>
                                <li><a className="resume" href="https://drive.google.com/file/d/1UaJ-T5fUWSZ17CpbSFC0lvIAyLrydf9r/view" target="_blank">Resume</a></li>                  
                                <li><a href="mailto:jpduque25@gmail.com" target="_blank">Jpduque25@gmail.com</a></li>
                            </ul>
                        </div>

                        <div className = "social-icons">
                            <div className = "icon-item">
                                <a href= "http://www.linkedin.com/in/johann-duque"  target ="_blank" >
                                    <FontAwesomeIcon icon={faLinkedinIn} style = {{color : "#50566B", cursor : "pointer"}} size = "xl" 
                                    />
                                </a>
                            </div>

                            <div className = "icon-item">
                                <a href="https://dribbble.com/Jpduque25" target ="_blank">
                                    <FontAwesomeIcon icon={faDribbble} style = {{color : "#50566B"}} size = "xl"
                                    />
                                </a>
                            </div>

                            <div className = "icon-item">
                                <a href="https://www.behance.net/johannduque1" target ="_blank">
                                    <FontAwesomeIcon icon={faBehance} style = {{color : "#50566B"}} size = "xl"
                                    />
                                </a>
                            </div>
                                
                        </div>
                       
                    </div>

                </div>

            </div>

            <p className = "copyright">@2025 Johann Duque. All rights reserved</p>

        </footer>

    )

}


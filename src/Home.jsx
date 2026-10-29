import BannerImg from './assets/home-assets/banner-img.png';
import BannerImgMobile from './assets/home-assets/banner-img-mobile.png';
import workIcon from './assets/home-assets/ic_baseline-work.png';
import arrowIcon from './assets/icons/downarrow-icon.png';
import locationIcon from './assets/home-assets/mdi_location.png';
import { useRef } from "react";
import HomeHead from './components/SEO/HomeHead';

import Cards from './components/Cards';

export default function Home(){
        const projectsRef = useRef(null);

        const scrolltoProjects = () => {
            projectsRef.current.scrollIntoView({behavior: "smooth"});
        };

    return (


        <>
            <HomeHead/>
            <main class = "homepg">
        
                <section className="homebanner">
                    <div className="homebanner-content">
                        <div className="hero-section">
                            
                            <div className="top">
                          
                                <div className = "text-left">
                                    
                                  

                                    <div className="banner-title">
                                        <h1>HEY, I’M JOHANN</h1>
                                    </div>

                                    <div className="subheader">
                                        <h3>PRODUCT DESIGNER</h3>
                                        <div className = "circle"></div>
                                        <h3>DIGITAL MARKETING</h3>
                                    </div>

                                    <div className="tagline">
                                        <p>I craft digital experiences that blend business insights with a creative edge.</p>
                                    </div>

                                </div>

                                <div className="image-right-desktop">
                                    <div className="banner-image">
                                        <img src= {BannerImg} alt= "Johann's profile picture" />
                                    </div>
                                </div>
                            </div>


                           <div className="bottom">

                                <div className="media">
                                    <div className="media-block first">
                                        <div className="title">
                                            <img src= {workIcon} alt="work" />
                                            <span>RECENT EXPERIENCE</span>
                                        </div>
                                        <p>Currently @Lifeguard Digital Health</p>
                                    </div>

                                    <div className="media-block second">
                                        <div className="title">
                                            <img src= {locationIcon} alt="location" />
                                            <span>LOCATION</span>
                                        </div>
                                        <p>Vancouver, B.C</p>
                                    </div>

                                    <div className="media-block third" onClick = {scrolltoProjects} style = { {cursor: "pointer"}}>

                                            <div className="text-animate">
                                                
                                           
                                                <div className="scroll-title">
                                                <span>SCROLL DOWN</span>
                                                </div>
                                                    <img
                                                        src={arrowIcon}
                                                        alt="Scroll Down"                                          
                                                    />
                                             </div>
                                            
                                    </div>
                                
                                </div>

                           </div>
                           
                        </div>
                    </div>
                </section>

                <section ref={projectsRef} className="project-gallery">
                    <h2>PROJECTS</h2>
                    <Cards/>
                </section>
            </main>
   


        </>
    
    )   

}
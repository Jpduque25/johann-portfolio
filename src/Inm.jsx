import InmHead from "./components/SEO/InmHead"
import { inmLogo, inmMarketPlace1,inmMarketPlace2,inmMarketPlace3, inmStyleguide } from "./assets/inm-assets/inm-assets"

import ProjectBanner from "./components/Projectbanner"
import ProjectCard from "./components/projectCard"
import BottomNavigation from "./components/BottomNavigation"
import Tacohaven from "./Tacohaven"
import ProjectOverview from "./projectoverview"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger.js"



export default function Inm(){

    gsap.registerPlugin(ScrollTrigger);
    const selectProject = ProjectOverview[2];
    const sectionEl = useRef();

    useGSAP( () => {
        gsap.from(
            ".card-sm" , {
                opacity: 0 ,
                y: -15, 
                stagger: 0.4,
                ease: "power2.inOut",
                scrollTrigger: { trigger: ".card-sm", start: "top 80%" }
            }
        )

        gsap.from(
            ".card-grid" , {
                opacity: 0,
                y: -15, 
                ease: "power2.inOut",
                scrollTrigger: { trigger: ".card-grid", start: "top 60%" }
            }
        )


    }, {scope: sectionEl})

    return(
        <>
        <InmHead/>
        <main ref= {sectionEl} class = "inm-project">

            <ProjectBanner projectTitle={"INSTITUTE OF NEW MEDIA"} projectDescription={"A student application for a fictitious institute focused on design, technology, and business."} projKey={"inm"}/>

            <section class = "project-intro">
                <div class="content">
                    <ProjectCard project={selectProject}/>
                </div>
            </section>

            <section class="inm-writeup">

                <div class="content">
                    <div className="container">

                            <div className="item left">
                                <h4>High traffic on campus websites are based on enrollment season.</h4>
                            </div>

                            <div className="item right">
                                <div className="text-card">

                                    <div className="card-top">

                                        <div class="card-sm first mb-md">
                                            <p>Registering for courses</p>
                                        </div>
                                    

                                        <div class="card-sm second mb-md">
                                            <p>Viewing course schedule</p>
                                        </div>

                                        <div class="card-sm third">
                                            <p>Checking student mail</p>
                                        </div>

                                    </div>

                                    <div className="card-bottom">
                                        
                                        <div class="card-sm fourth mb-md">
                                            <p>Student resources</p>
                                        </div>
                                        
                                        <div class="card-sm fifth ">
                                            <p>Student/Employer networking opportunities </p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                  
                                 


                        
                           
                    </div>
                </div>

                <div class="content">
                    <h2>01 USER RESEARCH</h2>

                    <h4>Research that was conducted was based on past experiences of students in our program. </h4>

                    <div class="card-grid">
                        <div class="card">
                            <div class="card-bold mb-md">
                                <p>Poor navigation</p>
                            </div>
                            <div class="card-text">
                                <p>Trouble navigating the website to find the course schedule. </p>
                            </div>
                            
                        </div>

                        <div class="card">
                            <div class="card-bold mb-md">
                                <p>Navigating course deadlines</p>
                            </div>
                            <div class="card-text">
                                <p>Course deadlines weren’t displayed on the main course dashboard.</p>
                            </div>
                        
                        </div>

                        <div class="card">
                            <div class="card-bold mb-md">
                                <p>Student marketplace</p>
                            </div>
                            <div class="card-text">
                                <p>A feature to connect students as they buy and sell items safely with an intuitive checkout process.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-bold mb-md">
                                <p>Mobile Wallet</p>
                            </div>
                            <div class="card-text">
                                <p>Student mobile wallet for safe, secure and saves additional space when travelling. </p>
                            </div>
                        </div>
                        

                        <div class="card">
                            <div class="card-bold mb-md">
                                <p>Networking opportunities</p>
                            </div>
                            <div class="card-text">
                                <p>Opportunity to explore student networking as students can join communities and network with peers, faculty members, or the student community. </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-bold mb-md">
                                <p>Event planning</p>
                            </div>

                            <div class="card-text">
                                <p>Get notifications on upcoming seminars, student events, career fairs, internships, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <h2>02 DESIGN PROCESS</h2>

                    <div className="container">

                        <div className="item left">
                            <p>My team consisted of a project manager, graphic designer, UX designer, and a developer. Because this was a project-management project, we implemented the waterfall methodology as we were provided tasks that needed to be completed for each phase. Overall we had 4 phases to bring all these deliverables together for presentation. We collectively decided on the style guide, setting the guidelines for branding and UI.</p>
                        </div>

                        <div className="item center mb-content">
                            <div className = "mb-md">
                                <div className="imageContainer">
                                    <img src= {inmStyleguide} className = "image" alt="inm styleguide"/>
                                </div>

                                <div class = "article">Styleguide</div>

                            </div>

                            <div>
                                <img src= {inmLogo} className = "image" alt="inm logo design process"/>
                            </div>

                            <div class = "article">Logo variations & Logo mockups</div>

                        </div>

                        <div className="item center center-text">
                            <h4>Myself and a colleague were responsible for creating the user interface for the marketplace. When designing the marketplace, we considered factors such as how listings are posted, the type of navigation our app would have, peer-to-peer transaction and where transactions will be located.</h4>
                        </div>
                            
                    </div>

                    
                </div>

                <div class="content">
                    <div class="flex first">
                        <div class="marketplace-feature">
                            <img src= {inmMarketPlace1} alt="product-filter-search" />
                        </div>
        
                        <div class="text">
                            <h4>A user-friendly design that displays products from newest to oldest.</h4>

                            <ul>
                                <li className = "mb-md">Posts can be saved for future reference and forwarded to other students.</li>
                                <li>Details about the seller and the items they are selling.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex second">
                        <div class="text">
                            <h4>Buttons that are located above the navigation are static and designed for the marketplace.</h4>

                            <ul>
                                <li className = "mb-md">Viewing previously saved items on the marketplace.</li>
                                <li className = "mb-md">List of offers and their current status.</li>
                                <li className = "mb-md">A listings button where users can upload their products.</li>
                            </ul>

                        </div>
                        <div class="marketplace-feature">
                            <img src= {inmMarketPlace2} alt="intuitive navigation bar for mobile screens" />
                        </div>
                    </div>
                

                    <div class="flex third">
                        <div class="marketplace-feature">
                            <img src= {inmMarketPlace3} alt="user-friendly checkout process" />
                        </div>
        
                        <div class="text">
                            <h4>An easy to use transaction process for students.</h4>

                            <ul>
                                <li>Authentication guaranteed with student information.</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>

                {/* <div class="content">
                    <div class="figma-plugin-container">
                        <h3>PROTOTYPE</h3>

                        <iframe
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            width="100%"
                            height="600"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fx0Z5w1nDUJvRm6331CUPw6%2FPortfolio-Project---INM%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DnTn6y8dSSvCLTGeV-1"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div> */}

                <div class="content">
                    <h2>03 KEY TAKEAWAYS</h2>
                    <div className="container">
                        <div className="item center center-text">
                             <h4>In the future, more research and testing could be implemented to solidify our assumptions and solutions. While this project was merely design and project management oriented, this experience allowed me to explore my creativity and solve tasks in a timely-manner, which is necessary when working with clients or conducting projects with large firms.</h4>
                        </div>
                    </div>
                
                </div>

                <BottomNavigation projectName={"MYMORI"} link={"/mymori"}/> 
        
            </section>
        
        </main>
        </>
    )
}
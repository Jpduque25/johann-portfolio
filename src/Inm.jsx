import InmHead from "./components/SEO/InmHead"
import { inmLogo, inmMarketPlace1,inmMarketPlace2,inmMarketPlace3, inmStyleguide } from "./assets/inm-assets/inm-assets"

import ProjectBanner from "./components/Projectbanner"
import ProjectCard from "./components/projectCard"
import BottomNavigation from "./components/BottomNavigation"
import Tacohaven from "./Tacohaven"
import ProjectOverview from "./projectoverview"



export default function Inm(){

    const selectProject = ProjectOverview[1];

    return(
        <>
        <InmHead/>
        <main class = "inm-project">

            <ProjectBanner projectTitle={"INSTITUTE OF NEW MEDIA"} projectDescription={"A student application for a fictitious institute focused on design, technology, and business."} projKey={"inm"}/>

            <section class = "project-intro">
                <div class="content">
                    <ProjectCard project={selectProject}/>
                </div>
            </section>

            <section class="inm-writeup">

                <div class="content">
                    <div class="grid-container">

                        <div class="column">
                            <h4>High traffic on campus websites are based on enrollment season.</h4>
                        </div>

                        <div class="column">
                            <div class="card-sm first ">
                                <p>Registering for courses</p>
                            </div>

                            <div class="card-sm second">
                                <p>Viewing course schedule</p>
                            </div>

                            <div class="card-sm third">
                                <p>Checking student mail</p>
                            </div>

                            <div class="card-sm fourth">
                                <p>Student resources</p>
                            </div>
                            
                            <div class="card-sm fifth">
                                <p>Student/Employer networking opportunities </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <h2>01 USER RESEARCH</h2>

                    <p>Research that was conducted was based on past experiences of students in our program. </p>

                    <div class="card-grid">

                        <div class="card">
                            <div class="card-bold">
                                <p>Poor navigation</p>
                            </div>
                            <div class="card-text">
                                <p>Trouble navigating the website to find the course schedule. </p>
                            </div>
                            
                        </div>

                        <div class="card">
                            <div class="card-bold">
                                <p>Navigating course deadlines</p>
                            </div>
                            <div class="card-text">
                                <p>Course deadlines weren’t displayed on the main course dashboard.</p>
                            </div>
                        
                        </div>

                        <div class="card">
                            <div class="card-bold">
                                <p>Student marketplace</p>
                            </div>
                            <div class="card-text">
                                <p>A feature to connect students as they buy and sell items safely with an intuitive checkout process.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-bold">
                                <p>Mobile Wallet</p>
                            </div>
                            <div class="card-text">
                                <p>Student mobile wallet for safe, secure and saves additional space when travelling. </p>
                            </div>
                        </div>
                        

                        <div class="card">
                            <div class="card-bold">
                                <p>Networking opportunities</p>
                            </div>
                            <div class="card-text">
                                <p>Opportunity to explore student networking as students can join communities and network with peers, faculty members, or the student community. </p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-bold">
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

                    <div class="divider">
                        <p>My team consisted of a project manager, graphic designers, UX designers, and a developer. Because this was a project-management project, we implemented the waterfall methodology as we were provided tasks that needed to be completed for each phase. Overall we had 4 phases to bring all these deliverables together for presentation. As a group, we collectively decided on the style guide as it set the direction of our fictitious company.</p>
                    </div>

                    <div class="divider">
                        <img src= {inmStyleguide} className = "image" alt="inm styleguide" />
                        <div class = "article">Styleguide</div>
                    </div>

                    <div class="divider">
                        <img src= {inmLogo} className = "image" alt="inm logo design process" />
                        <div class = "article">Logo variations & Logo mockups</div>
                    </div>

                    <p>Myself and a colleague were responsible for creating the user interface for the marketplace. When designing the marketplace, we considered factors such as how listings are posted, the type of navigation our app would have, peer-to-peer transaction and where transactions will be located.</p>
                </div>

                <div class="content">
                    <div class="flex first">
                        <div class="marketplace-feature">
                            <img src= {inmMarketPlace1} alt="product-filter-search" />
                        </div>
        
                        <div class="text">
                            <h4>A user-friendly design that displays products from newest to oldest.</h4>
        
                            <p>Posts can be saved for future reference and forwarded to other students.</p>
                            <br/>
                            <p>Details about the seller and the items they are selling.</p>
                        </div>
                    </div>

                    <div class="flex second">
                        <div class="text">
                            <h4>Buttons that are located above the navigation are static and designed for the marketplace.</h4>
        
                            <p>Viewing previously saved items on the marketplace.</p>
                            <br/>
                            <p>List of offers and their current status.</p>
                            <br/>
                            <p>A listings button where users can upload their products.</p>
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
                            <p>Authentication guaranteed with student information.</p>
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
                    <p>In the future, more research and testing could be implemented to solidify our assumptions and solutions. While this project was merely design and project management oriented, this experience allowed me to explore my creativity and solve tasks in a timely-manner, which is necessary when working with clients or conducting projects with large firms.</p>
                </div>

                <BottomNavigation projectName={"MYMORI"} link={"/mymori"}/> 
        
            </section>
        
        </main>
        </>
    )
}
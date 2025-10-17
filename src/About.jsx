import mypfp from './assets/mypfp.jpg';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import AboutHead from './components/SEO/AboutHead';


export default function AboutMe(){
    return(
        <>
        <AboutHead/>
        <main class = "aboutpg">

            <section class = "myprofile">


                <div class="content">

                    <div class="main-header">
                    
                        {/* <div class="first">
                            <h1>LEARNING THROUGH ITERATION TO CRAFT INSIGHTFUL EXPERIENCES</h1>
                        </div> */}

                        {/* <div class="second">
                            <h1> TO CRAFT <div class="text-glow">INSIGHTFUL EXPERIENCES</div></h1>
                        </div> */}
                    </div>
            
                    <div class="bio">
                        <div class="bio-item">
                            <img src= {mypfp} className = "image" alt="Johann's profile picture" />
                       
                        </div>

                        <div class="bio-item">
                            <h2>UX DESIGNER LOCATED IN VANCOUVER, B.C</h2>
                            <p>Design to me is designing with intent as I want to push barriers and explore unconventional approaches in creating digital products and services. By balancing functionality and aesthetics, I aim to deliver experiences that are unique and meaningful in the digital space. </p>
                        </div>
                    </div>


                </div>

                <div class="content">
                    <hr/>
                </div>

                <div class="content">

                    <div class="skills">
                        <div class="column-one">
                            <h3>SOFTWARE</h3>
                            <ul>
                                <li>Figma</li>
                                <li>Adobe Creative Suite</li>
                                <li>Wordpress</li>
                                <li>Webflow</li>
                                <li>Framer</li>
                                <li>Blender</li>
                                <li>Spline</li>
                            </ul>
                        </div>
                        
                        <div class="column-two">
                            <h3>KEY SKILLS</h3>
                            <ul>
                                <li>UX/UI Design</li>
                                <li>User Research</li>
                                <li>Branding & Identity</li>
                                <li>Design Systems</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                                <li>Design Thinking</li>
                                <li>Visual Design</li>
                                <li>Information Architecture</li>
                            </ul>
                        </div>
                        
                        <div class="column-three">
                            <h3>DEVELOPMENT TOOLS</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>JQuery</li>
                                <li>Github</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>


                <div class="content">
                    <hr/>
                </div>

                <div class="content">
                    <div class="credentials">
                        <h5>Experiences</h5>

                         <div class="row">
                            <div class="column">
                                <h2>LIFEGUARD DIGITAL HEALTH</h2>
                            </div>
        
                            <div class="column">
                                <h4>Product Designer</h4>
                                <p>Redesigned a mobile application to enhance user experience while aligning with the visual identity of the company's flagship product.</p>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="column">
                                <h2>HALETALE</h2>
                            </div>
        
                            <div class="column">
                                <h4>UX/UI Design Intern</h4>
                                <p>Designed a booking form website using CRM tools to streamline the booking process and connect potential clients.</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="column">
                                <h2>Pashmotors</h2>
                            </div>
        
                            <div class="column">
                                <h4>UX/UI Design Intern</h4>
                                <p>Created a roadmap and implement redesign changes to enhance the current web application on all platforms.</p>
                            </div>

                        </div>

                        <div class="row third">
                            <div class="column">
                                <h2>WaffleHacks 2023 by Major League Hacking</h2>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="content">
                    <div class="education">
                        <h5>Education</h5>

                        <div class="row">
                            <div class="column">
                                <h2>BCIT</h2>
                            </div>
                            <div class="column">    
                                <p>New Media Design & Web Development</p>
                            </div>
                        </div>

                        {/* <!-- <div class="row">
                            <div class="column">
                                <h2>Simon Fraser University</h2>
                            </div>
                            <div class="column">    
                                <p>Bachelor of Arts in Economics & Minor in Business</p>
                            </div>
                        </div> --> */}
                    </div>
                </div>



                <div class="content">
                    <div class="certificates">
                        <h5>Certificates</h5>

                        <div class="row">
                            <div class="column">
                                <h2>UX Design Professional Certificate - Google</h2>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="content">
                    <hr/>    
                </div>
            
            </section>

            <section class = "personaldetails">

                <div class="content">
                    <div class="grid">

                        <div class="left">  
                            <div class="column-left">
                                <div class="divider">
                                    <h4>During my spare time,</h4>
                                    <p>I enjoy photography, walking outdoors, and take part in physical activities such as weightlifting, snowboarding, and skating.</p>
                                    
                                </div>

                                <div class="column-left">
                                    <div class="about-img-left">
                                        <img src= {image1} className = "image" alt="my-picture1" />
                                    </div>
                                </div>
            
                            </div>
            
                        
                         
        
                        </div>
        
                        <div class="right">

                            <div class="column-right">
                                <img src= {image2} className = "image"  alt="my-picture2" />
                            </div>
        
                            <div class="column-right">
                                <img src= {image3} className = "image"  alt="my-picture3" />
                            </div>

                            {/* <div class="column-right">
                                <div class="contact-info right">  
                                    <h2>GET IN TOUCH WITH ME</h2>

                                    <div class="email">
                                        <a href="mailto:jpduque25@gmail.com">
                                            <p>Send an email</p>
                                        </a>
                                    </div>
        
                
                                    <div class="social-icons">
        
                                        <a href="https://www.instagram.com/johann.duque" target="_blank">
                                            <div class = "instagram">
                                                <i class="fa-brands fa-instagram fa-xl"></i>
                                            </div>
                                        </a>
                                    
                                        <a href="http://www.linkedin.com/in/johann-duque" target="_blank">
                                            <div class="linkedin">
                                                <i class="fa-brands fa-linkedin-in fa-lg"></i>
                                            </div>
                                        </a>
                
                                    </div>
                                </div>
                            </div> */}
        
                        </div>
                    
        
                    </div>

                </div>
            

            </section>
        </main>
    {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> 
    <script src="js/main.js"></script> */}


        </>
    )

    
}
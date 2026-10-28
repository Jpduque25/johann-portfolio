import { linkedinIcon1, linkedinIcon2, linkedinIcon3 } from "./assets/icons/icons";
import { linkedinWireframe, linkedinMockup, linkedinVideoWireframe, linkedinVideoMockup, linkedinQuiz, linkedinClassroomMockup, linkedinClassroomWireframe } from "./assets/linkedin-assets/linkedin-assets";
import ProjectOverview from './projectOverview';
import BottomNavigation from "./components/BottomNavigation";
import ProjectBanner from "./components/Projectbanner";
import ProjectCard from "./components/projectCard";
import LinkedinHead from "./components/SEO/LinkedinHead";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';



export default function LinkedinLearning(){
    gsap.registerPlugin(ScrollTrigger);

    const selectProject = ProjectOverview[1];

    const sectionEl = useRef();

    
    useGSAP(()=> {

        gsap.from(
        ".cardSmall", {
            y: -15,
            opacity: 0,
            ease: "power2.inOut",
            stagger: 0.4,
            scrollTrigger: { trigger: ".cardSmall", start: "top 80%" }
            }
        )

        gsap.fromTo(
            ".bar",
            { height: 0, 
              opacity: 0 
            },
            {
            height: "auto",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: ".bar", start: "top 50%", once: true
            }
            }
        );


        gsap.from(
            ".icon" , {
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.5,
            stagger: 0.6,
            delay: 0.6,
            scrollTrigger: { trigger: ".icon", start: "top 60%" }
            }
        )

        gsap.from(
            ".vert-line", {
            scaleY: 0,
            transformOrigin: "top",
            opacity: 0,
            delay: 0.6,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                  trigger: ".vert-line",
                start: "top 50%",
                once: true
            }
        });


        gsap.from(
            ".container-card", {
                opacity: 0,
                ease: "power2.inOut",
                delay: 0.2,
                scrollTrigger: {
                    trigger: ".container-card",
                    start: "top 40%",
                }
            }
        )

    }, {scope: sectionEl})

    return (
        <>
            <LinkedinHead/>
            <main className="linkedin-project">

                <ProjectBanner projectTitle = {"LINKEDIN LEARNING"} projectDescription = {"Education and the future in the evolving landscape of online learning platforms." 
                } projKey = {"linkedin"}/>

                <ProjectCard project = {selectProject}/>

            <section ref ={sectionEl} className="linkedin-writeup">

                <div className="content">
                    <div >
                        <h2>01 THE GOAL</h2>

                    </div>

                    <div className="bar">
                        <div className="column">
                                <div className="content icon">
                                    <img src= {linkedinIcon1} alt="learning and thinking"/>
                                    <p>Improving learning experience</p>
                                </div>
                        

                                <div className ="content icon">
                                    <img src= {linkedinIcon2} alt="magnifying glass to search"/>
                                    <p>Discover the root cause of incomplete courses</p>
                                </div>

                                <div className ="content icon">
                                    <img src= {linkedinIcon3} alt="subscription count"/>
                                    <p>Boost the number of subscribers</p>
                                </div>
                        </div>
                    </div>

                </div>

                <div className ="content">
                            <h2>02 USER RESEARCH</h2>

                            <div className ="user-problem center-text">
                                <div className ="user-problem-heading">
                                    <h5>USER PROBLEM</h5>
                                </div>
                                <div className ="user-problem-text">
                                    <h4> What problems do users face with e-learning platforms?</h4>
                                </div>
                            </div>
                        

                            <div className ="vert-line">
                            </div>

                        <div className="container-card">
                            <div className ="card-bg first">
                                <h5>INEFFECTIVE LEARNING EXPERIENCE</h5>
                                <p>Users don’t utilize LinkedinLearnings current features, impacted their ability to view quizzes.</p>
                            </div>

                            <div className ="card-bg second">
                                <h5>LACK OF MOTIVATION</h5>
                                <p>Users struggle to complete courses and learn effectively from online courses.</p>
                            </div>

                            <div className ="card-bg third">
                                <h5>LIMITED ENGAGEMENT AND NETWORKING OPPORTUNITIES</h5>
                                <p>Learners aren’t able to connect with other peers on their learning journey.</p>
                            </div>

                        </div>

                     
                    
                </div>

                <div className ="statement-bar ">
                    <div className = "center-text">
                        <h5>PROBLEM STATEMENT</h5>
                        <h4>What ways can users use the existing tools more effectively to improve their learning experience?</h4>
                    </div>
                </div>

                <div className ="content">
                    <div className ="container mb-content">

                        <div className ="item left">
                            <h4>We created Hypotheses that drove our study as we conducted research on the problems of e-learning platforms.</h4>
                        </div>

                        <div className ="item right">
                            <ul>
                                <li className="mb-md">We believe creating a customize experience will better satisfy users’ individual learning needs and goals.</li>
                                <li className="mb-md">We believe implementing a visually structured pathway with course tools can lead to higher completion rates of each video/course.</li>
                                <li>We believe we can increase direct engagement opportunities between users and instructors which can lead to higher level of user satisfaction and engagement.</li>
                            </ul>
                       
                        </div>
                    </div>

                    <div>
                        <h4>We selected 4 participants to conduct our research based on the common factors:</h4>
                    </div>
                    
                    <div className ="text-card mb-content">

                        <div className="card-top">
                            <div className ="card-sm first mb-md cardSmall">
                                <p>Same level of education </p>
                            </div>
    
                            <div className ="card-sm second cardSmall">
                                <p>Different fields of learning interests</p>
                            </div>

                        </div>

                        <div className="card-bottom">
                            <div className ="card-sm third mb-md cardSmall">
                                <p>Little to no experience with Linkedin Learning</p>
                            </div>
    
                            <div className ="card-sm fourth cardSmall">
                                <p>Wide range of learning styles</p>
                            </div>

                        </div>
                    </div>

                    <div className="container mb-content">
                        <div className="item left">
                         <h4>Details of the controlled interview:</h4>

                        </div>

                        <div className="item right ">
                            <ul className="mb-md">
                                <div className="bulletin">
                                    <li className = "mb-md"><b>1 moderator, 1 observer, 2 online observers </b></li>
                                    <li className = "mb-md"><b>Controlled Interview (in-person) </b></li>
                                    <li className = "mb-md"><b>Technical Equipment (laptop, tablet, microphone)</b></li>
                                    <li><b>Zoom to conduct  the testing and record the session.</b></li>
                                </div>                              
                            </ul>

                            <p >The test will be around 30-45 minutes in which the participants will each be introduced to the interview. Once they are given the instructions , they will have to log into their LinkedinLearning account where they will complete tasks which are provided by the task cards we’ve made.</p>
                        </div>
                      
                    </div>
            
        
                    <div className ="container mb-content">
                        <div className="item left"><h4>Make search results more personalized to cater to user’s preferences. </h4>
                        </div>
                        <div className="item right"><p>Search results are not optimized and distinct from others when users search up content. This results in user’s unable to discover the content they need for their learning objectives. </p>  </div>
                    </div>

                    <div className ="container mb-content">
                        <div className="item left"><h4>Improve on the existing affordances, so user’s are able to use the provided tools effectively.</h4></div>
                        <div className="item right"><p>Visual cues located in the course modules were not utilized by our participants as they did not understand the functionality. The note taking feature for example was inaccessible when users want to review notes during the quiz. The transcript feature, which converts audio to written format was underutilized as users did not know that by clicking on the transcript, it would change the timestamps of the video.</p></div>
                    </div>

                    <div className="container">
                        <div className="item left"><h4>Minimal involvement with learners and instructors</h4></div>
                        <div className="item right"><p>There is a disconnect with learners and instructors as learners don’t have the ability to communicate with peers or their instructors unless it is through linkedin and on their own discretion. This can negatively impact the learning experience as learners can’t communicate their problems with others who follow the same issue. </p></div>
                    </div>

                </div>

                <div className ="content">
                    <h2>02 RECOMMENDATIONS</h2>

                        <div className ="container">
                            <div className="item left"><h4>AI-Driven customized experience</h4></div>

                            <div className="item right">
                                <ul>
                                    <div className="bulletin">
                                        <li className = "mb-md"><b>Use of AI to suggest recommended courses based on user searches and preferences.</b></li>
                                        <li className = "mb-md"><b>Intuitive chatbot that provides specific prompts that users may ask.</b></li>
                                        <li className = "mb-md"><b>Enlargement of the search bar and centering it to provide visual emphasis</b></li>
                                        <li><b>Add a saved page on the side bar for users who want to look at previously saved courses and videos.</b></li>

                                    </div>
                                   
                                </ul>
                            </div>
                        
                            <div className="assetsContainer two-column mt-content mb-content ">
                                <div className="left">
                                    <div className="imageContainer">
                                        <img src= {linkedinWireframe} alt="" className = "image" />
                                    </div>

                                    <div className = "article">Wireframe - AI-driven customized experience (left)</div>

                                </div>

                                <div className="right">
                                    <div className="imageContainer">
                                        <img src= {linkedinMockup} alt="" className = "image" />
                                    </div>

                                    <div className = "article"> Mockup - AI-driven customized experience (Right)</div>
                                    
                                </div>
                                                    
                            </div>                    
                        </div>
                    
                    <div className ="container">
                        <div className="item left">
                            <h4>Intuitive UI elements on course modules</h4>
                        </div>

                        <div className="item right">
                             <ul>
                                <div className="bulletin">
                                    <li className = "mb-md"><b>Adding formatting tools on the notes function for effective organization and customization.</b></li>
                                    <li className = "mb-md"><b>Hovering over the progress bar will display the thumbnail of the timestamp</b></li>
                                    <li className = "mb-md"><b>Options of saving and sharing course videos</b></li>
                                    <li><b>Autoplay button </b></li>
                                 </div>
                            </ul>
                        </div>

                        <div className="assetsContainer two-column mt-content mb-content ">
                            <div className="left">
                                <div className="imageContainer">
                                    <img src= {linkedinVideoWireframe} alt="improved UI on course module wireframe" className = "image"/>
                                </div>

                                <div className = "article">Wireframe - Intuitive UI elements on course modules</div>
                            </div>

                            <div className="right">
                                <div className="imageContainer">
                                    <img src= {linkedinVideoMockup} alt="improved UI on course module mockup" className = "image"/>                                
                                </div>

                                <div className = "article">Mockup - Intuitive UI elements on course modules</div>                            
                            </div>              
                        </div>        
                    </div>


                    <div className="container mb-content">
                        <div className="item left">
                            <h4>Quiz Enhancements</h4>
                        </div>

                        <div className="item right">
                            <ul>
                                <div className="bulletin">
                                    <li className = "mb-md"><b>Adding a notes feature so users can record important details which may be used while taking the quiz.</b></li>
                                    <li className = "mb-md"><b>Notes are automatically hidden when tests are conducted, however if needed, users can view notes by clicking on the icon.</b></li>
                                    <li><b>A confirmation step so users can review their answers prior to submission.</b></li>
                                </div>

                            </ul>
                           
                        </div>

                        <div className ="assetsContainer mt-content">
                            <div className="imageContainer">
                                <img src= {linkedinQuiz} alt="quiz enhancements wireframe and mockup" className = "image"/>
                            </div>
                        
                            <div className = "article">Wireframe & Mockup Comparison</div>
                        </div>
                            
                    </div>

                
                    <div className="container">
                        <div className="item left">
                            <h4>Organized classroom structure</h4>
                        </div>
                        <div className="item right">
                            <ul>
                                <div className="bulletin">
                                    <li className = "mb-md"><b>Users can subscribe to their favorite instructors and get notifications on new content.</b></li>
                                    <li className = "mb-md"><b>Designed an instructor profile that contains details of experience and credibility of instructors</b></li>
                                    <li className = "mb-md"><b>Navigation menu that helps users keep track of their progress with the courses that each instructor offers.</b></li>
                                    <li><b>Utilize tags as a representation of the topics being taught.</b></li>
                                </div>
                            </ul>
                        </div>

                        <div className="assetsContainer two-column mt-content">
                            <div className="left">
                                <div className="imageContainer">
                                    <img src= {linkedinClassroomWireframe} alt="classroom structure wireframe" className = "image"/>
                                </div>

                                <div className ="article">Wireframe - Organized classroom structure</div>
                            </div>

                            <div className="right">
                                <div className="imageContainer">
                                    <img src= {linkedinClassroomMockup} alt="classroom structure mockup" className = "image"/>             
                                </div>

                                <div className ="article">Mockup - Organized classroom structure</div>
                      
                            </div>              
                        </div>        

                    </div>
                
                </div>

                {/* <div className="figma-plugin-container">
                <h3>PROTOTYPE</h3>
                <iframe
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    width="100%"
                    height="600"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fk5xraLAH0uLYaUChGIsE5e%2FPortfolio-Project---LinkedinLearning%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DxQ8XQIDexxZ0Zr3l-1"
                    allowFullScreen
                ></iframe>
                </div> */}

                <div className ="content">
                        <h2>03 KEY TAKEAWAYS</h2>
                    <div className="container">
                        
                        <div className="item center">
                            <h4 className = "center-text">This case study gave me insight on the whole UX Design process and the advantages of testing in a controlled setting. There were a few instances of miscommunication and tech issues however we were able to pivot and learn from our mistakes as each subsequent interview provided value to our study. By focusing our resources on the <b>empathize, define, and ideate phase</b>, this helped us remain focused on our objectives. </h4>
                        </div>
                    </div>
                </div>

                <BottomNavigation projectName={"INSTITUTE OF NEW MEDIA"} link = "/inm"/>

            </section>

            </main>
        </>
        
      
        
     )
 }
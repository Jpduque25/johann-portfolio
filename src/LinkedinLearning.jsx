import { linkedinIcon1, linkedinIcon2, linkedinIcon3 } from "./assets/icons/icons";
import { linkedinWireframe, linkedinMockup, linkedinVideoWireframe, linkedinVideoMockup, linkedinQuiz, linkedinClassroomMockup, linkedinClassroomWireframe } from "./assets/linkedin-assets/linkedin-assets";
import ProjectOverview from './projectOverview';
import BottomNavigation from "./components/BottomNavigation";
import ProjectBanner from "./components/Projectbanner";
import ProjectCard from "./components/projectCard";
import LinkedinHead from "./components/SEO/LinkedinHead";


export default function LinkedinLearning(){

    const selectProject = ProjectOverview[0];

    return (
        <>
            <LinkedinHead/>
            <main className="linkedin-project">

                <ProjectBanner projectTitle = {"LINKEDIN LEARNING"} projectDescription = {"Education and the future in the evolving landscape of online learning platforms." 
                } projKey = {"linkedin"}/>

                <ProjectCard project = {selectProject}/>

            <section className="linkedin-writeup">
                <div className="goal">
                    <h2>01 THE GOAL</h2>
                </div>

                <div className="bar">
                <div className="column">
                        <div className="content">
                            <img src= {linkedinIcon1} alt="learning and thinking"/>
                            <p>Improving learning experience</p>
                        </div>
                

                        <div className ="content">
                            <img src= {linkedinIcon2} alt="magnifying glass to search"/>
                            <p>Discover the root cause of incomplete courses</p>
                        </div>

                        <div className ="content">
                            <img src= {linkedinIcon3} alt="subscription count"/>
                            <p>Boost the number of subscribers</p>
                        </div>
                </div>
                </div>

                <div className ="content">
                            <h2>02 USER RESEARCH</h2>

                            <div className ="user-problem">
                                <div className ="user-problem-heading">
                                    <h5>USER PROBLEM</h5>
                                </div>
                                <div className ="user-problem-text">
                                    <h4> What problems do users face with e-learning platforms?</h4>
                                </div>
                            </div>
                        

                            <div className ="vert-line">
                            </div>


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

                <div className ="statement-bar">
                <h5>PROBLEM STATEMENT</h5>
                <h4>What ways can users use the existing tools more effectively to improve their learning experience?</h4>
                </div>

                <div className ="content">
                    <div className ="grid">

                        <div className ="grid-item title">
                            <h4>We created Hypotheses that drove our study as we conducted research on the problems of e-learning platforms.</h4>
                        </div>

                        <div className ="grid-item content">
                            <p>We believe creating a customize experience will better satisfy users’ individual learning needs and goals.</p>

                            <br/>

                            <p>We believe implementing a visually structured pathway with course tools can lead to higher completion rates of each video/course.</p>

                            <br/>

                            <p>We believe we can increase direct engagement opportunities between users and instructors which can lead to higher level of user satisfaction and engagement.</p>

                        </div>
                    </div>
                </div>

                <div className ="content">
                <div className ="divider">
                    <h4>We selected 4 participants to conduct our research based on the common factors:</h4>
                </div>
                    
                <div className ="grid2">

                    <div className ="grid-item">
                        <div className ="card-sm first">
                            <p>Same level of education </p>
                        </div>
    
                        <div className ="card-sm second">
                            <p>Different fields of learning interests</p>
                        </div>
                    </div>

                
                    <div className ="grid-item">
                        <div className ="card-sm third">
                            <p>Little to no experience with Linkedin Learning</p>
                        </div>
    
                        <div className ="card-sm fourth">
                            <p>Wide range of learning styles</p>
                        </div>
                    </div>
                </div>

                </div>

                <div className ="content">
                <h4>Details of the controlled interview:</h4>

                <div className ="divider">
                    <ul className = "details">
                        <li>1 moderator, 1 observer, 2 online observers </li>
                        <li>Controlled Interview (in-person) </li>
                        <li>Technical Equipment (laptop, tablet, microphone)</li>
                        <li>Zoom to conduct  the testing and record the session.</li>
                    </ul>
                </div>
            
                <div className ="divider">
                    <p>The test will be around 30-45 minutes in which the participants will each be introduced to the interview. Once they are given the instructions , they will have to log into their LinkedinLearning account where they will complete tasks which are provided by the task cards we’ve made. </p>
                </div>
                
                </div>


                <div className ="content">
        
                <div className ="divider">
                    <h4>Make search results more personalized to cater to user’s preferences. </h4>
                    <p>Search results are not optimized and distinct from others when users search up content. This results in user’s unable to discover the content they need for their learning objectives. </p>  
                </div>

                <div className ="divider">
                    <h4>Improve on the existing affordances, so user’s are able to use the provided tools effectively.</h4>
                    <p>Visual cues located in the course modules were not utilized by our participants as they did not understand the functionality. The note taking feature for example was inaccessible when users want to review notes during the quiz. The transcript feature, which converts audio to written format was underutilized as users did not know that by clicking on the transcript, it would change the timestamps of the video.</p>
                </div>

                <div className ="divider">
                    <h4>Minimal involvement with learners and instructors</h4>
                    <p>There is a disconnect with learners and instructors as learners don’t have the ability to communicate with peers or their instructors unless it is through linkedin and on their own discretion. This can negatively impact the learning experience as learners can’t communicate their problems with others who follow the same issue. </p>
                </div>

                </div>

                <div className ="content">
                <h2>02 RECOMMENDATIONS</h2>

                    <div className ="divider">
                        <h4>AI-Driven customized experience</h4>
                        <ul className = "details">
                            <li>Use of AI to suggest recommended courses based on user searches and preferences.</li>
                            <li>Intuitive chatbot that provides specific prompts that users may ask. </li>
                            <li>Enlargement of the search bar and centering it to provide visual emphasis</li>
                            <li>Add a saved page on the side bar for users who want to look at previously saved courses and videos. </li>
                        </ul>
                    </div>
                    

                    <div className ="divider">
                        <img src= {linkedinWireframe} alt="AI optimized search wireframe" className = "image" />
                        <div className = "article">Wireframe - AI-driven customized experience</div>
                    </div>

                    <div className ="divider">
                        <img src= {linkedinMockup} alt="AI optimized search mockup" className = "image" />
                        <div className = "article">Mockup - AI-driven customized experience</div>
                </div>
                        
                </div>

                <div className ="content">
                    <div className ="divider">
                        <h4>Intuitive UI elements on course modules</h4>
                        <ul className = "details">
                            <li>Adding formatting tools on the notes function for effective organization and customization.</li>
                            <li> Hovering over the progress bar will display the thumbnail of the timestamp</li>
                            <li>Options of saving and sharing course videos </li>
                            <li>Autoplay button </li>
                        </ul>
                    </div>
                

                    <div className ="divider">
                        <img src= {linkedinVideoWireframe} alt="improved UI on course module wireframe" className = "image"/>
                        <div className = "article">Wireframe - Intuitive UI elements on course modules</div>
                    </div>

                    <div className ="divider">
                        <img src= {linkedinVideoMockup} alt="improved UI on course module mockup" className = "image"/>
                        <div className = "article">Mockup - Intuitive UI elements on course modules</div>
                    </div>
                    
                </div>

                <div className ="content">
                    <div className ="divider">
                        <h4>Quiz Enhancements</h4>
                        <ul className = "details">
                            <li>Adding a notes feature so users can record important details which may be used while taking the quiz.</li>
                            <li>Notes are automatically hidden when tests are conducted, however if needed, users can view notes by clicking on the icon.</li>
                            <li>A confirmation step so users can review their answers prior to submission.</li>
                        </ul>
                    </div>
                    
                    <div className ="divider">
                        <img src= {linkedinQuiz} alt="quiz enhancements wireframe and mockup" className = "image"/>
                    </div>
                </div>


                <div className ="content">

                <div className ="divider">   
                    <h4>Organized classroom structure</h4>
                    <ul className = "details">
                        <li>Users can subscribe to their favorite instructors and get notifications on new content.</li>
                        <li>Designed an instructor profile that contains details of experience and credibility of instructors</li>
                        <li>Navigation menu that helps users keep track of their progress with the courses that each instructor offers. </li>
                        <li>Utilize tags as a representation of the topics being taught.</li>
                    </ul>
                </div>
            
                <div className ="divider">
                    <img src= {linkedinClassroomWireframe} alt="classroom structure wireframe" className = "image"/>
                    <div className ="article">Wireframe - Organized classroom structure</div>
                </div>

                <div className = "divider">
                    <img src= {linkedinClassroomMockup} alt="classroom structure mockup" className = "image"/>
                    <div className ="article">Mockup - Organized classroom structure</div>
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

                    <p>This case study gave me insight on the whole UX Design process and the advantages of testing in a controlled setting. There were a few instances of miscommunication and tech issues however we were able to pivot and learn from our mistakes as each subsequent interview provided value to our study. By focusing our resources on the <b>empathize, define, and ideate phase</b>, this helped us remain focused on our objectives. </p>
                </div>

                <BottomNavigation projectName={"INSTITUTE OF NEW MEDIA"} link = "/inm"/>
            </section>

            </main>
        </>
        
      
        
     )
 }
import InmHead from "./components/SEO/BuildstrongHead" // Change seo tag 

import ProjectBanner from "./components/Projectbanner";
import ProjectOverview from "./projectOverview";
import ProjectCard from "./components/projectCard";
import {homescreenRedesign, onboardingFlow, socialMedia, websitePromo, buildstrongPromo, homescreenNew, homescreenOld} from "./assets/buildstrong-assets/buildstrong-assets";
import BottomNavigation from "./components/BottomNavigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function BuildStrong(){

    gsap.registerPlugin(ScrollTrigger);
    const selectProject = ProjectOverview[0];
    const sectionEl = useRef();

    useGSAP( () => {
        gsap.from( 
            ".card" , {
                opacity: 0,
                y: -15,
                stagger: 0.5,
                ease: "power2.inOut",
                scrollTrigger: { trigger: ".card", start: "top 80%"}
            }
        )
    }, {scope: sectionEl})
    
    return(
        <>  
            <InmHead/>
            {/* insert seo tag */}
            <main className = "buildstrong-project">

                {/* Change  banner img */}
                <ProjectBanner projectTitle={"BUILDSTRONG"} projectDescription={"Exploring new ways to generate engagement and expand the application for trade workers"} projKey={"buildstrong"}/>

                <ProjectCard project ={selectProject}/>


                <section ref={sectionEl} className="buildstrong-writeup">
                    <div className="content">

                        <div className="goal">
                            <h2>01 THE GOAL</h2>

                            <ul>
                                <li className = "mb-xl listItem"><span className = "list-circle">1</span>
                                    <div>
                                        Make design revisions to reflect new authentication process 
                                    </div>
                                </li>

                                <li className = "mb-xl listItem"><span className = "list-circle">2</span>
                                    <div >
                                        Implement necessary UI changes that improve user experience
                                    </div>
    
    
                                </li>

                                <li className = "mb-xl listItem"><span className = "list-circle">3</span>
                                    <div >
                                        Create marketing strategies to promote the application through social media channels 
                                    </div>
                                </li>

                                <li className = "mb-xl listItem"><span className = "list-circle">4</span>
                                    <div >
                                        Increase user engagement and # of downloads in the app
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    

                    <div className="content">

                        <div className="research">
                            <h2>02 RESEARCH</h2>

                    
                            <div className="container">
                                <div className="item left mb-content">
                                    <h4>With the project timeline being 1 year, I spent 3 months familiarizing myself with the product and its core features.</h4>
                                </div>
                          
                                <div className="item right mb-content">
                                    <h4>I identified key issues such as:</h4>
                                        <ul>
                                            <li className = "mb-md">Outdated design files and system which doesn’t reflect the current version of the application </li>
                                             <li className = "mb-md">The onboarding flow is long and outdated, resulting in a rise of incompletion rates and drop-off rates</li>
                                             <li className = "mb-md">The current UI isn’t consistent with the design standards set for Lifeguard products </li>
                                             <li className = "mb-md">Existing bugs and app crashes</li>
                                             <li className = "mb-md">No marketing strategy existed to drive user engagement</li>
                                              <li><b>Once identifying the issues, I broke them down based on priority and timeline</b></li>
                                        </ul>

                                
                                </div>
                            </div>



                            <div className="container-card">
                                    <h4>The Goals that Mattered Most</h4>

                                        
                                    <div className = "card-bg first">
                                        Update design system and screens to ensure it is identical to the current version of BuildStrong
                                    </div>

                                    
                                    <div className = "card-bg second">
                                        Redesign the onboarding process without the authentication field 
                                    </div>
                            
                                    
                                    <div className = "card-bg third">
                                        Update UI to improve readability, accessibility, and ensure consistency with Lifeguard products
                                    </div>
                                    
                                    
                                    <div className = "card-bg fourth">
                                        Plan marketing and launch a promotional strategy through social media channels 
                                    </div>  
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <div className="challenges">
                            <h2>03 UX CHALLENGES</h2>

                            
                            <div className="container">
                                <div className="item left">
                                    <h4>To ensure that the issues identified would reflect what users experienced when downloading the app, I simplified the priorities and narrowed them down to a user problem.</h4>
                                </div>
                        
                            </div>

                            <div className ="user-problem mt-textCenter mb-textCenter center-text">
                                
                                <h5>USER PROBLEM</h5>

                                <h4> How might we redesign the application to help trades workers confidently access mental health resources, reduce confusion and increasing engagement? </h4>
                            </div>


                            <div className="container">
                                <div className="item left">
                                    <h4>I conducted meetings with subject matter experts (SME’s) and obtained important feedback that relates to the application</h4>
                                </div>

                                <div className="item right">
                                    <ul>
                                        <li className = "mb-md">Users faced confusion when navigating through the application as there were too many steps </li>
                                        <li className>Readability was a concern as construction workers are in different working conditions</li>
                                    </ul>
                          

                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="content">
                        <div className="solutions">
                            <h2>04 SOLUTIONS</h2>
                            
                                <div className="container mb-content">
                                    <div className="item left">
                                        <h4>After collecting feedback, reviewing existing design files, and collaborating with cross-functional teams and clients, I began working on high priority design tasks. </h4>

                                        {/* CONSIDER CHANGING FONT */}
                                    </div>
                                </div>

                            <div className="solution-one mb-content">
                                <div className="container">

                                    <div className="item left">
                                        <h4>Updating the design system and screens to closely align with the current version of BuildStrong. </h4>


                                    </div>

                                    <div className="item right">
                                        <ul>
                                            <li className = "mb-md">This was necessary to ensure the design language remained consistent across designers and developers </li>

                                            <li>Built a scalable design system using design tokens and variables, ensuring consistency across all screens</li>
                                        </ul>
                                    </div>
                                
                                    {/* change asset to include design system  */}
    {/* 
                                    <div className="assetsContainer mt-content mb-content">
                                        <div className="imageContainer">
                                                <img src= {homescreenRedesign} alt="" className = "image"/>
                                            </div>


                                            <div className = "article">Home Screen Redesign : Revamped Version (left) vs. Original Design (Right)</div>

                                    </div> */}
                                
                                </div>
                            </div>


                            <div className="solution-two">
                                <div className="container">      
                                    <div className="item left">
                                        <h4>Simplify onboarding process, fewer steps with more features</h4>
                                    </div>

                                    <div className="item right">
                                        <ul>
                                            <li className = "mb-md">Make changes to onboarding to inform users of the app features and the app now being available to all trade workers</li>
                                            <li className = "mb-md">Improve onboarding completion time </li>
                                            <li className = "mb-md">Reduce # of screens for onboarding to improve completion time and time on task for each screen </li>
                                            <li className = "mb-md"></li>
                                        </ul>
                                    </div>

                                    <div className="item center mt-content center-text">
                                            <h4>
                                                The original onboarding flow was too lengthy and failed to introduce key features, leaving users with an incomplete picture of the app's value. I audited the existing flow, identified gaps in feature coverage, and revised the UX writing to improve clarity — establishing a consistent hierarchy across headings, subheadings, and body copy to guide users more effectively through each step.
                                            </h4>
                                    </div>


                                    {/* change asset to include design system  */}

                                    <div className="assetsContainer mt-content mb-content">
                                            <div className="imageContainer">
                                            <img src= {onboardingFlow} alt="" className = "image"/>
                                        </div>

                                        <div className = "article">New onboarding process - Simplified onboarding with clearer navigation and content clarity.</div>

                                    </div>
                                </div>
                                
            
                            </div>


                            <div className="solution-three">

                                <div className="container">       
                                    <div className="item left">
                                        <h4>Redesign the home screen to make resources easier to find</h4>
                                    </div>

                                    <div className="item right">
                                        <ul>
                                            <li className = "mb-md">Lifeguard's core feature, 'The Alone Timer’  lacked visibility on the home screen compared to their other products </li>
                                            <li className = "mb-md">Taking reference from Lifeguard’s UI library, I redesigned the home screen to ensure consistency while considering accessibility with BuildStrong’s brand colors</li>
                                            <li className = "mb-md">The original layout was too cluttered, forcing users to navigate through multiple levels to find information they needed. Disorganized tile groupings and an unclear feature hierarchy contributed to user confusion and increased time on task</li>
                                            <li className = "mb-md">Color contrast  and readability being a concern for trades workers that are working in various conditions</li>
                                        </ul>
                                    </div>

                                    <div className="item center mt-content center-text">
                                        <h4>I redesigned the tiles, ensuring the ‘Alone timer’ was a key feature and was located at the top. The tiles on the home screen were defined based on priority, with ‘CIRP support’ having multi level features while other cards were intended for a quick access to helpline support and guides.</h4>
                                    </div>

                           

                                    <div className="assetsContainer two-column mt-content mb-content ">
                                            <div className="left">
                                                <div className="imageContainer">
                                                    <img src= {homescreenNew} alt="" className = "image" />
                                                </div>

                                                <div className = "article">Revamped Version (left)</div>
                                            </div>

                                            <div className="right">
                                                <div className="imageContainer">
                                                    <img src= {homescreenOld} alt="" className = "image" />
                                                </div>

                                                <div className = "article"> Original Design (Right)</div>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>

                            <div className="solution-four">

                                <div className="container">
                             
                                <div className="item left">
                                    <h4>Reduce the user flow process of the ‘Alone Timer’ feature</h4>
                                </div>

                                <div className="item right">
                                    <ul>
                                        <li className = "mb-md">The ‘Alone Timer’ is an emergency-response tool that works as a countdown timer notifying emergency services of medical/emergency related issues once the timer reaches 0</li>
                                        
                                        <li className = "mb-md">It is an important feature that needs to be accessible and simple, enabling users to quickly start the timer when needed</li>

                                        <li className = "mb-md">Drop-off points were found because of the repetitive nature of the verification process, resulting in frustration for both new and previous users</li>

                                        <li>The process required too many steps, causing confusion for users who need immediate emergency support</li>

                                    </ul>
                                    
                                </div>

                                <div className="item center mt-content mb-content center-text">
                                    <h4>I reduced the flow process to ensure the Alone Timer was simplified and clear. I separated content into multiple screens, improving scannability and reducing cognitive overload during the flow.</h4>
                                </div>

                                {/* <div className="assetsContainer mt-content mb-content"> 
                                    <div className="imageContainer">
                                        <img src= {homescreenRedesign} alt="" className = "image"/>
                                    </div>

                                    <div className = "article">CHANGE ASSET</div>
                                    {/* CHANGE ASSET TO ALONE TIMER PROCESS */}
                                    {/* screen record alone timer  
                                    </div>
                                */}
                            </div>

                            
                            </div>

                            <div className="solution-five">
                                <div className="container">
                                    <div className="item left">
                                        <h4>Planned and executed a social media campaign to promote the application across multiple social media channels.</h4>
                                    </div>

                                    <div className="item right">
                                        <ul>
                                            <li className = "mb-md">Created a social media calendar from August to December, developing mental health and substance awareness content aligned with the BuildStrong initiative</li>
                                           <li className = "mb-md">Developed the product webpage, highlighting the functionality and features of the application</li>
                                            <li className = "mb-md">Produced a promotional video for BuildStrong that supported marketing initiatives, sales pitch presentations, and social media engagement</li>
                                        </ul>
                                    </div>

                                    <div className="item center center-text">
                                        <h4>I led the marketing and promotion of BuildStrong by developing a social media strategy, planning content, and creating digital graphics and video for social media, industry professionals, and organizations.</h4>
                                    </div>


                                     <div className="assetsContainer two-column mt-content">
                                            <div className="left">
                                                <div className="imageContainer">
                                                    <img src= {socialMedia} alt="" className = "image"/>
                                                </div>

                                                <div className = "article">Social media campaigns</div>
                                            </div>

                                            <div className="right">
                                                <div className="imageContainer">
                                                    <img src= {websitePromo} alt="" className = "image"/>
                                                </div>

                                                <div className = "article">Web Development</div>
                                            </div>

                                             <div className = "center"style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                                    <iframe
                                                src="https://www.youtube.com/embed/DcMARoajgds?si=mDpPhMXa4UsF0hqH"
                                                title="BuildStrong App Promo"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                }}
                                            
                                                ></iframe>
                                                <div className = "article">BuildStrong Promotional Video</div>     
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="content">
                               <div className="results">
                            <h2>05 RESULTS</h2>

                            <div className="container">
                                <div className="item left">
                                    <h4>Since updating the UI and promoting the application to the trades sector, there has been a significant increase in new downloads.</h4>
                                </div>

                                <div className="assetsContainer mt-content">
                                    <div className="card-grid">

                                        <div className="card">

                                            <div className="top">
                                                <span className="title">190% </span>
                                            </div>
                                            <div className="bottom">
                                                <p>monthly download spike vs. 6-month avg</p>
                                            </div>
                                        </div>

                                        <div className="card">

                                            <div className="top">
                                                <span className="title">114% </span>
                                            </div>
                                            <div className="bottom">
                                                <p>growth in monthly active users</p>
                                            </div>
                                        </div>

                                        <div className="card">

                                            <div className="top">
                                                <span className="title">44% </span>
                                            </div>
                                            <div className="bottom">
                                                <p>rise in total downloads year-over-year </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                    
                            <div className = "article mt-sm">Metrics reflect percentage change, exact figures are confidential.
                            </div>

                            <div className="container">

                                <div className="item center mt-content center-text">
                                    <h4>The results proved that there was a use case for this application , especially for trades workers who don’t have ready available resources. It also validates the need for these resources and that making the experience accessible, intuitive, and less confusing can result in more engagement from new and returning users.
                                    </h4>
                                </div>

                            </div>                            
                        </div>
                            
                        </div>                           
                     


                </div>



                    <BottomNavigation projectName={"Linkedin Learning"} link ={"/linkedinlearning"} direction = {"next"}/>
                </section>


            </main>
        </>
        
    )



}
import BrandGuidelinesHead from "./components/SEO/BrandGuidelinesHead" // Change seo tag

import ProjectBanner from "./components/Projectbanner";
import ProjectOverview from "./projectOverview";
import ProjectCard from "./components/projectCard";
import {brandguidelinesImg1} from "./assets/brandguidelines-assets/brandguidelines-assets";
import BottomNavigation from "./components/BottomNavigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function BrandGuidelines(){

    gsap.registerPlugin(ScrollTrigger);
    const selectProject = ProjectOverview[6];
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
            <BrandGuidelinesHead/>
            <main className = "brandguidelines-project">

                <ProjectBanner projectTitle={"LIFEGUARD BRAND GUIDELINES"} projectDescription={"A single source of truth for Lifeguard's brand and messaging, built to improve internal and external communications"} projKey={"brandguidelines"}/>

                <ProjectCard project ={selectProject}/>


                <section ref={sectionEl} className="brandguidelines-writeup">
                    <div className="content">

                        <div className="goal">
                            <h2>01 GOALS</h2>

                            <ul>
                                <li className = "mb-xl listItem"><span className = "list-circle">1</span>
                                    <div>
                                        Keep design and brand consistent across every platform and product
                                    </div>
                                </li>

                                <li className = "mb-xl listItem"><span className = "list-circle">2</span>
                                    <div >
                                        Set the tone of voice. Messaging should be appropriate for digital health: empathetic, transparent, and people-first
                                    </div>
                                </li>

                                <li className = "mb-xl listItem"><span className = "list-circle">3</span>
                                    <div >
                                        Set one standard for branding and messaging that every department applies in the same way
                                    </div>
                                </li>

                             

                                <li className = "mb-xl listItem"><span className = "list-circle">4</span>
                                    <div >
                                        Build trust. The brand should read as transparent, trustworthy and approachable
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className="content">

                        <div className="research">
                            <h2>02 CHALLENGES</h2>


                            <div className="container">
                                <div className="item left mb-content">
                                    <h4>Three issues shaped how the project had to be run</h4>
                                </div>

                                <div className="item right mb-content">
                                        <ul>
                                            <li className = "mb-xl"><h4>High turnover and shifts in priority</h4> 
                                            Marketing agencies and teams came and went, so handoffs were incomplete and the brand and vision drifted</li>
                                            <li className = "mb-xl"><h4>No stakeholder input</h4> Key stakeholders had not been involved earlier, so alignment had to be built from scratch</li>
                                            <li><h4>No source of truth</h4> Departments and team used different terminology for the products and the brand</li>
                                        </ul>
                                </div>
                            </div>



                            <div className="container-card">
                                    <h4>What Made This Harder Than a Typical Brand Project</h4>

                                    <div className = "card-bg first">
                                        <b>Inconsistent brand and messaging</b> 
                                        <p>Outdated marketing collateral, terminology, and tone made it difficult for departments to communicate consistently.</p>
                                    </div>

                                    <div className = "card-bg fourth">
                                        <b>Repeated handoffs</b>
                                        <p>The project changed hands several times before I joined, which stalled completion and kept it from being treated as a priority</p>
                                    </div>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <div className="challenges">
                            <h2>03 THE PROBLEM</h2>

                            <div className ="user-problem mt-textCenter mb-textCenter center-text">

                                <h5>THE PROBLEM</h5>

                                <h4> Without a single source of truth, each department made its own branding and messaging decisions. </h4>
                            </div>
                    
                        </div>
                    </div>

                    <div className="content">
                        <div className="solutions">
                            <h2>04 THE SOLUTION</h2>

                            <div className="container">
                                <div className="item left mb-content">
                                    <h4>I worked through the project by breaking it down to multiple parts - from auditing existing resources, to defining the brand rules, building imagery and patterns, and bringing it together with a copywriter and marketing designer. </h4>
                                </div>

                                <div className="item right mb-content">
                                        <ul>
                                            <li className = "mb-xl"><h4>Audit and update existing resources.</h4> I collected what Lifeguard already had, from past agency work to current assets, and brought it up to date</li>
                                            <li className = "mb-xl"><h4>Define the core brand system.</h4> This covers the design language, logo usage, acceptable and unacceptable use, and primary and secondary colours</li>
                                            <li className = "mb-xl"><h4>Set imagery and pattern guidelines.</h4> Visuals follow the same rules everywhere</li>
                                            <li className = "mb-xl"><h4>Compile the guideline with a copywriter and a marketing designer.</h4> Working together kept the visual and verbal sides of the brand aligned</li>
                                            <li className = "mb-xl"><h4>Mock up how products relate to the main brand.</h4> The mockups show how each product keeps its own identity while sharing recognisable elements with the Lifeguard master brand</li>
                                            <li><h4>Check in regularly with the management team.</h4> Frequent feedback loops caught disagreement early and kept scope creep in check</li>
                                        </ul>
                                </div>
                            </div>

                        </div>

                        <div className="content">
                               <div className="results">
                            <h2>05 RESULTS</h2>

                            <div className="container">
                              
                            </div>

                            <div className="container">
                                <div className="item left">
                                    <h4>Lifeguard now has a complete brand guideline that works as the source of truth for the marketing team and every other department.</h4>
                                </div>



                                <div className="assetsContainer mt-content">
                                    <div className="imageContainer">
                                        <img src= {brandguidelinesImg1} alt="Lifeguard brand guidelines" className = "image"/>
                                    </div>
                                </div>


                                

                                <div className="assetsContainer mt-content">
                                    <div className="card-grid">

                                        <div className="card">
                                            <div className="top">
                                                <span className="title"><b>INTERNAL TEAMS</b></span>
                                            </div>
                                            <div className="bottom">
                                                <p>A single reference for visuals, terminology and tone, replacing different departmental opinions and outdated marketing collateral</p>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="top">
                                                <span className="title">CLIENTS</span>
                                            </div>
                                            <div className="bottom">
                                                <p>Current clients can use the document when planning campaigns or using Lifeguard assets</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Metrics to add: if you have them, a line on adoption (teams using the guideline, assets updated, fewer brand-related review rounds) would strengthen this section. */}

                        </div>

                        </div>

                </div>



                    <BottomNavigation projectName={"Linkedin Learning"} link ={"/linkedinlearning"} direction = {"next"}/>
                </section>


            </main>
        </>

    )



}

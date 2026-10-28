import mypfp from './assets/mypfp.jpg';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import AboutHead from './components/SEO/AboutHead';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';



export default function AboutMe(){

    gsap.registerPlugin(ScrollTrigger);
    const skillsRef = useRef();
    const credsRef = useRef();

    // useGSAP(()=>{
    //     gsap.from(
    //         ".listItem" ,{
    //             opacity: 0,
    //             stagger: 0.15,
    //             ease: "power2.inOut"
    //         }
    //     )
    // }, {scope: container});

 
useGSAP(() => {
  const columns = gsap.utils.toArray("ul", skillsRef.current);

  // Collect all skillItems per column
  const lists = columns.map(col =>
    Array.from(col.querySelectorAll(".skillItem"))
  );

  // Find longest column
  const maxRows = Math.max(...lists.map(list => list.length));

  const ordered = [];

  // Build row-by-row order
  for (let row = 0; row < maxRows; row++) {
    for (let col = 0; col < lists.length; col++) {
      if (lists[col][row]) {
        ordered.push(lists[col][row]);
      }
    }
  }

  // Animate in row order
  gsap.from(ordered, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.08,
    scrollTrigger: { trigger: ordered, start: "top 80%" }
  });


    gsap.utils.toArray(".card").forEach((card) => {
    gsap.fromTo(
        card,
        { opacity: 0 },
        {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true
        }
        }
    );
    });

}, { scope: skillsRef });


    return(
        <>
        <AboutHead/>
        <main ref={skillsRef} className = "aboutpg">

            <section className = "myprofile">


                <div className="content">

                    <div className="main-header">
                    
                        {/* <div class="first">
                            <h1>LEARNING THROUGH ITERATION TO CRAFT INSIGHTFUL EXPERIENCES</h1>
                        </div> */}

                        {/* <div class="second">
                            <h1> TO CRAFT <div class="text-glow">INSIGHTFUL EXPERIENCES</div></h1>
                        </div> */}
                    </div>
            
                    <div className="bio">
                        <div className="bio-item">
                            <img src= {mypfp} className = "image" alt="Johann's profile picture" />
                       
                        </div>

                        <div className ="bio-item">
                            <h2>PRODUCT DESIGNER LOCATED IN VANCOUVER, B.C</h2>
                            <p>Design to me is designing with intent as I want to push barriers and explore unconventional approaches in creating digital products and services. By balancing functionality and aesthetics, I aim to deliver experiences that are unique and meaningful in the digital space. </p>
                        </div>
                    </div>


                </div>

                <div className ="content">
                    <hr/>
                </div>

                <div className="content">

                    <div className ="skills">
                        <div className ="column-one">
                            <h3>SOFTWARE</h3>
                            <ul>
                                <li className='skillItem'>Figma</li>
                                <li className='skillItem'>Adobe Creative Suite</li>
                                <li className='skillItem'>Wordpress</li>
                                <li className='skillItem'>Webflow</li>
                                <li className='skillItem'>Framer</li>
                                <li className='skillItem'>Blender</li>
                                <li className='skillItem'>Spline</li>
                                <li className='skillItem'>Canva</li>
                                <li className='skillItem'>Jira</li>

                            </ul>
                        </div>
                        
                        <div  className ="column-two">
                            <h3>KEY SKILLS</h3>
                            <ul>
                                <li className='skillItem'>UX/UI Design</li>
                               <li className='skillItem'>User Research</li>
                                <li className='skillItem'>Branding & Identity</li>
                                <li className='skillItem'>Design Systems</li>
                                <li className='skillItem'>Wireframing</li>
                                <li className='skillItem'>Prototyping</li>
                                <li className='skillItem'>Design Thinking</li>
                                <li className='skillItem'>Visual Design</li>
                                <li className='skillItem'>Information Architecture</li>
                            </ul>
                        </div>
                        
                        <div className ="column-three">
                            <h3>DEVELOPMENT TOOLS</h3>
                            <ul>
                                <li className='skillItem'>HTML</li>
                                <li className='skillItem'>CSS</li>
                                <li className='skillItem'>Javascript</li>
                                <li className='skillItem'>React</li>
                                <li className='skillItem'>Python</li>
                                <li className='skillItem'>PHP</li>
                                <li className='skillItem'>JQuery</li>
                                <li className='skillItem'>Github</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>


                <div className="content">
                    <hr/>
                </div>

                <div className="content">
                    <div className="credentials"> 
                        
                        <h5>Experiences</h5>

                         <div className="row card ">
                            <h2>LIFEGUARD DIGITAL HEALTH</h2>
    
                            <h4>Product Designer</h4>
                            <p>Redesigned a mobile application to enhance user experience while aligning with the visual identity of the company's flagship product.</p>
                        </div>
                        
                        <div className="row mt-xxl card">
                            <h2>HALETALE</h2>
    
                            <h4>Web Designer</h4>
                            <p>Designed a booking form website using CRM tools to streamline the booking process and connect potential clients.</p>
                        </div>

                        <div className="row mt-xxl card">
                            <h2>PASHMOTORS</h2>
        
                            <h4>UX/UI Design Intern</h4>
                            <p>Created a roadmap and implement redesign changes to enhance the current web application on all platforms.</p>
                        </div>

                        <div className="row mt-xxl card">
                            <h2>WaffleHacks 2023 by Major League Hacking</h2>
    
                            <h4>Hackathon Challenge</h4>
                            <p></p>
                        </div>

                        <div className="education mt-content card">
                            <h5>Education</h5>

                            <div className="row">
                                <h2>BCIT</h2>

                                <h4>New Media Design & Web Development</h4>
                            </div>
                        </div>


                        <div className="certificates mt-content card">
                            <h5>Certificates</h5>

                            <div className="row">
                                <h2>GOOGLE</h2>

                                <h4>UX Design Professional Certificate</h4>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
{/* 
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

                           j
        
                        </div>
                    
        
                    </div>

                </div>
            

            </section> */}
        </main>
    {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> 
    <script src="js/main.js"></script> */}


        </>
    )

    
}
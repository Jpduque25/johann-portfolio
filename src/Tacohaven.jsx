import {prototype, styleguide, wireframe} from './assets/tacohaven-assets/tacohaven-assets';

import ProjectOverview from './projectOverview';
import BottomNavigation from "./components/BottomNavigation";
import ProjectBanner from "./components/Projectbanner";
import ProjectCard from "./components/projectCard";
import TacohavenHead from './components/SEO/TacohavenHead';


export default function Tacohaven(){

    const selectProject = ProjectOverview[4];

    return(
    <>
      <TacohavenHead/>
      <main class = "tacohaven-project">

            <ProjectBanner projectTitle={"TACO HAVEN"} projectDescription={"A project centered around web design and development, with a focus on establishing a strong brand identity, enhancing user experience (UX) design, and implementing front-end web development tools."} projKey={"tacohaven"}/>
        
            <ProjectCard project={selectProject} buttonName={"VIEW SITE"} />
    

            <section className = "tacohaven-writeup">

                        <div className ="content">
                            <h2>01 The Goal</h2>

                            <div className="goals first">
                                <div className="rectangle first"></div>
                                <div className="goal">
                                    <div className="title">
                                        <p><b>Create a website for a small business that specializes in authentic mexican tacos.</b></p>
                                    </div>
                                
                                    <div className="text">
                                        <p>Hand-code to create a website that displays their menu items and details about the restaurant. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="goals second">
                                <div className="rectangle second"></div>
                                <div className="goal">
                                    <div className="title">
                                        <p><b>Ensure brand identity is consistent throughout the site.</b></p>
                                    </div>
                                
                                    <div className="text">
                                        <p>Create a brand identity that emphasizes the product and services this company delivers while also maintaining consistency throughout the page.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="goals third">
                                <div className="rectangle third"></div>
                                <div className="goal">
                                    <div className="title">
                                        <p><b>Utilize modern tools and frameworks to create a responsive and functioning website.</b></p>
                                    </div>
                                
                                    <div className="text">
                                        <p>Use Bootstraps grid-system while incorporating  SASS for flexibility and Javascript for interactivity.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    
                    <div className="content">
                    <h2>02 DESIGN PROCESS</h2>
                    <p>This 2-week project involved different processes in the design and development stage. First of which is creating wireframes which would eventually evolve into high-fidelity prototypes both on web and mobile platforms. Once this stage was completed, the transition to the development phase was seamless as all the image assets, typography, and color was already determined.</p>
                    </div>

                    
                    <div className="content">
                        <h3>STYLEGUIDE</h3>
                        <img src = {styleguide} className = "image" alt = "styleguide"/>
                    </div>

                    <div className="content">
                        <h3>WIREFRAME</h3>
                        <img src = {wireframe} className = "image" alt = "wireframe"/>
                    </div>

                    <div className="content">
                        <h3>HIGH FIDELITY MOCKUP</h3>
                        <img src = {prototype} className = "image" alt = "prototype"/>

                    </div>

                    {/* <div className="content">
                        <div className="figma-plugin-container">
                            <h3>PROTOTYPE</h3>
                
                            <iframe
                                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                                width="100%"
                                height="600"
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FqpLhpjWMJdKM6vuTvDXh83%2FTaco-Haven%3Fnode-id%3D0-1%26t%3D0bTND5CkYEAdO2Ln-1"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div> */}

                    <div className="content">
                        <h2>03 DEVELOPMENT PROCESS</h2>

                        <p>I wanted to showcase my proficiency in other frameworks and libraries that improve my workflow, resulting in efficiency and less development time.</p>

                        <br/>

                        <p>I developed the website using basic HTML and expanded it by connected frameworks such as Bootstrap to utilize a responsive grid-system. Sass was also utilized in this project which was helpful, making it easy to apply values such as color, font-size, and spacing across the entire webpage. Lastly, to make the website more interactive, I implemented javascript to display animation of texts and images as the user scrolls down the page.</p>
                    </div>

                    <div className="content">
                        <div className="code-snippet first">
                            <h4>I utilized bootstraps 12 column grid system, to create unique layouts for image and text elements.</h4>

                            <iframe
                                title="Gist"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                srcDoc={`
                                    <html>
                                    <head></head>
                                    <body>
                                        <script type="text/javascript" src="https://gist.github.com/Jpduque25/1bd28d2d7197a7e9b4300ae97ca936d3.js"></script>
                                    </body>
                                    </html>
                                `}
                            />
                            
                        </div>
                    </div>

                    <div className="content">
                        <div className="code-snippet second">
                            <h4>Advantages of SASS makes it easy to structure and organize code as selectors can be nested with parent selectors resulting in reduction in code and simplifies targetting elements.</h4>

                            <iframe
                                title="Gist"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                srcDoc={`
                                    <html>
                                    <head></head>
                                    <body>
                                        <script type="text/javascript" src="https://gist.github.com/Jpduque25/699610383b3fcd39dbf02f313f50e6ff.js"></script>
                                    </body>
                                    </html>
                                `}
                            />
                        
                        </div>
                    </div>

                    <div className="content">
                        <div className="code-snippet second">
                            <h4>Implemented javascript so that certain elements will appear based on when the user scrolls down the page.</h4>
                            
                            <ul>

                                <li>Create a const variable scrollElements that contains all the elements with the class name '.js-scroll'</li>
                    
                                <br/>

                                <li>Create a variable elementInView that determines if the element is within the viewport. Using the window.innerheight property, I am able to find the difference between the top of the viewport and the element.</li>

                                <br/>

                                <li>The variable displayScrollElement takes an element and adds the class 'scrolled' which contains the fade in effect when a user scrolls down the site.</li>

                                <br/>

                                <li>The forEach method was used to iterate each element and if the element is within the window view, the 'scrolled' class is added.</li>

                                <br/>

                                <li>I used an event listener to listen for the 'scroll' event to occur. Once the scroll event is fired, the function 'handleScrollAnimation' is called.</li>

                                <br/>

                            <iframe
                                title="Gist"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                srcDoc={`
                                    <html>
                                    <head></head>
                                    <body>
                                        <script type="text/javascript" src="https://gist.github.com/Jpduque25/ed09a3760f76590ae690bf731bafa37b.js"></script>
                                    </body>
                                    </html>
                                `}
                            />

                        
                            </ul>
                        </div>
                    </div>
                    

                <div className="content">
                    <h2>03 KEY TAKEAWAYS</h2>
                    <p>In conclusion, this gave me the experience to utilize popular frameworks and libraries to make a functioning and user-friendly website. In the future, I would like to explore other libraries and frameworks which can reduce the development phase or enhance interactivity and create compelling visuals for web applications.
                    </p>
                </div>

                <BottomNavigation projectName={"FLOWSPACE"} link={"/flowspace"} direction = "previous"/> 
                    
            </section>

      </main>
    </>

    )
}
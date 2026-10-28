import BottomNavigation from "./components/BottomNavigation";
import ProjectBanner from "./components/Projectbanner";
import ProjectCard from "./components/projectCard";
import ProjectOverview from './projectoverview';
import FlowspaceHead from "./components/SEO/FlowspaceHead";


export default function Flowspace(){

    const selectProject = ProjectOverview[4];

    return(
        <>
          <FlowspaceHead/>
          <main class = "flowspace-project">

                <ProjectBanner projectTitle={"FLOW SPACE"} projectDescription={"A digital space designed to foster optimal focus, offering customizable features to enhance productivity and personalization."} projKey={"flowspace"}/>

                <ProjectCard project={selectProject}/>

                    <section class = "flowspace-writeup">

                    
                        <div class="content">
                            <div class="goal">
                                <h2>01 THE GOAL</h2>

                                <div className="container mb-content">
                                    <div className="item left">
                                        <h4>Explore the basics of React JS</h4>
                                    </div>

                                    <div className="item right">
                                        <p>Explore the fundamentals of React.js by creating multiple components that interact and pass data between each other, resulting in dynamic interactivity within the app.</p>

                                    </div>
                                </div>
                                
            
                                <div className="container mb-content">
                                    <div class="item left">
                                          <h4>Countdown timers for effective time management.</h4>
                                    </div>

                                    <div className="item right">
                                        <p>The versatile timer offers 3 modes: a standard clock, focus mode, and break mode. Each mode can be customized to suit the user's specific needs, enhancing productivity and time management.</p>
                                    </div>
                                </div>


                                <div className="container">
                                    <div className="item left">
                                        <h4>Custom themes and fonts</h4>
                                    </div>

                                    <div className="item right">
                                        <p>Create a library of custom themes and fonts for added personalization to the timer and background.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                        <div class="content">
                            <h2>02 DEVELOPMENT PROCESS</h2>

                            <div className="container">
                                <div className="item left">
                                    <p>I created functional components to create the pomodoro timer, navigation bar, settings menu, and the background. Additionally, I embedded a Spotify playlist to provide calm and peaceful music, ideal for optimal focus.</p>

                                </div>

                                <div className="item right">
                                    <p>I initially developed my pomodoro with static data, however as I learned the concepts of parent and child components, I was able to pass data within components, which allowed for user interactivity.</p>
                                </div>
                                
                            </div>


                            <div className="container">
                                
                                <div className="item center">
                                    <p className = "mb-xl">Used <b>state hooks</b> and <b>setter functions</b> to manage and update the components state.</p>
                                    <iframe
                                        title="Gist"
                                        width="100%"
                                        height="500"
                                        frameBorder="0"
                                        srcDoc={`
                                            <html>
                                            <head></head>
                                            <body>
                                                <script type="text/javascript" src="https://gist.github.com/Jpduque25/f1f81f028e2cccd6e134bdf775ab1e6b.js"></script>
                                            </body>
                                            </html>
                                        `}
                                    />
                                </div>
                            </div>

                            <div className="container">
                                <div className="item center">
                                    <p className = "mb-xl">The <b>map()</b> function was used to iterate over an array of objects, displaying wallpaper and font information based on the values in each object.</p>

                                  <iframe
                                    title="Gist"
                                    width="100%"
                                    height="350"
                                    frameBorder="0"
                                    srcDoc={`
                                        <html>
                                        <head></head>
                                        <body>
                                            <script type="text/javascript" src="https://gist.github.com/Jpduque25/21d77e864e0e9f94a9741edf5b3bceb6.js"></script>
                                        </body>
                                        </html>
                                    `}
                                    />

                                     <iframe
                                    title="Gist"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    srcDoc={`
                                        <html>
                                        <head></head>
                                        <body>
                                            <script type="text/javascript" src="https://gist.github.com/Jpduque25/f27a885ab69937dba40a3948c5d4469d.js"></script>
                                        </body>
                                        </html>
                                    `}
                                />
            
                                </div>
                            </div>

                        </div>

                    
                        <div class="content">
                            <h2>03 KEY TAKEAWAYS</h2>

                            <div className="container">

                                <div className="item left">
                                    <p className="mb-xl">Overall this project was a success, providing a hands-on experience in managing complex UIs by breaking them into manageable components. I also learned how passing data between components using state and props can create interactive solutions.</p>
                                </div>
                                
                                <div className="item center center-text">
                                    <h4>In the future, I plan to enhance this app by integrating APIs to offer more customization options for wallpapers and fonts. There is a possibility of exploring other features such as a to-do-list for task tracking, various alarm sounds for the pomodoro timer, and dynamic spotify playlists that users can upload.</h4>
                                </div>

                            </div>
                            
                         
                        </div>

                        <BottomNavigation projectName={"MY MORI"} link = "/mymori" direction = "previous"/>

                
                </section>
            

          </main>
        </>
        
    )




}
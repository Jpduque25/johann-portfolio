// import linkedinHomepg from './assets/homepg-linkedinlearning.png';
import buildstrongHomepg from './assets/homepg-buildstrong.mp4';
import linkedinHomepg from './assets/homepg-linkedinlearning.png';
import mymoriHomepg from './assets/homepg-myMori.gif';
import flowspaceHomepg from './assets/homepg-flowspace.gif';
import tacohavenHomepg from './assets/homepg-tacohaven.gif';
import inmHomepg from './assets/homepg-inm.gif';
import brandguide from './assets/homepg-brandguide.png';


// Create an array that contains objects each representing a portfolio project, with properties that describe the project. The card component will obtain the data from this file, therefore making it dynamic 

export const projectCard = [
    {
    id: 0,
    mediaType : "video",
    image : buildstrongHomepg,
    alt: "BuildStrong Card Image",
    title: "BUILDSTRONG",
    description : "Manage and lead the project to improve user engagement and make UI changes",
    path: "/buildstrong",
    size: "large",
    },

    // Placeholder project, swap in real media, copy, and path when ready
    {
    id: 1,
    mediaType : "image",
    image : brandguide,
    alt: "Brand Guidelines Card Image",
    title: "LIFEGUARD BRAND GUIDELINES",
    description : "Created the company's first brand guideline, aligning design, messaging, and tone across departments to build trust and approachability",
    path: "/brandguidelines",
    size: "small",
    },

    {
    id: 2,
    mediaType : "image",
    image : linkedinHomepg,
    alt: "Linkedin Project Card Image ",
    title : "LINKEDINLEARNING",
    description : "Led a UX research study with the objective of creating a positive learning space and boosting user satisfaction" ,
    path: "/linkedinlearning",
    size : "large",
    }, 

    {
    id: 3,
    mediaType : "image",
    image : inmHomepg,
    alt: "INM Project Card Image", 
    title : "INM",
    description : "A student app that informs, engages, and fosters community" ,
    // tags : ["Figma", "UX/UI"],
    path: "/inm",
    size : "small",
    }, 

    {
    id: 4,
    mediaType : "image",
    image : flowspaceHomepg,
    alt: "Flowspace Project Card Image", 
    title : "FLOW SPACE",
    description : "Built a customizable pomodoro timer to enhance productivity" ,
    // tags : ["Web Development", "UX/UI", "Typography"],
    path: "/flowspace",
    size : "small",
    }, 
    
  // {
    // id: 3,
    // mediaType : "image",
    // image : mymoriHomepg,
    // alt: "MyMori Project Card Image",
    // title : "MYMORI",
    // description : "A hackathon project centered on driving social impact",
    // // tags : ["Figma", "Wireframing", "Design Thinking", "User Research"],
    // path: "/mymori",
    // size : "small",
    // },

    // {
    // id: 5,
    // mediaType : "image",
    // image : tacohavenHomepg,
    // alt: "Tacohaven Project Card Image", 
    // title : "TACO HAVEN",
    // description : "Crafted a landing page, emphasizing design principles" ,
    // // tags : ["Web Design", "Development", "Brand Identity"],
    // path: "/tacohaven",
    // size : "small",
    // }, 
]
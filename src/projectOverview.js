import { figmaIcon } from "./assets/icons/icons.js";
import { htmlIcon } from "./assets/icons/icons.js";
import { sassIcon } from "./assets/icons/icons.js";
import { bootstrapIcon } from "./assets/icons/icons.js";
import { jsIcon } from "./assets/icons/icons.js";
// import { cssIcon } from "./assets/icons/icons.js";
import { reactIcon } from "./assets/icons/icons.js";

// Create an object containing different projects and details
const ProjectOverview = [
    {
        id : 1,
        title : "BuildStrong",
        timeline : "12 months", 
        disciplines: "Product Design, Graphic Design, Digital Marketing",
        tools: [figmaIcon],
        collaborators : ["CEO", "Project Manager","Software Engineer", "Subject Matter Experts"],
        description : "BuildStrong is a mental health and substance use application designed specifically for the construction and trades industry — a sector historically underserved by mental health resources. Developed in 2021 by Lifeguard in partnership with CIRP, the industry's leading experts, the app connects workers with support tools, resources, and educational content. In 2025, I joined the project with the objective of addressing a decline in user engagement since launch. This involved conducting user research, evaluating UX processes, and strategizing and launching marketing initiatives to expand the app's reach beyond its original union worker audience to workers across all trades.",

        
        url : [{name: "VIEW PROJECT" , url: "https://lifeguarddh.com/products/buildstrong/"}]


    }
    ,

    {
        id : 2,
        title : "LinkedinLearning",
        timeline : "8 Weeks",
        disciplines: "UX Design",
        tools: [figmaIcon],
        collaborators : ["Henry Cheung", "Julie Chan", "Oskar Tsang"],
        description : "LinkedinLearning, previously (lynda.com) is a popular learning platform that has an extensive selection of courses that guide students in learning and improving the skills needed in the workforce. They leverage their employment-focused social platform Linkedin with their e-learning services, giving users the advantage to network and follow industry professionals. With a comprehensive selection of courses and credible professionals this is a great choice for learners. However with it being a subscription service, and an apparent decline in user satisfaction, there may be others that find value in other learning platforms.",

    },

     {   
        id : 3,
        title : "Institute of New Media",
        timeline : "4 Weeks",
        disciplines: "UX Design",
        tools: [figmaIcon],
        collaborators : ["Henry Cheung", "Chloe Kang", "Julie Chan", "Nicola Lee"],
        description : "Students tend to rely on campus websites to complete student tasks, however because of the amount of information provided, it might feel intimidating for students to find the resources they require. Students are being navigated to multiple pages throughout the campus domain, which can result in confusion and high bounce rates. There is also a disconnect with students as there aren’t many social media outlets specifically catered to students.",
    },

    {
        id : 4,
        title : "MyMori",
        timeline : "2 Days",
        disciplines: "UX Design",
        tools: [figmaIcon],
        collaborators : ["Henry Cheung", "Selene Choi", "Julie Chan"],
        description : "There has been an increase in social anxiety over the years which could be due to environmental factors, personal traits, childhood experiences, and brain chemistry due in part to social media. This issue has created discomfort and fear for those who have difficulty expressing themselves. We wanted to tackle this topic by creating an experience that allows users to express and share their thoughts, making it come to fruition with the assistance of AI tools to generate an immersive and thoughtful virtual forest.",
        url : [{name: "VIEW PROJECT" , url: "https://devpost.com/software/mymori"}]

    },

    {
        id : 5,
        title : "Flow Space",
        timeline : "9 Weeks",
        disciplines: "Front-end Web Development",
        tools: [reactIcon, jsIcon, sassIcon],
        description : "Flow app is an interactive web application with the intent of increasing productivity by utilizing time tracking methods. As this is my first React app, the purpose of this project is to showcase my proficency in using React JS to make a comprehensive focus app.",
        url : [{name : "VIEW SITE" , url :"https://flowspace.jpduque.com/"} , { name : "GITHUB", url: "https://github.com/Jpduque25/flowspace.git"}]

    },

    {
        id : 6,
        title : "TacoHaven",
        timeline : "2 Weeks",
        disciplines: "Front-End Web Development",
        tools: [htmlIcon, sassIcon, bootstrapIcon, jsIcon, figmaIcon],
        description : "The purpose of this project was to explore my skills as a designer and web developer, utilizing industry tools to accomplish this project. Tackling this project as if I was working for a client, the main challenge was how to establish brand-identity and create a site that promotes the restaurants food and services.",
        url : [{name: "VIEW SITE" , url: "http://tacohaven.jpduque.com/"}]

    },

    // {
    //     id : 6,
    //     title : "Smart TV UI Redesign",
    //     timeline : "1 Week",
    //     disciplines: "UX Design",
    //     tools: {figmaIcon},
    //     description : "A design of a Smart TV UI utilizing design principles, making it user-friendly and intuitive.",
        
    // },

]

export default ProjectOverview;
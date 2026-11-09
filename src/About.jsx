import profilePhoto from './assets/about-assets/profile-photo.jpg';
import AboutHead from './components/SEO/AboutHead';
import ExperienceCard from './components/ExperienceCard';


// Page content, edit these lists to update the page
const experience = [
    {
        years: "2024 - present",
        company: "Lifeguard Digital Health",
        role: "Product Designer & Digital Marketing",
        description: "Redesigned a mobile application to enhance user experience while aligning with the visual identity of the company's flagship product.",
    },
    {
        years: "2024",
        company: "Haletale",
        role: "Web Designer",
        description: "Designed a booking form website using CRM tools to streamline the booking process and connect potential clients.",
    },
    {
        years: "2024",
        company: "Pashmotors",
        role: "UX/UI Design Intern",
        description: "Created a roadmap and implement redesign changes to enhance the current web application on all platforms.",
    },
    {
        years: "2023",
        company: "Wafflehacks",
        role: "Hackathon",
        description: "AI-powered app that aims to encourage those who struggle with expressing their thoughts and emotions.",
    },
];

const tools = [
    { title: "Software", tags: ["Figma", "Illustrator", "Photoshop", "Premiere Pro", "Lightroom", "Webflow", "Blender" , "After Effects" ,"Wordpress"]},
    { title: "Key Skills", tags: ["Product Design", "UX Research", "Branding & Identity", "Motion Graphics", "Web Design"] },
    { title: "Development Tools", tags: ["HTML", "CSS", "Javascript","Claude", "ChatGPT", "Github"] },
];

const education = [
    { school: "BCIT", program: "New Media Design & Web Development" },
    { school: "Google", program: "UX Design Professional Certificate - Google" },
];


export default function AboutMe(){

    return(
        <>
            <AboutHead/>
            <main className="about-page">

                <section className="about-intro">
                    <div className="about-photo">
                        <img src={profilePhoto} alt="Portrait of Johann" />
                    </div>

                    <div className="about-bio">
                        <h2>About me</h2>
                        <p>I’m a product designer based in Vancouver, BC, working in the health tech sector.</p>
                        <p>I design product experiences, from UI/UX to design systems, blending them with brand and marketing campaigns for a more cohesive product.</p>
                        <p>I’m always curious about learning new tools, from AI automation to motion and 3D, and finding ways to bring that to my professional and creative work.</p>
                    </div>
                </section>


                <section className="about-section">
                    <h5 className="about-label">Experience</h5>

                    <ul className="about-list">
                        {experience.map((job) => (
                            <ExperienceCard key={job.company} {...job} />
                        ))}
                    </ul>
                </section>


                <section className="about-section">
                    <h5 className="about-label">Tools</h5>

                    <div className="about-tools">
                        {tools.map((group) => (
                            <div key={group.title} className="about-tool-group">
                                <div className="about-tool-heading">
                                    <h3>{group.title}</h3>
                                    <span className="about-divider" aria-hidden="true"></span>
                                </div>

                                <ul className="about-tags">
                                    {group.tags.map((tag) => (
                                        <li key={tag} className="about-tag">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="about-section">
                    <h5 className="about-label">Education</h5>

                    <ul className="about-list">
                        {education.map((item) => (
                            <li key={item.school} className="about-row">
                                <h3 className="about-row-title">{item.school}</h3>
                                <span className="about-row-detail card-text">{item.program}</span>
                            </li>
                        ))}
                    </ul>
                </section>

            </main>
        </>
    )
}

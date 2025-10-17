// Import images 
import  {projectBanner}  from "../data2";


export default function ProjectBanner({projectTitle, projectDescription,projKey}){
    return(
        <>
            <section className = "projectbanner">

                <div className ="banner-text">
                    <h1>{projectTitle}</h1>
                    <p>{projectDescription}</p>
                </div>

                <div>
                    <img className = "banner-image" src= {projectBanner[projKey]}/>
                </div>

            </section>
       
        </>
    )

}
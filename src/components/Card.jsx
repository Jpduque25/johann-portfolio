
import { useNavigate } from "react-router-dom";
import arrowButton from  '../assets/home-assets/arrow-button.png';

// Object destructuring to destructure first parameter
export default function Card({alt, image, mediaType = "image", title, description, path, className}){
    const navigate = useNavigate();

    return(

        <div className = {`card-component ${className}`}>
            <div  onClick = {() => navigate(path)} style = { {cursor: "pointer"}}>


                <div className="project-image">
                    {mediaType === "video" ? (
                        <video
                        src={image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        />
                    ) : (
                        <img src={image} alt={alt} />
                    )}
                </div>

            

                <div className="project-frame">
                    <div className="left">
                        <div className="title-text">
                            <h2>{title}</h2>
                        </div>

                        <div className="proj-description">
                            <p>{description}</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className = "button">
                            <img src= {arrowButton} alt="" />
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )

}
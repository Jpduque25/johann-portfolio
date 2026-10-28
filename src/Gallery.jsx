
import Masonry from 'react-masonry-css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import  {autotrace, connexionEnterprise, inmMockup, neoTokyo, neonHorizon, userProfileAppUI, courtShotTalk, beautyintheBeholder, smartUI, buttonAnimation} from './assets/gallery-assets/gallery-assets'

import GalleryHead from './components/SEO/GalleryHead'


export default function Gallery(){

    const galleryEl = useGSAP();

    useGSAP(()=> {
        gsap.from(
            ".grid-item" , {
                opacity: 0,
                duration: 1.25,
                ease: "power2.inOut",
                stagger: 0.25
            }

        )
    }, {scope : galleryEl});
    

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    
    return(
        <>
            <GalleryHead/>
            <main ref= {galleryEl} class = "gallerybg">

                <div className="text-container">
                    <div class="heading">
                        {/* <div className="text-block">
                            <h1> <span class="color">A digital space that captures moments of creativity, challenge, and growth in my journey as a designer.</span></h1>
                        </div> */}
                    </div>

                </div>
        
                <Masonry
                breakpointCols = {breakpoints}
                className = "my-masonry-grid"
                columnClassName= "my-masonry-grid_column"
                >

                    {/* Insert Partner portal video  */}

                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} className = "grid-item">
                    <iframe
                        src="https://www.youtube.com/embed/0ti9oAisFRI?si=wy3Ch1IYrbGSUy_d"
                        title="LifeguardPortal™"
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
                </div>
                

                {/* <div className="grid-item">
                    <div className="media-wrapper">
                        <video
                        src={buttonAnimation}
                        autoPlay
                        loop
                        muted
                        playsInline
                        />
                    </div>
                    <h5>MOTION GRAPHICS - Button Animation</h5>
                </div> */}


           
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} className = "grid-item">
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
                    <h5>MOTION GRAPHICS & VIDEO EDITING - BuildStrong™</h5>

                </div>

                
                
                <div className="grid-item">
                    <img src= {autotrace} alt="Autotrace website redesign" />
                    <h5>AUTOTRACE - Website Redesign</h5>

                </div>

                <div className="grid-item">
                    <img src= {connexionEnterprise} alt="Connexion Enterprise website redesign" />
                    <h5>CONNEXION ENTERPRISE - Website Redesign</h5>

                </div>

                <div className="grid-item">
                    <img src= {inmMockup} alt="INM prototype" />
                    <h5>INM - Single Page Prototype</h5>

                </div>

                <div className="grid-item">
                    <img src= {neoTokyo} alt="Graphic Design Poster" />
                    <h5>Graphic Design</h5>

                </div>

                <div className="grid-item">
                    <img src= {neonHorizon} alt="Graphic Design Poster" />
                    <h5>Graphic Design</h5>

                </div>

                <div className="grid-item">
                    <img src= {courtShotTalk} alt="Court Shot Talk page mockup" />
                    <h5>COURT SHOT TALK - Single Page Mockup</h5>

                </div>

                <div className="grid-item">
                    <img src= {beautyintheBeholder} alt="Graphic Design Poster" />
                    <h5>Graphic Design</h5>

                </div>

                </Masonry>
            </main>
        </>

    )
}
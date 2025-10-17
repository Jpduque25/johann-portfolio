
import Masonry from 'react-masonry-css'
import  {aevaFitness, autotrace, connexionEnterprise, inmMockup, neoTokyo, neonHorizon, userProfileAppUI, courtShotTalk, beautyintheBeholder, smartUI} from './assets/gallery-assets/gallery-assets'

import GalleryHead from './components/SEO/GalleryHead'


export default function Gallery(){

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    
    return(
        <>
            <GalleryHead/>
            <main class = "gallerybg">

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
                <figure>BUILDSTRONG - 3D motion graphics</figure>

                </div>


                <div className="grid-item">
                    <img src= {aevaFitness} alt="Aeva fitness app mockup" />
                    <figure>AEVA FITNESS - App Mockup</figure>
                </div>

                <div className="grid-item">
                    <img src= {autotrace} alt="Autotrace website redesign" />
                    <figure>AUTOTRACE - Website Redesign</figure>

                </div>

                <div className="grid-item">
                    <img src= {connexionEnterprise} alt="Connexion Enterprise website redesign" />
                    <figure>CONNEXION ENTERPRISE - Website Redesign</figure>

                </div>

                <div className="grid-item">
                    <img src= {inmMockup} alt="INM prototype" />
                    <figure>INM - Single Page Prototype</figure>

                </div>

                <div className="grid-item">
                    <img src= {neoTokyo} alt="Graphic Design Poster" />
                    <figure>Graphic Design</figure>

                </div>

                <div className="grid-item">
                    <img src= {neonHorizon} alt="Graphic Design Poster" />
                    <figure>Graphic Design</figure>

                </div>

                <div className="grid-item">
                    <img src= {courtShotTalk} alt="Court Shot Talk page mockup" />
                    <figure>COURT SHOT TALK - Single Page Mockup</figure>

                </div>

                <div className="grid-item">
                    <img src= {beautyintheBeholder} alt="Graphic Design Poster" />
                    <figure>Graphic Design</figure>

                </div>

                </Masonry>
            </main>
        </>

    )
}
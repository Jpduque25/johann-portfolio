
import Masonry from 'react-masonry-css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Children, useState } from 'react';
import  {autotrace, connexionEnterprise, inmMockup, myMori, neonHorizon, courtShotTalk, beautyintheBeholder, smartUI, buttonAnimation, lifeguardLiteShowcase, lifeguardLiteMockup4, lifeguardPrintMaterial, pitchNPutt, streetMural, floatingConvenience, cnTower, forestCanyon} from './assets/gallery-assets/gallery-assets'

import GalleryHead from './components/SEO/GalleryHead'


// Filter tags, each grid-item's data-category matches one of these ids
const tags = [
    { id: "all", label: "All" },
    { id: "digital-design", label: "Digital Design" },
    { id: "video-editing", label: "Video Editing" },
    { id: "ui-ux-design", label: "UI/UX Design" },
    { id: "photography", label: "Photography" },
]


export default function Gallery(){

    const galleryEl = useGSAP();
    const [activeTag, setActiveTag] = useState("all");

    useGSAP(()=> {
        gsap.from(
            ".grid-item" , {
                opacity: 0,
                duration: 1.25,
                ease: "power2.inOut",
                stagger: 0.15
            }

        )
    }, {scope : galleryEl, dependencies: [activeTag], revertOnUpdate: true});


    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    // Keep only the items in the selected category, Masonry then lays them out without gaps
    const filterItems = (items) =>
        Children.toArray(items.props.children).filter(
            (item) => activeTag === "all" || item.props["data-category"] === activeTag
        );


    return(
        <>
            <GalleryHead/>
            <main ref= {galleryEl} class = "gallerybg">

                <div className="text-container">
                    <div class="heading">
                        <div className="text-block">
                            <h1>GALLERY</h1>

                        </div>
                    
                    </div>

                </div>

                <div className="gallery-tags">
                    {tags.map((tag) => (
                        <button
                            key = {tag.id}
                            type = "button"
                            className = {`tag ${activeTag === tag.id ? "active" : ""}`}
                            aria-pressed = {activeTag === tag.id}
                            onClick = {() => setActiveTag(tag.id)}
                        >
                            {tag.label}
                        </button>
                    ))}
                </div>

                <Masonry
                breakpointCols = {breakpoints}
                className = "my-masonry-grid"
                columnClassName= "my-masonry-grid_column"
                >
                {filterItems(<>

                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} className = "grid-item" data-category="video-editing">
                    <iframe
                        src="https://www.youtube.com/embed/0ti9oAisFRI?si=wy3Ch1IYrbGSUy_d"
                        title="LifeguardPortal™ Launch Video"
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


                 <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} className = "grid-item" data-category="video-editing">
                    <iframe
                        src="https://www.youtube.com/embed/CeeZuX7Hflc?si=Naf_xqvVrCOcEZSz"
                        title="LifeguardPortal™ Training Video"
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


                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} className = "grid-item" data-category="video-editing">
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


                <div className="grid-item" data-category="digital-design">
                    <img src= {lifeguardPrintMaterial} alt="LifeguardLite product features poster" />
                    <h5>LIFEGUARDLITE - Print Materials</h5>

                </div>


                <div className="grid-item" data-category="video-editing">
                    <div className="media-wrapper">
                        <video
                        src={lifeguardLiteShowcase}
                        autoPlay
                        loop
                        muted
                        playsInline
                        />
                    </div>
                    <h5>LIFEGUARDLITE - 3D Product Showcase</h5>
                </div>


                <div className="grid-item" data-category="ui-ux-design">
                    <div className="media-wrapper">
                        <img src={myMori} alt= "mymori app redesign"/>
                    </div>
                    <h5>MYMORI - hackathon UI design</h5>
                </div>

                   <div className="grid-item" data-category="digital-design">
                    <img src= {pitchNPutt} alt="Annual Pitch N' Putt 2026 illustration" />
                    <h5>Graphic Design</h5>

                </div>


                <div className="grid-item" data-category="ui-ux-design">
                    <img src= {autotrace} alt="Autotrace website redesign" />
                    <h5>AUTOTRACE - Website Redesign</h5>

                </div>

                <div className="grid-item" data-category="ui-ux-design">
                    <img src= {connexionEnterprise} alt="Connexion Enterprise website redesign" />
                    <h5>CONNEXION ENTERPRISE - Website Redesign</h5>

                </div>

                <div className="grid-item" data-category="ui-ux-design">
                    <img src= {inmMockup} alt="INM prototype" />
                    <h5>INM - Single Page Prototype</h5>

                </div>


                <div className="grid-item" data-category="digital-design">
                    <img src= {neonHorizon} alt="Graphic Design Poster" />
                    <h5>Graphic Design</h5>

                </div>

                <div className="grid-item" data-category="ui-ux-design">
                    <img src= {courtShotTalk} alt="Court Shot Talk page mockup" />
                    <h5>COURT SHOT TALK - Single Page Mockup</h5>

                </div>

                <div className="grid-item" data-category="digital-design">
                    <img src= {beautyintheBeholder} alt="Graphic Design Poster" />
                    <h5>Graphic Design</h5>

                </div>



                <div className="grid-item" data-category="digital-design">
                    <img src= {lifeguardLiteMockup4} alt="LifeguardLite device 3D render" />
                    <h5>LIFEGUARDLITE - 3D Mockup</h5>

                </div>






                <div className="grid-item" data-category="photography">
                    <img src= {streetMural} alt="Street scene with a Mona Lisa mural" />
                    <h5>Photography</h5>

                </div>

                <div className="grid-item" data-category="photography">
                    <img src= {floatingConvenience} alt="Floating convenience store on the lake" />
                    <h5>Photography</h5>

                </div>

                <div className="grid-item" data-category="photography">
                    <img src= {cnTower} alt="CN Tower against the sky" />
                    <h5>Photography</h5>

                </div>

                <div className="grid-item" data-category="photography">
                    <img src= {forestCanyon} alt="Forest canyon with a river below" />
                    <h5>Photography</h5>

                </div>

                </>)}

                </Masonry>
            </main>
        </>

    )
}

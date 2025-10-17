import { Helmet } from "react-helmet";

export default function InmHead(){
    return(
        <Helmet>
            {/* Title & Meta */}
            {/* <title>INM(Institute of New Media) | A UX Design case study</title> */}

            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta 
                name ="description" 
                content = "A portfolio project about a student application for an Institute of New Media."
            />

            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-WY0B42VLNZ"></script>
            <script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-WY0B42VLNZ');
                `}
            </script>

    
            {/* <!-- Open Graph Meta Tags --> */}
            <meta 
                property="og:title" 
                content="Institute of New Media (INM) | A UX Design project to create a student application purposed for providing tools and resources to excel in university" 
            />
            <meta 
                property="og:description" 
                content="A UX/UI design project creating a reliable student application for accessing university information, course tools, and upcoming events" 
            />
            <meta property="og:image" content="https://johannduque.com/img/inm-banner.png" 
            />
            <meta property="og:type" content="website" 
            />
        </Helmet>

    )


}
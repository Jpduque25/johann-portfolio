import { Helmet } from "react-helmet";


export default function TacohavenHead(){
    return(
        <Helmet>
            {/* Title & Meta */}
            {/* <title>Taco Haven | A web design and development project</title> */}

            {/* Title & Meta */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta 
                name ="description" 
                content = "Designing and developing a website using web technologies." 
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
                content="Taco Haven | a stunning web design and front-end development project showcasing modern web technologies" 
            />
            <meta 
                property="og:description" 
                content="Explore a dynamic web development and design project showcasing my expertise in HTML, JavaScript, CSS, and jQuery" 
            />
            <meta 
                property="og:image" 
                content="https://johannduque.com/img/Tachohaven-banner.png" 
            />
            <meta property="og:type" content="website" />

        </Helmet>  
    );
}

import { Helmet } from "react-helmet";

export default function HomeHead(){

    return(
        <Helmet>
            {/* Title & Meta */}
            {/* <title>Johann Duque | UX Designer & Front-end Web Developer</title> */}
            
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta
                name="description"
                content="The home page of Johann Duque's portfolio. A quick overview of his projects."
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

            {/* Open Graph Meta Tags */}
            <meta name="keywords" content="portfolio, ux design, web design, figma, creative work, development, coding, product designer"
            />
            <meta name="author" content="Johann Duque"
            />
            <meta property="og:title" content="Johann Duque's UX Design and Development Portfolio"
            />
            <meta property="og:description" content="Johann Duque's portfolio illustrating his experience as a UX Designer and Front-end Web Developer"
            />
            <meta property="og:image" content="https://johannduque.com/img/banner-img.png"
            />
            <meta property="og:url" content="https://johannduque.com/index.html"
            />
            <meta property="og:type" content="website"
            />
        </Helmet>
    );
}
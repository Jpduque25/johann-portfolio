import { Helmet } from "react-helmet";

export default function GalleryHead(){
    return(
    <Helmet>
      {/* Title & Meta */}
        {/* <title>Johann Duque | Gallery</title> */}

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta 
            name ="description" 
            content = "The home page of Johann Duque's portfolio. A quick overview of his projects."/>


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
        <meta property="og:title" content="A Creative Designer's Portfolio | Personal and Professional Projects"
        />

        <meta property="og:description" content="A gallery that demonstrates my passion as a creative"
        />

        <meta property="og:image" content="../img/mypfp.jpg"
        />

        <meta property="og:url" content="https://johannduque.com/gallery.html"
        />

        <meta property="og:type" content="website"
        />
    </Helmet>

    )

}
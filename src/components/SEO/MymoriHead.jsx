import { Helmet } from "react-helmet";

export default function MymoriHead(){
  return (
    <Helmet>
      {/* Title & Meta */}
      {/* <title>MyMori | A UX Design Hackathon Challenge</title> */}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="A portfolio project showcasing a hackathon experience with group members tackling mental health and creating immersive experiences."
      />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WY0B42VLNZ" />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WY0B42VLNZ');
        `}
      </script>

   
      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="MyMori | UX Design Hackathon Challenge Focused on creativity and expression"
      />
      <meta
        property="og:description"
        content="A portfolio project showcasing a hackathon experience with group members tackling mental health and creating immersive experiences"
      />
      <meta property="og:image" content="https://johannduque.com/img/mymori-banner.png" 
      />
      <meta property="og:type" content="website" 
      />
    </Helmet>
  );


}
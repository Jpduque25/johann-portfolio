import { Helmet } from "react-helmet";

export default function AboutHead() {
  return (
    <Helmet>
      {/* Title & Meta */}
      {/* <title>About me | Skills, experience, and hobbies</title> */}
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="A more in-depth look at the creator of this portfolio and his personal interests and hobbies."
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
      <meta
        property="og:title"
        content="About Me | Designer's Background, Experience, and Interests"
      />
      <meta
        property="og:description"
        content="An in-depth description of myself, what inspires me as a designer and the work-experience I have as a digital designer"
      />
      <meta
        property="og:image"
        content="https://johannduque.com/img/mypfp.jpg"
      />
  
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

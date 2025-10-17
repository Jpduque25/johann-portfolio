import { Helmet } from "react-helmet";


export default function LinkedinHead(){
  return (
    <Helmet>
      {/* Title & Meta */}
      {/* <title>LinkedinLearning | A UX Design case study</title> */}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="A case study on improving elearning experiences for LinkedinLearning users"
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
        content="LinkedIn Learning UX Case Study | Improving E-Learning User Satisfaction and Reducing Bounce Rates"
      />
      <meta
        property="og:description"
        content="A UX Design Case Study showcasing the pertaining issues of e-learning platforms and the solutions to improve bounce rates and user satisfaction"
      />
      <meta
        property="og:image"
        content="https://johannduque.com/img/linkedin-banner.png"
      />
  
      <meta property="og:type" content="website" />
    </Helmet>
  );



}
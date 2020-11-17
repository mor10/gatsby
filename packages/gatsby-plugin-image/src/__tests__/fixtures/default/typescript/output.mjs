import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
export const Hero = ({
  children
}) => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "banner.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FLUID)
    }
  }
}
`);
  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="A panorama of Skara Brae, Orkney" style={{
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1
  }} />;
};
export default Hero;

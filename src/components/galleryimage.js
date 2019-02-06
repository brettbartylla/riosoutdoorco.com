import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

 


const GalleryImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(relativePath: { eq: "gallery/IMG_0006.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: { eq: "gallery/IMG_0476.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3: file(relativePath: { eq: "gallery/IMG_0483.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image4: file(relativePath: { eq: "gallery/IMG_0498.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image5: file(relativePath: { eq: "gallery/IMG_0526.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image6: file(relativePath: { eq: "gallery/IMG_0533.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image7: file(relativePath: { eq: "gallery/IMG_0534.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image8: file(relativePath: { eq: "gallery/IMG_0542.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageA: file(relativePath: { eq: "gallery/1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageB: file(relativePath: { eq: "gallery/2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }        
        imageC: file(relativePath: { eq: "gallery/3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageD: file(relativePath: { eq: "gallery/4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageE: file(relativePath: { eq: "gallery/50.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageF: file(relativePath: { eq: "gallery/6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageG: file(relativePath: { eq: "gallery/7.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageH: file(relativePath: { eq: "gallery/8.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageI: file(relativePath: { eq: "gallery/9.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageJ: file(relativePath: { eq: "gallery/10.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imagek: file(relativePath: { eq: "gallery/52half_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }

  
      imagel: file(relativePath: { eq: "gallery/musky491.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    `}
    render={data => 
      <div className="grid-cont">
          <Img fluid={data.image3.childImageSharp.fluid} />
          <Img fluid={data.image4.childImageSharp.fluid} />
          <Img fluid={data.image5.childImageSharp.fluid} />
          <Img fluid={data.image6.childImageSharp.fluid} />
          <Img fluid={data.image8.childImageSharp.fluid} />
          <Img fluid={data.imageI.childImageSharp.fluid} />
          <Img fluid={data.imageJ.childImageSharp.fluid} />
          <Img fluid={data.imageA.childImageSharp.fluid} />
          <Img fluid={data.imageB.childImageSharp.fluid} />
          <Img fluid={data.imageC.childImageSharp.fluid} />
          <Img fluid={data.imageD.childImageSharp.fluid} />
          <Img fluid={data.imageE.childImageSharp.fluid} />
          <Img fluid={data.imageF.childImageSharp.fluid} />
          <Img fluid={data.imageG.childImageSharp.fluid} />
          <Img fluid={data.imageH.childImageSharp.fluid} />
          <Img fluid={data.image1.childImageSharp.fluid} />
          <Img fluid={data.image2.childImageSharp.fluid} />
          <Img fluid={data.imagek.childImageSharp.fluid} />
          <Img fluid={data.imagel.childImageSharp.fluid} />
          
      </div>
    }
  />
)
export default GalleryImage

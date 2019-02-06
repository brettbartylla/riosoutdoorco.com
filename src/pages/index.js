import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/headerimage'
import Logo from '../components/logo'
import styled from 'styled-components'
import youtubeImg from '../images/youtubeImg1.jpg'
import instaImg from '../images/insta.jpg'

const IndexPage = () => (
  <Layout>
    <div className="home" style={{ height: '100vh' }}>
      
      <div className="bg-wrapper">
        <BgImage />
      </div>
      
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <ParallaxContent>
        <h3>CONNECT</h3>
        <Grid>

          <a href="https://www.youtube.com/channel/UCs1-3_NnSHCpn9WZdDJIVeg/featured">
            <div className="img-container">

              <img src={youtubeImg} className="img-btn"/>
              
              <div className="overlay">
              </div>

              <div className="text">
                YOUTUBE
              </div>
            </div>
          </a>

          <a href="https://www.instagram.com/riosoutdoorco/">
            <div className="img-container">

              <img src={instaImg} className="img-btn"/>
              
              <div className="overlay">
              </div>

              <div className="text">
                INSTAGRAM
              </div>
            </div>
          </a>

        </Grid>
      </ParallaxContent>
     
    </div>
  </Layout>
)

export default IndexPage

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' 
  }
`

const LogoWrapper = styled.div `
  width: 24%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0;
  margin-left:37%;
  margin-top:5%;
  @media all and (max-width: 736px) {
    margin-top:50%;
    margin-left: 33%;
    width: 38%;
  }
`;

const ParallaxContent = styled.div `
  background-color:#fff;
  margin-left:20%;
  margin-right:20%;
  text-align:center;
  h4{
    color:#fff;
  }

  
`;

const Grid = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 35px;

    img {
        max-width: 100%;
    }
    @media only screen and (min-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
    }
    /* Bigger than Phones(laptop / desktop) */
    @media only screen and (min-width: 970px) {
        grid-template-columns: repeat(2, 1fr);
    }

    a{
      color:#fff;
      display:block;
      text-decoration:none;
    }
`;
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import GalleryImages from '../components/galleryimage'

const Gallery = () => (
  <Layout>  

    <div className="gallery" style={{
        marginTop:'65px',
    }}>
        <Grid>
            <GalleryImages/>
        </Grid>
        <a href="https://www.instagram.com/riosoutdoorco/">VIEW MORE ></a>
    </div>

  </Layout>
)

export default Gallery


const Grid = styled.div`
    .grid-cont{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 10px;
        grid-auto-rows:450px 450px;
    }
    img {
        
    }
    
    @media only screen and (min-width: 750px) {
        .grid-cont{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-gap: 10px;
            grid-auto-rows:450px 450px;
        }
    }

    /* Bigger than Phones(laptop / desktop) */
    @media only screen and (min-width: 970px) {
        .grid-cont{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-gap: 10px;
            grid-auto-rows:620px 450px;
            grid-auto-flow:dense;
        }
    }
`;



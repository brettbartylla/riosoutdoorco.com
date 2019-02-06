import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const Videos = () => (
    <Layout>
        <div className="videos" style={{
            marginTop:'68px',
            marginLeft:'9px',
            marginRight:'9px'

        }}>
            <Grid>
                <div>        
                    <iframe src="https://www.youtube.com/embed/ApSW7kte1mw"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>        
                    <iframe src="https://www.youtube.com/embed/0dzf0ItKNxY"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>        
                    <iframe src="https://www.youtube.com/embed/TSerXlmapOY"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>        
                    <iframe src="https://www.youtube.com/embed/edZMHhdbcVQ"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/ZbodwnhUihw"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>        
                    <iframe src="https://www.youtube.com/embed/xAMr2JzBpho" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>        
                    <iframe src="https://www.youtube.com/embed/uxLl1L4ldK0"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>        
                    <iframe src="https://www.youtube.com/embed/pNhP7OZPZDY"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>

            </Grid>
        </div>
       
    </Layout>

)


export default Videos;


const Grid = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;

    iframe{
        width:100%;
        height: 310px;
    }
    @media only screen and (min-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
    }

    /* Bigger than Phones(laptop / desktop) */
    @media only screen and (min-width: 970px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
import React from 'react'
import Layout from '../components/layout'

import merchImg from '../images/merch/merch.jpg'

const Merch = () => (
    <Layout>  

        <div className="gallery" style={{
            marginTop:'65px',
        }}>
        </div>
        <div id="merch">   
            <h1>Coming Soon</h1>
                <img class="merch-img" src={merchImg} alt="header" style={{
            }}/>
        
        </div>

    </Layout>
)

export default Merch

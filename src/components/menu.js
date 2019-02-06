import React from 'react'
import Link from 'gatsby-link'

const Menu = () =>(
    <div style={{
    }}>
        <ul id="desktop-nav" className="nav" style={{
            listStyle:'none',
            position:'fixed',
            background:'#000',
            margin:'0',
            top: 0,
            opacity:'.9'
        }}>
            <li class="menu-item"><Link class="link" to="/">Home</Link></li>
            <li class="menu-item"><Link class="link" to="/about">About</Link></li>
            <li class="menu-item"><Link class="link" to="/videos">Videos</Link></li>
            <li class="menu-item"><Link class="link" to="/gallery">Gallery</Link></li>
            <li class="menu-item"><a class="link" href="https://stores.thinkittheninkit.com/apparel/RiosOutdoorGear">Merch</a></li>
        </ul>

        <nav id="mobile-nav" role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <li class="menu-item"><Link class="link" to="/">Home</Link></li>
                    <li class="menu-item"><Link class="link" to="/about">About</Link></li>
                    <li class="menu-item"><Link class="link" to="/videos">Videos</Link></li>
                    <li class="menu-item"><Link class="link" to="/gallery">Gallery</Link></li>
                    <li class="menu-item"><a class="link" href="https://stores.thinkittheninkit.com/apparel/RiosOutdoorGear">Merch</a></li>
                </ul>
            </div>
        </nav>



    </div>

)


export default Menu;
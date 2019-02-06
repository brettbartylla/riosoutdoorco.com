import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import '../components/swiper.scss'
//images
import ario from '../images/about/ario2.jpg'
import vinny from '../images/about/vinny.jpg'
import adam from '../images/about/adam.jpg'
import neil from '../images/about/neil.jpg'
import dylan from '../images/about/dylan.jpg'
import luke from '../images/about/luke.jpg'
import jonah from '../images/about/jonah.jpg'
import steve from '../images/about/steve.jpg'

class Example extends React.Component {

    render() {

        const params = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            },
            pagination: {
              el: '.swiper-pagination',
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          };
  
      return(

        <Layout>
            <div className="gallery" style={{
                marginTop:'75px',
                width:'80%',
                marginLeft:'auto',
                marginRight:'auto',
            }}>

                <h1>Meet The Team</h1>

                <Swiper {...params}>
                    <div style={{
                        // backgroundColor:'black',
                    }}>
                    <Grid>
                        <div className="img-div">
                            <img src={ario}/>
                        </div>

                        <div className="text-div">
                            <h2>Ario Cognetta</h2>
                            <p>
                                <span className="bold-txt">Target Species: </span>Walleye, Musky, Bass
                            </p>
                            <p>
                                The man behind the brand. Ario started Rio's Outdoor Co. as a means to get like minded individuals together to experience and share their knowledge and passion for the great outdoors.
                                His passion for fishing first took hold at a young age, fishing small rivers and lakes near Elmwood, WI.
                                If you've fished with Ario before, you've more than likely heard him say "Geez, I swear they were biting yesterday". It's anybody's guess as to why that is. Could be due to his relentless bad luck or due to the fact that he really has no idea what he's doing. The choice is yours to make!
                            </p>
                        </div>
                    </Grid>
                    </div>

                    <div style={{
                        // backgroundColor:'black',
                    }}>
                        <Grid>
                            <div className="img-div">
                                <img src={vinny}/>
                            </div>

                            <div className="text-div">
                                <h2>Vinny Cognetta</h2>
                                <p>
                                <span className="bold-txt">Target Species: </span>Bass and Musky
                                </p>
                                <p>
                                    Vinny is a seasoned veteran when it comes to putting fish in the net. In fact, he's the one that really got his little brother (Ario) into fishing.
                                    Vinny takes pride in the technical side of fishing, developing an understanding of fish habits, movement, and tendencies. But don't let his poker face and fancy terminology fool you! Now, the closest water you'll find Vinny on is the back 9 of Clifton Hollow where you'll find him looking for his golf ball.
                                </p>
                            </div>
                        </Grid>
                        
                    </div>
                    <div style={{
                        // backgroundColor:'black',
                    }}>
                        <Grid>
                            <div className="img-div">
                                <img src={adam} />
                            </div>

                            <div className="text-div">
                                <h2>Adam Ruschmeyer</h2>
                                <p>
                                <span className="bold-txt">Target Species: </span>Walleye & Musky
                                </p>
                                <p>
                                    Another veteran on the team has been catching fish for as long as he can remember. I'm willing to bet that there isn't a body of water in Western Wisconsin that he hasn't fished! Adam's fishing buddies know him best for his "phantom" musky follows that nobody else ever see's or his vicious hook-sets into a giant rock humps which undoubtedly were "bites". Jokes aside, there's no doubt that this dude hammers fish!
                                </p>
                            </div>
                        </Grid>
                    </div>

                    <div style={{
                        // backgroundColor:'black',
                    }}>
                        <Grid>
                            <div className="img-div">
                                <img src={steve} />
                            </div>

                            <div className="text-div">
                                <h2>Steve Rieke</h2>
                                <p>
                                <span className="bold-txt">Target Species: </span>Walleye & Musky
                                </p>
                                <p>
                                Steve is by definition "A Jack Of All Trades". With the amount of time he's spent on the water or in the woods, this guy brings a TON of knowledge to the team. From chasing big whitetail, endless casting at those elusive 50" muskies or jumping birds with his dog Louie, Steve has the knowledge and tools to be successful in all things outdoors! However, some might think Steve's biggest passion is buying new gear and gadgets for his outdoor activities. With that said, one thing is certain - If we are placing bets on who gets to hop in Steve's boat, you can bet that I'm ALL IN!
                                </p>
                            </div>
                        </Grid>
                    </div>


                    <div style={{
                        // backgroundColor:'black',
                    }}>
                        <Grid>
                            <div className="img-div">
                                <img src={neil}/>
                            </div>

                            <div className="text-div">
                                <h2>Neal</h2>
                                <p>
                                <span className="bold-txt">Target Species: </span>Musky
                                </p>
                                <p>
                                    Neal is as hardcore as they come when comes to musky fishing. In fact, this dude even has a musky tattoo on his............leg. (Where did you think I was going with that? Get your mind out of the gutter!) He's also clutch when comes to playing DJ in the boat and capturing sweet video on his GoPro. What more can I say other than he's a good fisherman and even better dude!
                                </p>
                            </div>
                        </Grid>
                    </div>
                    <div style={{
                        // backgroundColor:'black',
                    }}>
                        <Grid>
                            <div className="img-div">
                                <img src={dylan} />
                            </div>

                            <div className="text-div">
                                <h2>Dylan</h2>
                                <p>
                                <span className="bold-txt">Target Species: </span>Musky
                                </p>
                                <p>
                                    Don't let that mustache fool you, Dylan is one of the young bucks on the team. He's mostly known for losing things like his wallet, phone, girls phone numbers, etc. but one thing is certain, when he's hooked up, he doesn't lose that fish! Great guy to have on the team. He'll even buy you prime rib dinner for taking him out fishing.
                                </p>
                            </div>
                        </Grid>
                    </div>
                    <div style={{
                        // backgroundColor:'black',
                    }}>
                        <Grid>
                            <div className="img-div">
                                <img src={jonah} />
                            </div>

                            <div className="text-div">
                                <h2>Jonah</h2>
                                <p>
                                <span className="bold-txt">Target Species: </span>Anything that bites
                                </p>
                                <p>
                                    Jonah most commonly catches sunburn. When he's not applying SPF 3000 on his delicate skin, he enjoys performing fake hook sets and other miscellaneous pranks in the boat. One day he'll end up hooking into a musky and nobody will believe him to grab the net, which will ultimately come down to him losing the fish of a lifetime.
                                </p>
                            </div>
                        </Grid>
                    </div>
                    <div style={{
                        // backgroundColor:'black',
                    }}>
                        <Grid>
                            <div className="img-div">
                                <img src={luke}/>
                            </div>

                            <div className="text-div">
                                <h2>Luke</h2>
                                <p>
                                <span className="bold-txt">Target Species: </span>Walleye & Musky
                                </p>
                                <p>
                                    Luke is a good ol fashion River Rat. He spends most of his days on the St. Croix or the backwaters of the Mississippi in search of that elusive 30" walleye which usually results in losing about $30 worth of jigs and other lures. However, if you invite this guy in the boat, there's no doubt that he'll catch a giant! 
                                </p>
                            </div>
                        </Grid>
                    </div>




                </Swiper>
            </div>
        </Layout>
      )
    }
  }
  
  export default Example;

  const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 20px;


  .img-div{

  }
  img {
      width: 100%;
      padding-top:23px;
  }
  @media only screen and (min-width: 750px) {
    .text-div{
      padding-right:0;
    }
    grid-template-columns: repeat(1, 1fr);
      
  }

  /* Bigger than Phones(laptop / desktop) */
  @media only screen and (min-width: 970px) {

    grid-template-columns: 35% 1fr;
      .text-div{
      padding-right:110px;
    }
      
  }
`;





// const params = {

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//       },

//     effect: 'cube',
//     grabCursor: true,
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94
//     },

// };
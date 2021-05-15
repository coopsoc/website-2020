import React from "react";

// 2021 Team Images
import Kenuka_Image from './img/2021_exec/Kenuka.jpg'
import Celine_Image from './img/2021_exec/Celine.jpg'
import Kai_Image from './img/2021_exec/Kai.jpg'
import Connor_Image from './img/2021_exec/Connor.jpg'
import Micah_Image from './img/2021_exec/Micah.jpg'
import Jasmin_Image from './img/2021_exec/Jasmin.jpeg'
import Hirun_Image from './img/2021_exec/Hirun.jpeg'
import Keshmira_Image from './img/2021_exec/Keshmira.jpg'
import Claire_Image from './img/2021_exec/Claire.jpg'
import Jack_Image from './img/2021_exec/Jack.jpg'
import Noa_Image from './img/2021_exec/Noa.jpg'
import Miah_Image from './img/2021_exec/Miah.jpg'
import Ronaldo_Image from './img/2021_exec/Ronaldo.jpg'

// 2020 Team Images
import Jelinna_Image from './img/2020_exec/Jelinna.jpg'
import Roary_Image from './img/2020_exec/Roary.jpg'
import Shrey_Image from './img/2020_exec/Shrey.jpg'
import Xavier_Image from './img/2020_exec/Xavier.jpg'
import Ian_Image from './img/2020_exec/Ian.png'
import Stanley_Image from './img/2020_exec/Stanley.jpeg'
import Hayes_Image from './img/2020_exec/Hayes.jpeg'
import Emily_Image from './img/2020_exec/Emily.png'
import Lelland_Image from './img/2020_exec/Lelland.jpeg'
import Susan_Image from './img/2020_exec/Susan.jpg'
import Vincent_Image from './img/2020_exec/Vincent.jpg'

// Fas Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faDesktop, faDove, faEdit, faUserFriends } from "@fortawesome/free-solid-svg-icons";

// Timeline
import Slider from '@material-ui/core/Slider'
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Team() {

    function valuetext(value) {
        return `${value}`;
    }

    const [year, setYear] = React.useState(2021)

    const useStyles = makeStyles({
        root: {
          width: 100,
        },
      });

      const CustomSlider = withStyles({
        root: {
          color: '#64a19d',
          height: 8,
          width: '70%',
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      })(Slider);

      
      const years = [
        {
          value: 0,
          label: "2020",
        },
        {
          value: 100,
          label: '2021',
        }
      ];

      const valueToYear = {
        0: "2020",
        100: "2021",
      };

      const handleYear = (year) => {
        setYear(year);
      };

    function renderYear() {
        if (year == "2021") {
            return team_2021()
        } else {
            return team_2020()
        }
        
    }

    function team_2021() {
        return (
            <>
            <section class="about-section text-center bg-white pb-sm-5">
            <div class="container">
                
                <br></br>
                <h2 class="about-responsive-heading pb-md-4">Executives</h2>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Kenuka_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    Stepping into the role of President, my ultimate goal is to foster a strong community full of everlasting friendships and life-long memories by overseeing all facets of the society. I want to enhance the cohesion of Co-op Soc by ensuring that the incoming 2021 first-years feel welcomed into the Co-op family, and by also increasing the involvement of third and fourth years. Overall, despite what 2021 throws at us, get keen for a good time!
                                </p>    
                                <p>
                                   What are the three things on the top of your bucket list? Travel to every continent, meet Tom Holland, and buy my parents a house.
                                </p> 
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Kenuka Wijayatunga</h4>
                            <p class="about-role">President</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Celine_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    My biggest goal stepping into this position is to facilitate the creation of long lasting memories and aid the development of the strongest community in UNSW - the co-op family. Not only does this entail running fantastic, consistent events and overseeing an online presence, but it also involves ensuring a key support network is maintained and all voices are heard, not just within the Executive team but throughout the society.
                                </p>
                                <p>
                                    What are some of your hobbies/interests? Brunch, baking, online shopping hehe, podcasts and reading!! PLS feel free to send me book recs I am always in need :))
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Celine Goh</h4>
                            <p class="about-role">Vice President</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Kai_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    My number one goal is to make sure everyone is included in Co-op Soc. As secretary, it is my duty to ensure that communication occurs not only quickly and effectively, but also that it reaches each and every member. My vision is to not only maintain the society’s health, but to help grow the Co-op community as a whole by keeping track of our historical records, meetings, goals, plans, contact with external organisations, members, and events to name a few!
                                </p>
                                <p>
                                    Favourite quote of all time? “One often meets his destiny on the road he took to avoid it” - Master Oogway

                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Kai Mashimo</h4>
                            <p class="about-role">Secretary</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Connor_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    Holistically, I would like to utilise my role to further advance the Co-op family, facilitating strong friendships and unforgettable memories for all. Moreover, I hope to ensure a robust financial position into the future, building upon the work of previous treasurers so as to increase the society’s assets and lay the platform for continued development. I will also be working closely with Claire to organize the first-year buddy program, with my vision being the cultivation of stronger connections between cohorts.
                                </p>
                                <p>
                                    What are some of your hobbies/interests? Football, food (mostly eating it), late night beach runs, beating Jack Yin in chess (5 times in a row)

                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Connor Pilger</h4>
                            <p class="about-role">Treasurer</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Micah_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    As the Arc Delegate, my goal is to maintain positive communication with Arc and secure all Arc-associates resources. I will actively update and manage the SpArc page for our society with events, reimbursements and forms, I also plan to liaison with Arc to secure on-campus venues and equipment for Co-op soc events whilst following Arc guidelines when hosting team / general meetings and during administrative changes. 
                                </p>
                                <p>
                                    What is your favourite quote of all time? “Iiit iiiis what it iiiis” 

                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Micah Wang</h4>
                            <p class="about-role">Arc Delegate</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <h2 class="about-responsive-heading pb-md-4 pt-md-5">Directors</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Jasmin_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    Over the coming year, my main goal is to cultivate and strengthen the bonds within the Co-op community. Specifically as Social Director, I aim to create, organise and deliver events which can facilitate the building of strong connections and unique memories between the members of the society. I am hoping to organise amazing events that have been run before but also bring new unique events which, holistically, are suited to the diverse group of Co-op society members.                                
                                </p>
                                <p>
                                    What are some of your hobbies/interests? Waking up at 6am, friendship bracelet making, tik tok, talking to people, pole vaulting and watching sunsets. 
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Jasmin Oren</h4>
                            <p class="about-role">Events</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Hirun_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    For 2021, with Kesh, I aim to create an environment where co-ops are provided with a multitude of opportunities to make an impact outside of the corporate world and inside the wider community. In order to achieve this, we will be providing you all with events supporting a range of impactful charities as well as our own initiatives which not only allow co-ops a chance to give back, but also bring us all closer together as we do so.                                 
                                </p>
                                <p>
                                    What is your favourite quote of all time? “We didn't realise we were making memories, we just knew we were having fun” - Winnie the Pooh
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Hirun Bandara</h4>
                            <p class="about-role">Charity</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Keshmira_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    Along with Hirun, my goal as Charity Director for 2021 is to create exciting opportunities for all co-ops to give back to the community. By partnering with various charities and running exciting events, I want to help us make a tangible difference in the lives of others, whilst also bringing our co-op family closer through the spirit of giving.
                                </p>
                                <p>
                                    What’s your favourite Netflix show to binge currently? How I Met Your Mother – legendary show ;) 
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Keshmira Vijayan</h4>
                            <p class="about-role">Charity</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Claire_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    My overarching goal for this year is to enrich and enhance the connections within the Co-op community. I believe that the uniqueness of our society lies in our ability to foster tight-knit friendships within each cohort. However, my vision is for closer connections to be knitted not only within cohorts but across cohorts as well. With my position as marketing director, I hope to use the power of social media to reach out to every member and facilitate long-lasting relationships between a diverse range of people, creating valuable memories and a truly unique community.
                                </p>
                                <p>
                                    What are some of your hobbies/interests? Hmmm food, food, and food. Oh and dragonboating and languages and travelling. But mostly food :)
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Claire Xue</h4>
                            <p class="about-role">Marketing</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Jack_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    As the Publications Director, it is my vision to continue to develop and facilitate the UNSW Co-op Society’s online presence through its existing avenues - LinkedIn and the website - as well as new and emerging - potentially Instagram and monthly newsletters. To avoid stale writing and allow multiple perspectives, a substantial goal of mine is to co-lead a combined Pubs/IT Subcom - the first of its kind for our society.                                
                                </p>
                                <p>
                                    What are the three things on the top of your bucket list? Eat at the top 5 buffets in the world, ski in Europe (literally anywhere), beat Connor Pilger and/or Celine Goh and/or literally anyone in chess
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Jack Yin</h4>
                            <p class="about-role">Publications</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Noa_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    Over the following year as IT Director, I’m hoping to cultivate the society’s online presence, channelling my creativity and love for tech into the Co-op Soc website. I’m looking forward to co-leading the first Pubs/IT Sub-committee as Jack and I strengthen the partnership between our two roles, introducing Co-op Soc Instagram and monthly newsletters. I’m also planning to introduce a new way to create and display blog posts from within the website.                                
                                </p>
                                <p>
                                    What are the three things on the top of your bucket list? See Harry Styles in concert, eat Bibimbap in South Korea and learn to parallel park!
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Noa Challis</h4>
                            <p class="about-role">IT</p>
                        </div>
                    </div>
                </div>
                <h2 class="about-responsive-heading pb-md-4 pt-md-5">First Year Representatives</h2>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Miah_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    As a first year representative, I aim to represent the interests of the 2021 Co-op Soc cohort and forge stronger connections between our cohort and the Co-op Soc Executive team. Our responsibilities involve creating and distributing the 2021 Co-op merchandise, as well as contributing to planning events throughout the year. Ultimately, I hope that we are able to create opportunities for our cohort to grow closer together and make the most of their experience within Co-op.
                                </p>
                                <p>
                                    3 things on my bucket list: write a famous film score, meet Phillip Lowe from the RBA, and get my Ps
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Miah Panovrakos</h4>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Ronaldo_Image} class="card-img-top"></img>    
                            <div class="meet-the-execs-text">
                                <p>
                                    As one of the First Year Representatives, my duty is to connect our cohort with the Co-op Executives across a range of events. We are also responsible for designing the 2021 Co-op merchandise and making everyone look amazing! As time goes on, I hope that we get the privilege to call each and every Co-op scholar our second family.
                                </p>
                                <p>
                                    Fun facts about me? I lived in Shanghai for 14 years and love basketball, hot pot and entrepreneurial education!                            
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Ronaldo Keng</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section text-center bg-white pb-sm-5">
            <div class="container subcom">
                <h1 class="about-responsive-heading pb-sm-4">The Committee</h1>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faDove} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Charity</h4>
                            <p class="card-text subcom-desc">
                                The Charity portfolio seeks to create awareness, raise funds and drive social change for charities. The committee also compliments the Social portfolio in hosting fun events for a great cause.                             
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Alannah Darling</li>
                                <li class="list-group-item border-0 li-name">Mridul Pant</li>
                                <li class="list-group-item border-0 li-name">Tiana Vincent</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                    <FontAwesomeIcon className="Dove" icon={faBullhorn} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Marketing</h4>
                            <p class="card-text subcom-desc">
                                The marketing portfolio focuses on creating continued engagement with our Co-op Society Facebook platform. Via the creation of digital marketing content, all students are encouraged to participate in fulfilling social events.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Emily Ross</li>
                                <li class="list-group-item border-0 li-name">Himanshu Singh</li>
                                <li class="list-group-item border-0 li-name">Nala Hong</li>
                                <li class="list-group-item border-0 li-name">Nicole Huang</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faEdit} size="4x" style={{margin: '10px'}}/>
                        <FontAwesomeIcon className="Dove" icon={faDesktop} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Publications/IT</h4>
                            <p class="card-text subcom-desc" >
                                This year, our society has combined the Publications and IT iteams in order to take advantage of the many synergies that exist between the two portfolios. The combined Pubs/IT portfolio is responsible for continuing to develop and facilitate the society's online presence through new and existing avenues, as well as occassional standalone publications such as the First Year Guide.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Annie Yan</li>
                                <li class="list-group-item border-0 li-name">Hanyuan Li</li>
                                <li class="list-group-item border-0 li-name">Rohan Agarwal</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faUserFriends} size="4x" />
                        <div class="card-body text-center">
                            <h4 class="about-name">Social</h4>
                            <p class="card-text subcom-desc">
                                The team is responsible for organising our social calendar, including planning, developing and executing a core suite of events. They ensure all members are given the opportunity to be a part of this vibrant community, through the creation and maintenance of social groups.                             
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Isabella Fang</li>
                                <li class="list-group-item border-0 li-name">Jessica Degeling</li>
                                <li class="list-group-item border-0 li-name">Palaash Rawat</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }

    function team_2020 () {
        return (
            <>
            <section id="about" class="about-section text-center bg-light pb-md-5">
            <div class="container">
                <h2 class="about-responsive-heading pb-md-4">Executives</h2>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                        <img src={Jelinna_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    Stepping into the role of President, not only did I want to be the leader who oversees the events and logistics that happen ‘behind the scenes’; I wanted to act as a key support network for not only the executive members on the team but also those in the society as well- ensuring that the goals and voices of the co-op community were being heard and considered. 
                                    Outside of the society, my interests primarily include volunteering, cooking and creating banger spotify playlists.
                                </p>                                        
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Jelinna Wang</h4>
                            <p class="about-role">President</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Roary_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    I decided to run for Vice President in order to channel my inner Nigel: the fun-loving guy who can bring a room together and give warm welcomes to everyone coming into Co-op Society. Seeing the first-years enjoy camp so much and create long-lasting memories and friendships honestly filled me with joy; it was definitely one of my biggest goals stepping into this position. It’s quite sad that we’ve been kept at home this term, but I’m looking forward to seeing you all in person again, and continuing to facilitate a friendly and fun environment
                                    Some of my hobbies include playing guitar, decorating my apartment, and going out with friends/family.
                                        
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Roary Xu</h4>
                            <p class="about-role">Vice President</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Shrey_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    “You can run the office without a boss, but you can't run an office without secretaries”
                                </p>
                                <p>
                                    I honestly believe that organisation is a staple to running any society. I applied to be secretary so that I could help be the backbone of the society. Along the way I’ve helped develop the teams’ communication abilities further, whilst simultaneously increasing my ability to work in and lead a team.  My goal is to have everyone working together as a tightly oiled machine, and so far it’s been pretty good!!                          
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Shrey Somaiya</h4>
                            <p class="about-role">Secretary</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Xavier_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    Over the year as treasurer I have sought to consistently reduce costs associated with events whilst continuing to improve engagement and attendance. Coming from a shaky financial position previously, gaining a reasonable buffer fund for the society has been my main priority for the past term. My goal is to make a total accrual profit for the year of $1000.
                                </p>
                                <p>
                                    Outside of the society, my interests lie in general macroeconomics, football, piano, and a variety of games.
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Xavier Crowley</h4>
                            <p class="about-role">Treasurer</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Ian_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    Coming into the Arc Delegate position, I knew I wanted to do more than becoming a communicator and a signature collector. I wanted to be able to give incoming co-ops the welcoming family experience I received from the society last year. 
                                    I stepped forward to help organise the buddy program to make sure that new scholars would make a strong connection right off the bat with people in the year above them.
                                </p>
                                <p>
                                    My interests outside the society include basketball, netflix, finding new songs on Spotify and cooking. I do a little bit of coding too.
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Ian Ng</h4>
                            <p class="about-role">Arc Delegate</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <h2 class="about-responsive-heading pb-md-4 pt-md-5">Directors</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Stanley_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    Social director and all-round LIFO. The aim for this year was to help y'all work hard, play hard. With COVID-19 in our systems, I’ve tried to help Co-op play hard, whether it be games over zoom, getting inebriated over zoom or finding love over zoom, I wanted to replicate that feeling of in person connection. Once COVID-19 is over, my goal is to throw a term you’ll never forget.              
                                </p>
                                <p>
                                    Outside of Co-op I spend most of my time filming/editing, climbing/running and looking for the next best road trip/adventure.
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Stanley Chen</h4>
                            <p class="about-role">Events</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Hayes_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    As a Charity co-director I wanted to highlight the philanthropic side of Co-op Soc that our members tend to forget. Given that we’re a privileged bunch, it’s important we give back to the community, and these acts of kindness don’t have to be boring! We’ve already fundraised through the World’s Greatest Shave and started a new case comp initiative to help small charities. Later on we hope to run in the City2Surf and hold our much-anticipated Poker Night.
                                </p>
                                <p>
                                    Some of my hobbies include yakult soju, blueberry soju, strawberry soju, green grape soju, peach soju, pineapple soju and watermelon soju.                                
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Hayes Choy</h4>
                            <p class="about-role">Charity</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Emily_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    Coming into the Charity Director role, my goal was to organise fun events that allow Co-ops to volunteer first-hand and give back to the community - to do good and feel good. We’ve had the opportunity to hold some great events, such as our upcoming online Case Comp partnering with a real charity to help them tackle a very real issue in our society. Looking forward to launching some of our planned events when in-person activities resume! 
                                </p>
                                <p>
                                    Outside of Co-op Soc my interests include reading, catching up on some Netflix and most importantly, creating Spotify playlists for pretty much every occasion.
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Emily Kasovska</h4>
                            <p class="about-role">Charity</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Lelland_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    Being a marketing director has allowed me to be more creative in the way the society presents itself. 

                                    I think that having a strong presence in how we promote ourselves can help us establish us as a better society and engage more Co-ops with events.                              
                                </p>
                                <p>
                                    Things I like to do outside University include most sports, Videography, going to church and concerts.
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Lelland Hui</h4>
                            <p class="about-role">Marketing</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Susan_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    As the publications director, my vision is to develop the society’s online presence through the introduction of published articles on our new platform that is the Co-op Soc website. I hope that by establishing a friendly blog environment, these features can inform, amuse and provoke thought in the wider community.
                                </p>
                                <p>
                                    Society role aside, I enjoy baking, playing badminton, reading autobiographies and sketching in my spare time.
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Susan Sun</h4>
                            <p class="about-role">Publications</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Vincent_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    I came into this role because I wanted to express my creativity and create a website that people would be willing and keen to use. I hope to make something that future Co-op Society members as well as alumni will continue to visit and find out more about how Co-ops are doing and what changes take place from year to year.
                                </p>
                                <p>
                                    Outside of the society, I enjoy watching the NBA, binge watching shows and taking/editing photos.
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Vincent Chen</h4>
                            <p class="about-role">IT</p>
                        </div>
                    </div>
                </div>
                <h2 class="about-responsive-heading pb-md-4 pt-md-5">First Year Representatives</h2>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Celine_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    As one of two First Year Representatives, I’ve had the opportunity to represent the Co-op Soc 2020 cohort, and function as a channel of communication between us and the Executive Body. My goals stepping into this role were to contribute effectively to the smooth running of the society and actively engage with my cohort, and throughout the year I’ve had the privilege to work on the 2020 Co-op Soc merchandise line, as well as learn from the current executive body.                   
                                </p>
                                <p>
                                    Outside the society, I enjoy baking for friends and watching (trashy) TV.   
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Celine Goh</h4>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="meet-the-execs">
                            <img src={Kenuka_Image} class="card-img-top"></img>
                            <div class="meet-the-execs-text">
                                <p>
                                    As one of this year’s First Year Representatives, my role has been to bridge the gap between the 2020 Co-op Soc First Year cohort and the Co-op Soc Executive team. I’ve strived to play an active role in the society by engaging with my cohort and working to design and distribute the 2020 Co-op Soc merchandise. After seeing how tightly-knit the second year cohort were, my main goal has been to foster a similar environment and make Co-op Soc a second family for my year.
                                </p>
                                <p>
                                    In my free time, my interests lie in playing cricket, watching movies and TV shows and dabbling in the saxophone.                                
                                </p>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h4 class="about-name">Kenuka Wijayatunga</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section text-center bg-white pb-sm-5">
            <div class="container subcom">
                <h1 class="about-responsive-heading pb-sm-4">The Committee</h1>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faBullhorn} size="4x"/>
                        <div class="card-body text-center">
                            <h4 class="about-name">Marketing</h4>
                            <p class="card-text subcom-desc">
                                The marketing portfolio focuses on creating continued engagement with our Co-op Soc Facebook platform. Via the creation of digital marketing content, all students are encouraged to participate in fulfilling social events.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Hayley Gayfer</li>
                                <li class="list-group-item border-0 li-name">Claire Xue</li>
                                <li class="list-group-item border-0 li-name">Piper Workman</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faUserFriends} size="4x" />
                        <div class="card-body text-center">
                            <h4 class="about-name">Social</h4>
                            <p class="card-text subcom-desc" >
                                The team is responsible for organising our social calendar, including planning, developing and executing a core suite of events. They ensure all members are given the opportunity to be a part of this vibrant community, through the creation and maintenance of social groups.                             
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Noa Challis</li>
                                <li class="list-group-item border-0 li-name">Felicity Chan</li>
                                <li class="list-group-item border-0 li-name">Jasmin Oren</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8">
                        <FontAwesomeIcon className="Dove" icon={faDove} size="4x" />
                        <div class="card-body text-center">
                            <h4 class="about-name">Charity</h4>
                            <p class="card-text subcom-desc">
                                This portfolio seeks to create awareness, raise funds and drive social change for charities. The Charity subcommittee also compliments the Social portfolio in hosting fun events for a great cause.                             
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card-body text-center">
                            <ul class="list-group">
                                <li class="list-group-item border-0 li-name"><b>Members:</b></li>
                                <li class="list-group-item border-0 li-name">Hirun Bandara</li>
                                <li class="list-group-item border-0 li-name">Jack Yin</li>
                                <li class="list-group-item border-0 li-name">Keshmira Vijayan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

            
        )
    }

    return (
    <>
        <div id="mainNav"></div>

        <header class="masthead-pubs">
            <div class="container d-flex h-100 align-items-center">
              <div class="mx-auto text-center">
                <h1 class="mx-auto my-0 text-uppercase">MEET THE TEAM</h1>
              </div>
            </div>
          </header>

            
            <CustomSlider
                defaultValue={year}
                valueLabelFormat={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                onChange={(_, value) => handleYear(valueToYear[value])}
                marks={years}
            />
            {renderYear()}
            

      </>

  );
}

export default Team;
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

function Team() {
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

        <section id="about" class="about-section text-center bg-light pb-md-5">
            <div class="container">
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

  );
}

export default Team;
import React from "react";
import {useState} from "react";
import fyg from './img/fyg.jpg'
import connected from './img/connected.jpg'
import placement from './img/placement.jpg'

import Checkin_Image from './img/pubs/checkin.png'
import Kahoot_Image from './img/pubs/kahoot.png'

function StayingConnected() {

  return (
    <>
        <div id="mainNav"></div>
        <header class="masthead-pubs">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">Publications</h1>
                </div>
            </div>
        </header>

        <section id="publications" class="publications-section bg-light pb-md-4">
        <div class="container pb-md-4">
            <h1 class="display-5 text-center">
                Social Distancing Without the Socially Distant
            </h1>
            <p class="text-center"><em>
                Written by Publications Director Susan Sun        
            </em></p>
            <p>
                COVID-19 has been a challenging period for everyone; whilst it is essential that we all practice social distancing to slow the spread of the virus, the lack of face-to-face interaction we experience in our daily lives resultantly sees the increase of stress in a time of significant uncertainty. In such a situation, it is even more important that we stay connected with our family, friends, colleagues, and leaders. The Co-op Society has strived to continue as an avenue of social support for the community, with issues raised in regards to how we facilitate our society events on an online platform, as well as maintaining productivity when working from home.
            </p>
        </div>
        </section>

        <section id="publications" class="publications-section bg-white pb-md-4">
        <div class="container pb-md-4">
            <h2 class="display-5 text-left">
                Frequent Check-ins
            </h2>
            <p class="text-left"><mark>
                “Hey, what have you been up to? Have you been doing ok?”
            </mark></p>
            <div class="row">
                <div class="col-sm-6">
                    <p>
                        In such a socially distant time, maintaining communication with work teams, friends and other relationships is vital. As the world pivoted to working from home, Marketing scholar Michelle is exceptionally grateful to be at a company equipped with the necessary technology resources to make this transition quickly and effectively. Some strategies she has personally undertaken to ensure open and clear communication at work include “Making a conscious effort to discuss work projects through video call instead of email, which makes a BIG difference to work productivity and also provides social connection!” 
                    </p>
                    <p>
                        Checking up on your team regularly by scheduling meetings on Google Chat, Whatsapp or other online platforms “daily instead of weekly”, as Data Science and Decisions scholar Laurel suggests, reduces the distance we feel navigating life at home. End of quarter trivia nights on Kahoot, virtual morning coffee catch-ups or online cards for birthdays are another great way to strengthen a sense of community.
                    </p>
                </div>
                <div class="col-sm-6">
                    <img src={Checkin_Image} class="img-fluid float-right"  style={{width: '100%'}} ></img>
                </div>
            </div>
        </div>
        </section>

        <section id="publications" class="publications-section bg-light pb-md-4">
        <div class="container pb-md-4">
            <h2 class="display-5 text-left">
                Staying Informed But Not Too Informed
            </h2>
            <p>
                It can be difficult to find the balance between keeping up to date with life, and feeling overwhelmed by the barrage of information conveyed through various media outlets. I’m one to immediately click on the most recent news stream, but I’ve been trying to reduce my intake of all the bleakness, economic and political upheaval happening globally as it can take a toll on my mental health. Whilst it is important to maintain an awareness of the current global climate, taking the time out of my day to “switch off” (badum tss) is much needed too.
            </p>
        </div>
        </section>

        <section id="publications" class="publications-section bg-white pb-md-4">
        <div class="container pb-md-4">
            <div class="row">
                <div class="col-sm-6 text-center">
                    <img src={Kahoot_Image} class="img-fluid" style={{width: '80%'}} ></img>
                </div>
                <div class="col-sm-6">
                    <h2 class="display-5 text-left">
                        New Possibilities
                    </h2>
                    <p>
                        Here at Co-op Soc, our team has risen to the challenge of being exceptionally creative in hosting online events. As a student society, some activities we’ve looked at are online podcasts, movie nights, Spotify music countdowns, game streamings and challenge events, just to name a few. The ways in which we traditionally delivered our society goals have been completely upturned, but with our engagement levels as high as ever, we’re incredibly excited about the endless horizon of new possibilities that have been able to be facilitated via Zoom and social media (TikTok in particular, of which I have been unashamedly obsessed with lately).         
                    </p>
                </div>
            </div>
            
        </div>
        </section>

        <section id="publications" class="publications-section bg-light pb-md-4">
        <div class="container pb-md-4">
            <h2 class="display-5 text-left">
                Contingency Planning
            </h2>
            <p>
                Being flexible to change is something the Executive team have been motivated to do. We have continued working on the key messages, events and actions we want to achieve when this period is over; although, we have been met with numerous challenges, particularly regarding the supply and production of our new merchandise. Thus in a time of such change, contingency plans have been helpful in allowing us to adapt quickly when obstacles arise.        
            </p>
        </div>
        </section>
        
            
        
      </>

  );
}

export default StayingConnected;
import React from "react";
import {useState} from "react";

import Modal from 'react-responsive-modal'
import Roary_Image from './img/2020_exec/Roary.jpg'
import Stanley_Image from './img/2020_exec/Stanley.jpeg'
import Emily_Image from './img/2020_exec/Emily.png'
import Lelland_Image from './img/2020_exec/Lelland.jpeg'
import Amex_Image from './img/pubs/amex.png'
import AMP_Image from './img/pubs/amp.jpg'
import PWC_Image from './img/pubs/pwc.jpg'
import CocaCola_Image from './img/pubs/coca-cola.jpg'

function PlacementExp() {

    const [modalOpen, setModalOpen] = useState(false)

    const onOpenModal = () => {
        setModalOpen(true)
    };
    const onCloseModal = () => {
        setModalOpen(false)
    };

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
            <h1 class="display-4 text-center pb-md-4">
                Industry Placement Experiences
            </h1>
            <p class="text-center">
                Read about each 2020 Exec's experience in their placements, and use their tips and tricks to get yourself prepared!
            </p>
            <div class="row justify-content-center pb-md-4">
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                    <img class="card-img-top" src={Roary_Image}></img>
                    <div class="card-body">
                        <h5 class="card-title">Roary Xu</h5>
                        <p class="card-text">
                            Stream: BIS19 <br />
                            Placement: AMP Limited
                        </p>

                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#roary">
                            Read
                        </button>

                        <div class="modal fade" id="roary" tabindex="-1" role="dialog" aria-labelledby="roary" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="text-center"><img src={AMP_Image} class="img-fluid"  style={{width: '15rem'}}></img></div>
                                <div class="modal-body">
                                    <h2 class="card-title">What's the first industry placement like?</h2>
                                    <p class="modal-text">
                                        I'm Roary, I’m currently spending my first placement in the SIAM (Service Integration and Management) department at AMP.
                                    </p>
                                    <p class="modal-text">
                                    One great thing about placement is that whilst your agreement may put you in a certain team or role, it is up to you to seek experiences in whatever you are interested in, and since this placement is my first, I was interested in everything. This advice was given to me by a few mentors, so I reached out and am now working on 3 separate projects in different teams across our department, providing me with a helpfully wholistic view of SIAM as originally I had no clue what it even stood for.
                                    </p>
                                    <p class="modal-text">
                                    My original assignment is with the Strategy team, in which we’re currently in the design stage of delivering a technical strategy. We’ve had countless workshops together as we gathered around whiteboards in meeting rooms, defining the scope of our strategy and the best ways to implement it with the resources we have available. Don’t fall for the stereotypes of seclusion in working in technology; it can be very enjoyably interpersonal and collaborative.
                                    </p>
                                    <p class="modal-text">
                                    However, I was also very interested in improving my technical skills during placement, and so I volunteered to take interim ownership of our department’s configuration database. With no previous experience, I’ve had to learn both on my own as well as by seeking help from experts on how to operate its several nuances; a challenge for sure, but I can appreciate the knowledge and experience it brings.
                                    </p>    
                                    <p class="modal-text">
                                    Finally, my favourite initiative at AMP is leading an uplift of our team’s culture. Our new team basketball tournament was very successful and surprisingly competitive, however considering the current circumstances, we’re now enjoying online Skribbl.io sessions.
                                    </p>
                                </div>

                                <div class="modal-body">
                                    <h2 class="card-title">
                                        What are some challenges you have encountered and how did you overcome them?
                                    </h2>
                                    <p class="modal-text">
                                        Whilst first placement is a great opportunity to jump into a whole new world of new experiences, I made the mistake of saying yes to every piece of work offered to me and ended up overloading myself with commitments (at one point I was on 5 different projects). This meant I found myself working overtime/taking work home several days of the week, which I decided was unsustainable and not something I wanted to continue.
                                    </p>
                                    <p class="modal-text">
                                        I reached out to mentors at work who told me this was a great lesson in managing the expectations of your managers, or better yet not getting yourself into this situation in the first place by knowing how much work you can/are willing to handle.
                                    </p>
                                    <p class="modal-text">
                                        The first step was to decide which projects I was most engaged in, and the value that I could both add and receive from each of them. This led me to pushing aside an administrative role which I felt I wasn’t getting much value from, as well as a role in Service Economics which I didn’t feel engaged in.
                                    </p>
                                    <p class="modal-text">
                                        The second step was to work out how to push back on these commitments, by communicating my situation in the right way to their managers and figuring out any necessary compromises. Overall, I now feel much more engaged and comfortable with my workload; however, this could all have been avoided had I understood my capacity from the start and said no.
                                    </p>    
                                </div>

                                <div class="modal-body">
                                    <h2 class="card-title">
                                        What are some ways you balance work, university and your social life?
                                    </h2>
                                    <p class="modal-text">
                                        One upside of working full-time is the structure it pushes into your life – 7am wakeups eventually began to feel normal rather than soul crushing. Having a significant chunk of your Monday to Friday committed to work leaves you with a much clearer indication of the time you have available for other things.                       
                                    </p>
                                    <p class="modal-text">
                                        I would say a balance is very achievable with timetabling skills and ascertaining what your priorities are, and therefore knowing what you would sacrifice.         
                                    </p>
                                </div>

                                <div class="modal-body">
                                    <h2 class="card-title">What’s the culture like at AMP?</h2>
                                    <p class="modal-text">
                                        To be honest, I would never have expected the people I work with to be so relatable, supportive, and fun to get along with. I’m lucky to be placed in the youngest team at AMP, with co-workers who grew up in the same generation with the same memes and culture – but the real surprise comes from how easy it is to talk to almost everyone else, too. This actually becomes fairly important when it comes to seeking help from senior employees and managers, as I’ve never felt any hesitation speaking up to them or asking questions – it feels perfectly natural to laugh at some of their attempts to draw a cat on Skribbl.io too.                      
                                    </p>  
                                    <p class="modal-text">
                                        Of course, there are a few people at work who I find to have personalities that are hard to agree with at times. The best advice I can give for this is to just expect it and take it as what it is.                      
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={Emily_Image}></img>
                        <div class="card-body">
                            <h5 class="card-title">Emily Kasovska</h5>
                            <p class="card-text">
                            Stream: ACC19 <br />
                            Placement: Coca-Cola Amatil
                            </p>

                            <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#emily">
                                Read
                            </button>

                            <div class="modal fade" id="emily" tabindex="-1" role="dialog" aria-labelledby="emily" aria-hidden="true">
                                <div class="modal-dialog modal-xl" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="text-center pb-md-4">
                                        <img src={CocaCola_Image} class="img-fluid"  style={{width: '12rem'}}></img>
                                    </div>
                                    <div class="modal-body">
                                        <h2 class="card-title">What's the first industry placement like?</h2>
                                        <p class="modal-text">
                                            I’m Emily Kasovska and I am a 2019 Accounting and Business Management Co Op Scholar. I’m currently undertaking my first industry placement at Coca Cola Amatil, working in Supply Chain Operations.                      
                                        </p>
                                        <p class="modal-text">
                                            I am extremely grateful to be in an area of accounting that is closely linked to the management accounting course I am studying at university, thus allowing me to apply the theoretical concepts I’ve learnt into a real work setting.
                                        </p>
                                        <p class="modal-text">
                                            My tasks are very diverse and are primarily completed on a monthly basis. This includes internal management reporting for scorecards/dashboards as well as cost variance analysis. I’ve also dabbled in working capital and capital project reporting as well as general accounting tasks such as posting journals and completing reconciliations. Many exciting ad hoc tasks and projects also arise within my role. 
                                        </p>
                                        <p class="modal-text">
                                            I was also fortunate enough to visit Amatil’s Eastern Creek warehousing site and the Northmead manufacturing plant. This was particularly useful for my role in Supply Chain; being able to connect my work from head office to the real operational sites was an exciting and enriching experience.  
                                        </p>    
                                    </div>

                                    <div class="modal-body">
                                        <h2 class="card-title">What's some advice you would give to students who have yet to begin their placements?</h2>
                                        <p class="modal-text">
                                            Take on the challenge! <br />
                                            This is an extremely valuable opportunity - it isn’t the stereotypical ‘intern’ role you see in movies so don’t expect to be doing coffee runs. You will be given meaningful tasks that make a real difference in your organisation so really give it your all. In fact, go even further! If you see or hear about a project you’re interested in, ask your manager if you can sit in on some meetings and get involved. 
                                        </p>
                                        <p class="modal-text">
                                            Be curious – ask WHY not just what! <br />
                                            I remember my first few weeks of induction going over tasks required in my role. Written process notes were usually handed over so what was most important to know was the WHY. Don’t get too stuck in the mechanical steps of a process – if you understand why you’re doing it and how it relates to other tasks/business units, you will gain far more knowledge and get much more out of it. 
                                        </p>
                                        <p class="modal-text">
                                            Learn from your mistakes! <br />
                                            Mistakes are inevitable. I came into my placement having completed only 2 accounting courses, so I was by no means an expert in the field.  I was exposed to many new accounting concepts and the business had their own unique processes I had to learn. Remember that you’re not expected to know everything. Don’t be embarrassed to ask for clarification or feedback from your manager – get the most out of this work experience. 
                                        </p>
                                    </div>

                                <div class="modal-body">
                                    <h2 class="card-title">
                                        What are some challenges you have encountered and how did you overcome them?
                                    </h2>
                                    <p class="modal-text">
                                        The greatest challenge I’ve had to overcome is the general unfamiliarity of it all – it’s my first time in an accounting role and in a corporation in general. Particularly during my first month, I had to deal with the fact that I didn’t really know how to complete certain tasks. I overcame this by asking lots of questions to clarify expectations. I am extremely grateful that my manager, colleagues and the general culture of CCA is really open and everyone is willing to offer a helping hand. 
                                    </p>
                                    <p class="modal-text">
                                        Recently with the COVID-19 circumstances however, I have been working from home with no manager or colleagues next to me when I have a quick question to ask. This has allowed me to become a bit more independent; trying to find a solution myself but knowing if ever needed, they are only one phone call away. 
                                    </p> 
                                </div>

                                <div class="modal-body">
                                    <h2 class="card-title">
                                        How are some ways you balance work, university and your social life?
                                    </h2>
                                    <p class="modal-text">
                                        There is a lot to juggle when you are on placement but it has taught me a key message; there are actually many hours of the day (if you plan well that is!)        
                                    </p>              
                                    <p class="modal-text">
                                        Don’t procrastinate (switch that phone off when you study!) Tutorials and class time have become so much more valuable – be prepared for class, have questions ready to go and utilise your tutors and peers.                       
                                    </p>
                                    <p class="modal-text">
                                        There’s always time for society involvement too! There are many events held outside of work hours that I attend. During my half day off work, I signed up to the Co-op Soc Social Sport Team - a great way to get some exercise while catching up with friends! 
                                    </p>
                                    <p class="modal-text">
                                        Don’t forget to allocate some time to your wellbeing too – a good night’s sleep has never been more important. Be refreshed and ready for the day ahead, every day!
                                    </p>
                                </div>

                                <div class="modal-body">
                                    <h2 class="card-title">
                                        In what ways have you seen yourself develop personally as well as technically?
                                    </h2>
                                    <p class="modal-text">
                                        My industry placement has been a key avenue for me to build my self-awareness. I have been able to identify not only what I do well, but most importantly what I could do better. 
                                    </p>  
                                    <p class="modal-text">
                                        My knowledge of accounting has stretched far more than the theoretical concepts we learn in class. By applying (and even learning new concepts along the way!), I’m becoming more confident in my accounting major.   
                                    </p>
                                    <p class="modal-text">
                                        My time management skills have also improved – learning how to reprioritise, especially when an ad hoc task urgently arises, is a valuable skill to have. My ability to balance all my work, study and other responsibilities has been another great life skill I continue to develop.
                                    </p>
                                    <p class="modal-text">
                                        And how could I forget my Excel skills? I went into my internship with no Excel experience. 4 months in, I am now not only confident in my Excel knowledge, but have been asked to create my own workbooks from scratch; improving on our processes/systems and showing off all the cool tricks I’ve picked up along the way.                    
                                    </p>
                                    <p class="modal-text">
                                        But of course there is always room for improvement and each day I develop more skills, both personally and professionally. I am ever so grateful for this opportunity - industry placement truly has been a rewarding and invaluable experience.                     
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={Stanley_Image}></img>
                        <div class="card-body">
                            <h5 class="card-title">Stanley Chen</h5>
                            <p class="card-text">
                                Stream: DSD19 <br />
                                Placement: PWC
                            </p>

                            <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#stanley">
                                Read
                            </button>

                            <div class="modal fade" id="stanley" tabindex="-1" role="dialog" aria-labelledby="stanley" aria-hidden="true">
                                <div class="modal-dialog modal-xl" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="text-center pb-md-0">
                                        <img src={PWC_Image} class="img-fluid" style={{width: '20rem'}}></img>
                                    </div>
                                    <div class="modal-body">
                                        <h2 class="card-title">What's the first industry placement like?</h2>
                                        <p class="modal-text">
                                            Hi, I’m Stanley, currently doing Data Science and working at PwC in Data Assurance. During my first few weeks I was given a share trading project where we used Alteryx to highlight individuals that were conducting suspicious trades. I was then assigned to an internal training job where I built an Alteryx workflow to determine who in the Data Assurance team needed training in various technical areas. 
                                        </p>
                                        <p class="modal-text">
                                            The current project I am on is a data migration reconciliation project. At its core, we are checking whether the data migration from one company to another was done correctly.
                                        </p>
                                    </div>

                                    <div class="modal-body">
                                        <h2 class="card-title">
                                            What are some challenges you have encountered and how did you overcome them?
                                        </h2>
                                        <p class="modal-text">
                                            A major challenge that I had experienced on placement was the inefficiency when co-operating with client data science teams. The first complication was a result of delayed communication on the client side subsequently delaying our work by a month or so. When resolving this issue, a heavy focus on efficient and clear communication with my manager and client were required to accelerate the process of receiving data.       
                                        </p>
                                        <p class="modal-text">
                                            The second complication was a personal one. Upon receiving the data, I was completely overwhelmed and struggled to comprehend the dozen excel tables that were presented to me. There was no shortcut to resolving this complication and I simply had to persevere and commit to trudging through all the data. The importance of getting hands on is undeniable, and in this case was the only way to move forward.                     
                                        </p> 
                                    </div>

                                    <div class="modal-body">
                                        <h2 class="card-title">
                                            What are some ways you balance work, university and your social life?
                                        </h2>
                                        <p class="modal-text">
                                            Limit your work to work hours. Whilst this may contrast your belief that working longer hours and spending more time on a project is beneficial to your corporate image, it is important to understand that unless you have a deadline to meet, the most efficient and time-conscious method is always preferred. Pay especially close attention to detail on your first go and always aim to complete a task in your first try. Undoubtedly this will not always work out in your favour, but the more accurate, precise and attentive you are when completing a task on your first attempt the faster you will complete all tasks.                     
                                        </p>
                                        <p class="modal-text">
                                            Aside from work, you have 16 extra hours in a day. I try to limit sleep to 6 hours leaving me with 10 to do something I enjoy. I find that the absolute limit is 5 extra-curriculars (at least for me) and I always try to spend at least a few hours every day socialising with friends whether it be on the way to/from work or a night out with work/uni mates. 
                                        </p>
                                        <p class="modal-text">
                                            Keep fit. Whether you like it or not, your mental health directly corresponds to your physical health. Find time every day to walk around the city during work. Whilst you might not be physically working on your projects, it increases productivity and helps you stay focused for when you are. Keep up with your social sports and hobbies, after all you have that extra 10 hours every day to do something you enjoy.
                                        </p>
                                    </div>

                                    <div class="modal-body">
                                        <h2 class="card-title">What’s the culture like at PWC?</h2>
                                        <p class="modal-text">
                                            The company culture at PwC is probably one of the best around. From consultants to partners, everyone is on a first name basis and the more effort you put into knowing everyone, the more you’ll enjoy going into work every day. Finding out what people are passionate about is also a great way to connect. 
                                        </p>  
                                        <p class="modal-text">
                                            During my time I found out that a few people enjoyed playing Super Smash Brothers Ultimate in their spare time, so we all brought controllers and a switch to play during our lunch breaks. Get to know your neighbour and your neighbour’s neighbour, because the more relationships you form the less stressed you will be. 
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={Lelland_Image}></img>
                        <div class="card-body">
                            <h5 class="card-title">Lelland Hui</h5>
                            <p class="card-text">
                                Stream: MKT19 <br />
                                Placement: American Express 
                            </p>
                 
                            <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#lelland">
                                Read
                            </button>

                            <div class="modal fade" id="lelland" tabindex="-1" role="dialog" aria-labelledby="lelland" aria-hidden="true">
                            <div class="modal-dialog modal-xl" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="text-center">
                                    <img src={Amex_Image} class="img-fluid pb-md-4"  style={{width: '15rem'}}></img>
                                </div>
                                <div class="modal-body">
                                    <h2 class="card-title">What's the first industry placement like?</h2>
                                    <p class="modal-text">
                                        Hi, I'm Lelland, and I'm currently doing my placement at American Express. I was quite overwhelmed with how the workplace was unlike any environment I have previously experienced. That was to be expected, however I really struggled to adapt to it in my first week. I talk about my experience with this a bit later in the publication, however my best advice to get over this initial environment change is being proactive. This means you should be eager to meet new people by introducing yourself first rather than waiting. 
                                    </p>
                                    <p class="modal-text">
                                        Furthermore, you should be actively taking on work and getting involved with things like office sport or events as much as you can. I believe that being proactive in meeting people has a big change on whether you enjoy your placement or not.                     
                                    </p>
                                </div>

                                <div class="modal-body">
                                    <h2 class="card-title">
                                        What are some challenges you have encountered and how did you overcome them?
                                    </h2>
                                    <p class="modal-text">
                                        One thing I found really challenging because it was my first IT placement was trying to fit into the workplace. The first day I just felt like everyone was so much older than I was and I wouldn't be able to really fit in with the rest of the office. I talked to a few older co-ops and they advised me that it generally takes a bit of time to start feeling more comfortable in the office. 
                                    </p>
                                    <p class="modal-text">
                                        However, I took it upon myself to get to know as many people as I could within the first few months and put myself out there. My first initiative was that every time I went to get tea and saw a person I didn't know, I would introduce myself. This was super scary but the more I did it the easier it became for me and it really helped me get out of my shell. After the first two months I eventually met at least one person from each team on a floor of 150 people and it helped me settle in.
                                    </p> 
                                </div>

                                <div class="modal-body">
                                    <h2 class="card-title">
                                        What's some advice you would give to students who have yet to begin their placements?
                                    </h2>
                                    <p class="modal-text">
                                        I was quite overwhelmed with how the workplace was unlike any environment I have previously experienced. That was to be expected, however I really struggled to adapt to it in my first week. I talk about my experience with this a bit later in the publication, however my best advice to get over this initial environment change is being proactive. This means you should be eager to meet new people by introducing yourself first rather than waiting.                    
                                    </p>
                                    <p class="modal-text">
                                        Furthermore, you should be actively taking on work and getting involved with things like office sport or events as much as you can. I believe that being proactive in meeting people has a big change on whether you enjoy your placement or not.                     
                                    </p> 
                                </div>
                                
                                <div class="modal-body">
                                    <h2 class="card-title">
                                        Where would you like to go for your next placement?
                                    </h2>
                                    <p class="modal-text">
                                        Since I am considering taking up Information systems as my second major, I would love to work at Salesforce. The skills I have learnt at AMEX so far have been more soft skills rather than technical due to the nature of my team. After hearing about the work culture at Salesforce and the amount of responsibility they place on interns, I believe it will be a great place to build upon my existing skillset and grow.
                                    </p>  
                                </div>

                                <div class="modal-body">
                                    <h2 class="card-title">
                                        What’s the culture like at American Express?
                                    </h2>
                                    <p class="modal-text">
                                        Every time I tell someone at American Express that this is my first internship they always say that it is a great place to start, I believe that this is very true. I have found the culture at American Express to be one that is very friendly and socially orientated. That being said, I found that as a new person, you need to take the initiative and introduce yourself to people first. 
                                    </p>  
                                    <p class="modal-text">
                                        However, I believe that is true in nearly any organisation I been part of. AMEX also has a massive intern culture because they recruit about 15-20 interns at a time. Having an intern family to have lunches with and just vibe with has been super helpful within my time at AMEX.                    
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            
                
            
          </>

  );
}

export default PlacementExp;

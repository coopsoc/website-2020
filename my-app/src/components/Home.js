import React from "react";

function Home() {
  return (
    <>
    <div id="mainNav"></div>

    <header class="masthead">
    <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
        <h1 class="mx-auto my-0 text-uppercase">UNSW Co-op Society</h1>
        <h2 class="mx-auto">A society for co-ops, by co-ops.</h2>
        <a href="#events" class="btn btn-primary js-scroll-trigger">Our Events</a>
        </div>
    </div>
    </header>

    <section id="events" class="projects-section bg-light">
        <div class="container">
            <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                <div class="col-xl-8 col-lg-7">
                    <img class="img-fluid mb-3 mb-lg-0" src="img/camp.jpg" alt=""></img>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4>First Years Camp</h4>
                        <p class="text-black-50 mb-0">Our annual event provides the opportunity for you to have fun and create lasting social connections.</p>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div class="col-lg-6">
                    <img class="img-fluid" src="img/ball.jpg" alt=""></img>
                </div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h4 class="text-white">Ball</h4>
                            <p class="mb-0 text-white-50">An unforgettable night of food, drinks and dressing up fancy.</p>
                            <hr class="d-none d-lg-block mb-0 ml-0"></hr>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center no-gutters">
                <div class="col-lg-6">
                    <img class="img-fluid" src="img/peer_mentoring.jpg" alt=""></img>
                </div>
                <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">Peer Mentoring</h4>
                            <p class="mb-0 text-white-50">Facilitating the development of social and professional networks.</p>
                            <hr class="d-none d-lg-block mb-0 mr-0"></hr>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>

    <div id="footer"></div>
        
    </>
  );
}

export default Home;
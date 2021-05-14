import React from "react";

import placement from './img/placement.jpg'
import connected from './img/connected.jpg'
import fyg from './img/fyg.jpg'

function Publications() {
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

        <section id="events" class="publications-section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card border-light">
                            <img src={fyg} class="card-img-top"></img>
                            <div class="card-body bg-light">
                                <h5 class="card-title"><b>First Year Guide 2021</b></h5>
                                <p class="card-text">First year Co-op? We've got you covered!</p><br />
                                <a href="/pubs/fyg/fyg.html" class="btn btn-dark">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card border-light">
                            <img src={connected} class="card-img-top"></img>
                            <div class="card-body bg-light">
                                <h5 class="card-title"><b>Social Distancing Without the Socially Distant.</b></h5>
                                <p class="card-text">How can we stay connected during isolation?</p><br />
                                <a href="/pubs/connected/staying-connected" class="btn btn-dark">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card border-light">
                            <img src={placement} class="card-img-top"></img>
                            <div class="card-body bg-light">
                                <h5 class="card-title"><b>First Placement Experiences</b></h5>
                                <p class="card-text">Worried about placement and not sure what to expect? We've got you covered.</p>
                                <a href="/pubs/placementexp/placementexp" class="btn btn-dark">Read more</a>
                            </div>
                        </div>
                    </div>

                </div>

                
                
            </div>
        </section>

        
      </>

  );
}

export default Publications;
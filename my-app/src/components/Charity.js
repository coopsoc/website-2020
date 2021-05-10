import React from "react";

function Charity() {
  return (
    <>
        <div id="mainNav"></div>

        <header class="masthead-pubs">
        <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
                <h1 class="mx-auto my-0 text-uppercase">Charity</h1>
            </div>
        </div>
    </header>

    <section class="bg-light" >
        <div class="container">
            <div class="mb-4 mb-lg-4">
                Co-op Soc merged with the Co-op Soc Charitable Society (CSCS) in 2018, and since then, the charity portfolio has been an integral way for Co-op scholars to give back to the community. 

                We organise fun events to raise awareness for a diverse range of charities and social issues, encouraging collective participation through events such as the World’s Greatest Shave. 
                
                Beyond having a positive impact on society, our core aims are to socialise, meet new people and above all, contribute with a giving heart.
            </div>

            <h1 class="display-5 text-center mb-4">2020 Events</h1>
            <div class="row">
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/1464813253706083/">
                        <img src="img/charity-events/case-comp.jpg" class="img-fluid" />
                    </a>
                </div>
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/311139309863383/">
                        <img src="img/charity-events/greatest-shave.jpg" class="img-fluid" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white" >
        <div class="container">
            <h1 class="display-5 text-center mb-4 ">Past Events</h1>
            <div class="row">
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/1190826104438705/">
                        <img src="img/charity-events/poker.jpg" class="img-fluid" />
                    </a>
                </div>
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/870944186595660/">
                        <img src="img/charity-events/blood-drive.jpg" class="img-fluid" />
                    </a>
                </div>
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/440597310021840/">
                        <img src="img/charity-events/6k-for-water.jpg" class="img-fluid" />
                    </a>
                </div>
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/2137899859788914/">
                        <img src="img/charity-events/hsc-workshops.jpg" class="img-fluid" />
                    </a>
                </div>
            </div>
        </div>
    </section>
        
      </>

  );
}

export default Charity;
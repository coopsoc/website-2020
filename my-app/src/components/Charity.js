import React from "react";
import sixKForWater from './img/charity-events/6k-for-water.jpg'
import bloodDrive from './img/charity-events/blood-drive.jpg'
import caseComp from './img/charity-events/case-comp.jpg'
import greatestShave from './img/charity-events/greatest-shave.jpg'
import hscWorkshop from './img/charity-events/hsc-workshops.jpg'
import pokerNight from './img/charity-events/poker.jpg'
import caseComp2021 from './img/charity-events/case-comp2021.png'
import funRun from './img/charity-events/funRun.jpg'

// Timeline
import Slider from '@material-ui/core/Slider'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function Charity() {


    const [year, setYear] = React.useState(2021)

    const muiTheme = createMuiTheme({
        overrides:{
          MuiSlider: {
            thumb:{
            color: "#64a19d",
            },
            track: {
                color: '#64a19d',
            },
            rail: {
              color: '#64a19d'
            },
            root: {
                width: '500px'
            }
          }
      }
      });

      const years = [
        {
          value: 0,
          label: "2019",
        },
        {
          value: 50,
          label: '2020',
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
        if (year == "0") {
            return charity_2019()
            
        } else if (year == "50") {
            return charity_2020()
        } else {
            return charity_2021()
        }
    }
    function charity_2021() {
        return (
            <>
            <div class="row">
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/343320683808154/">
                        <img src={caseComp2021} class="card-img-top"></img>
                    </a>
                </div>
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/286927249456511/">
                        <img src={funRun} class="card-img-top"></img>
                    </a>
                </div>
            </div>
            </>
        )
    }

    function charity_2020() {
        return (
            <>
            <section class="bg-white" >
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/1464813253706083/">
                        <img src={caseComp} class="card-img-top"></img>
                    </a>
                </div>
                <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/311139309863383/">
                        <img src={greatestShave} class="card-img-top"></img>
                    </a>
                </div>
            </div>
            
        </div>
        <br></br>
        <br></br>
        </section>
            </>
        )
    }

    function charity_2019() {
        return (
            <>
            <section class="bg-white" >
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                        <a href="https://www.facebook.com/events/1190826104438705/">
                        <img src={pokerNight} class="card-img-top"></img>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                        <a href="https://www.facebook.com/events/870944186595660/">
                            <img src={bloodDrive} class="card-img-top"></img>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                        <a href="https://www.facebook.com/events/440597310021840/">
                            <img src={sixKForWater} class="card-img-top"></img>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-6 mb-4 mb-lg-4 charity-event">
                    <a href="https://www.facebook.com/events/2137899859788914/">
                        <img src={hscWorkshop} class="img-fluid" />
                    </a>
                    </div>

                    
                </div>
            </div>
        <br></br>
        <br></br>
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
                <h1 class="mx-auto my-0 text-uppercase">Charity</h1>
            </div>
        </div>
    </header>

    <section class="bg-light" >
        <div class="container">
            <br></br>
            <br></br>
            <div class="mb-4 mb-lg-4">
                Co-op Soc merged with the Co-op Soc Charitable Society (CSCS) in 2018, and since then, the charity portfolio has been an integral way for Co-op scholars to give back to the community. 

                We organise fun events to raise awareness for a diverse range of charities and social issues, encouraging collective participation through events such as the World’s Greatest Shave. 
                
                Beyond having a positive impact on society, our core aims are to socialise, meet new people and above all, contribute with a giving heart.
            </div>

            <section id="about" class="about-section text-center bg-light pb-md-5">
          <ThemeProvider theme={muiTheme}>
                <Slider
                    defaultValue={100}
                    aria-labelledby="discrete-slider"
                    step={null}
                    marks={years}
                    onChange={(_, value) =>
                        handleYear(value)
                    }
                />
            </ThemeProvider>
            </section>

            {renderYear()}
        </div>
        <br></br>
        <br></br>
    </section>
    

      </>

  );
}

export default Charity;
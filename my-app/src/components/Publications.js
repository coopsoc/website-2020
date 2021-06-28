import React from "react";
import {useState} from "react";
import fyg from './img/fyg.jpg'
import connected from './img/connected.jpg'
import placement from './img/placement.jpg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// pdf viewer
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Document, Page, pdfjs } from 'react-pdf';
import fygPDF from './img/FYG2021.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Publications() {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

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

        </section>
        <section id="events" class="publications-section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card border-light">
                            <img src={fyg} class="card-img-top"></img>
                            <div class="card-body bg-light">
                                <h5 class="card-title"><b>First Year Guide 2021</b></h5>
                                <p class="card-text">First year Co-op? We've got you covered!</p><br />
                                <Link class="btn btn-dark" to="/Publications/fyg">Read more</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card border-light">
                            <img src={connected} class="card-img-top"></img>
                            <div class="card-body bg-light">
                                <h5 class="card-title"><b>Social Distancing Without the Socially Distant.</b></h5>
                                <p class="card-text">How can we stay connected during isolation?</p><br />
                                <Link class="btn btn-dark" to="/Publications/stayingConnected">Read more</Link>
                            </div>
                        </div>
                    </div>

                    {/* <div class="col-sm-6">
                        <div class="card border-light">
                            <img src={placement} class="card-img-top"></img>
                            <div class="card-body bg-light">
                                <h5 class="card-title"><b>First Placement Experiences</b></h5>
                                <p class="card-text">Worried about placement and not sure what to expect? We've got you covered.</p>
                                <Link class="btn btn-dark" to="/Publications/placementExperience">Read more</Link>
                            </div>
                        </div>
                    </div> */}

                </div>
                
                
            </div>
        </section>

        
      </>

  );
}

export default Publications;
import React from "react";
import {useState} from "react";
import fyg from './img/fyg.jpg'
import connected from './img/connected.jpg'
import placement from './img/placement.jpg'

// pdf viewer
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Document, Page, pdfjs } from 'react-pdf';
import fygPDF from './img/FYG2021.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function FirstYearGuide() {

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

        <section id="publications" class="publications-section bg-light pb-md-4">
        <div class="container pb-md-4">
            <h1 class="display-5 text-center">
                Co-op Soc First Year Guide
            </h1>
            <p class="text-center"><em>
                Edited by Publications Directors Susan Sun (2020) and Jack Yin (2021)      
            </em></p>
            <br></br>

            <p class="text-center"><em>
                <a href="https://www.coopsoc.com.au/FYG2021.pdf" class="btn btn-dark">Download Me</a>
            </em></p>
            
        </div>


    </section>

        
      </>

  );
}

export default FirstYearGuide;
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import sampleData from "./resources/samplePosts.js";

dayjs.extend(customParseFormat);

function timeAgo(date) {
  const now = dayjs();
  
  if (now.isBefore(date)) {
    return "In the future";
  }

  const difference = now.diff(date, "minutes");

  if (difference < 60) {
    // Less than an hour ago
    return `${difference} minutes ago`;
  } else if (difference < 60 * 24) {
    // Less than a day ago
    return `${Math.floor(difference / 60)} hours ago`;
  } else {
    const monthDifference = now.diff(date, "months");

    if (monthDifference === 0) {
      // Less than a month ago
      return `${Math.floor(difference / (60 * 24))} days ago`;
    } else if (monthDifference < 12) {
      // Less than a year ago
      return `${monthDifference} months ago`;
    } else {
      return "More than a year ago";
    }
  }
}

function toComponent(item, key) {
  let icon;

  switch (item.origin) {
    case "facebook":
      icon = faFacebookSquare;
      break;
    case "linkedin":
      icon = faLinkedinIn;
      break;
    default:
      icon = faEnvelope;
  }

  return (
    <div className="masonryCell" key={key}>
      <div className="content">
        <h3>{item.message}</h3>
        <p>{item.description}</p>
        <img src={item.image} />
      </div>
      <p className="timeLabel text-uppercase">{timeAgo(item.time)}</p>
      <FontAwesomeIcon className="cellOrigin" icon={icon}/>
    </div>
  );
}

function Home() {
  const [items, setItems] = useState([]);

  // componentDidMount equivalent
  useEffect(() => {
    const dateConverted = sampleData.map(item => {
      item.time = dayjs(item.time);
      return item;
    });

    const sortedItems = dateConverted.sort((a, b) => {
      return a.time.isBefore(b.time) ? 1 : -1;
    });

    setItems(sortedItems);
  }, []);

  return (
    <>
      <div id="mainNav"></div>
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">UNSW Co-op Society</h1>
            <h2 class="mx-auto">A society for co-ops, by co-ops.</h2>
          </div>
        </div>
      </header>

      <div id="feed">
        <h2 className="mx-auto">Check out what we're up to!</h2>
        <Masonry
          breakpointCols={3}
          id="masonry"
          className="masonryClass"
          columnClassName="masonryColumn">
          {items.map((item, index) => toComponent(item, index))}
        </Masonry>
      </div>

      <div id="footer"></div>
    </>
  );
}

export default Home;
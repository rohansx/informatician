import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import UploadIcon from '@mui/icons-material/Upload';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import DraftsIcon from '@mui/icons-material/Drafts';
import ReadingChallengeIcon from '@mui/icons-material/EmojiEvents'; // Imported ReadingChallenge icon from Material-UI Icons
import ProgressTrackingIcon from '@mui/icons-material/Timeline'; // Imported ProgressTracking icon from Material-UI Icons

import "./Feature.css"


export default function Feature(props) {
  return (
    <div className="row feature d-flex justify-content-evenly text-center">
      <h1 className="text-center fw-bold fs-1">Features</h1>
      <p className="text-center mt-4 mb-5">Features We provide</p>

      <Carousel showArrows={true} showThumbs={false} className="carousel-container relative" autoPlay={true} interval={2000} infiniteLoop={true}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
              <button onClick={clickHandler} className="absolute z-10 left-0 top-1/3 h-12 w-12 text-4xl">
                  {`<`}
              </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
              <button onClick={clickHandler} className="absolute z-10 right-0 top-1/3 h-12 w-12 text-4xl">
                  {`>`}
              </button>
          )
        }>
      <div className="feature_card_outer">
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#192734' : '' }}>
            <MenuBookIcon className="icons book" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Read Books</p>
          </div>
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#192734' : '' }}>
            <UploadIcon className="icons upload text-info" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Upload Books</p>
          </div>
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#192734' : '' }}>
            <MoneyOffIcon className="dollar icons text-warning" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Free of Cost</p>
          </div>
        </div>
        <div className="feature_card_outer">
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#192734' : '' }}>
            <PeopleIcon className="icons reader" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Readers Community</p>
          </div>
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#192734' : '' }}>
            <EmailIcon className="icons letterClose text-primary" />
            <DraftsIcon className="icons letterOpen text-primary d-none" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Newsletter</p>
          </div>
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#192734' : '' }}>
            <ReadingChallengeIcon className="icons readingChallenge" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Reading Challenge</p>
          </div>
        </div>
        <div className="feature_card_outer">
          <div className="feature_card" style={{ background: props.theme === "dark" ? '#192734' : '' }}>
            <ProgressTrackingIcon className="icons progressTracking" />
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>Progress Tracking</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
'use client'
import "./CardContent.css";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
// import { Link } from "react-router-dom";

export default function CardContent(props) {
  const bgColors = ["#daeff1", "#f6f6e7", "#f6e7e7", "#eaf6e7", "#e7ecf6"];
  var random_color = bgColors[Math.floor(Math.random() * bgColors.length)];

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="bk-view flex flex-col items-center overflow-hidden shadow dark:shadow-white transition-all">
      <div className="bg-color" style={{ backgroundColor: random_color }}></div>
      <div className="bk-img h-2/5">
        {/* <Link to="/books/id"> */}
        <Image src={props.imgName} alt={props.title} />
        {/* </Link> */}
      </div>
      <div className="bk-details">
        {/* <Link to="/books/id"> */}
        <p className="type">{props.type}</p>
        <p className="title">{props.title}</p>
        <span className="author">
          <span>{props.author}</span>
        </span>
        <p className="description">{props.description}</p>
        {/* </Link> */}
      </div>
      <div className="reviews">
        <div className="rating">
          {/* <Link to="/books/id"> */}
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value={4}
            activeColor="#ffd700"
          />
          {/* </Link> */}
        </div>
        <div className="save">
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    </div>
  );
}

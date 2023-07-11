import "./BookComponent.css";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Books from "../Books";

export default function BookComponent() {
  const bookId = useParams().bookId;
  const bookDetails = Books[bookId - 1];
  return (
    <div className="single-view container-fluid row single">
      <div className="inside-wrapper">
        <div className="left-wrapper-content">
          <h1 className="book-name">{bookDetails.title}</h1>
          <div className="author">
            <Link to={bookDetails.authorPage}>
              Author:
              {bookDetails.author}
            </Link>
          </div>
          <div className="rating">
            <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
            {bookDetails.ratings} Ratings
          </div>
          <div>
            <h2 className="about">About this Book</h2>
            <div>
              <p>
                <strong>{bookDetails.aboutBook}</strong>
              </p>
              <p>{bookDetails.bookSynapsis}</p>
            </div>
          </div>
          <div class="book-info">
            <p>
              <h3>Language:</h3> {bookDetails.language}
            </p>
            <p>
              <h3>Publisher:</h3>
              {bookDetails.author}
            </p>
            <p>
              <h3>Release Date:</h3> {bookDetails.releaseDate}
            </p>
            <p>
              <h3>ISBN:</h3> {bookDetails.isbn}
            </p>
          </div>
        </div>
        <div className="space"></div>
        <div className="side-panel">
          <div className="thumbnail">
            <img src={bookDetails.img} alt={bookDetails.title} />
          </div>
          <div className="buttons">
            <button type="button" className="btn btn-start-reading">
              Start Reading
            </button>
            <button type="button" className="btn">
              Sample
            </button>
          </div>
          <button className="bookmark">
            <div>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <div>{"  "}Save for later</div>
          </button>
        </div>
      </div>
    </div>
  );
}

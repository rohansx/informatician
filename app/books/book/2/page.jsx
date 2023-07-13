'use client'
import "@/styles/SingleBk.css";
import ReactStars from "react-rating-stars-component";
import abk2 from "@/public/assets/audiobks/abk2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SingleBk(props) {

  function handleClick(){
    setBookmarks(bookmarks)
    setColor("aqua")
  }

  const[bookmarks, setBookmarks] = useState([]);
  const[color, setColor] = useState("white");

  return (
    <div className="single-view">
      <div className="container-fluid">
        <div className="row">
          <div className="single">
            <div className="inside-wrapper">
              <div className="space hide"></div>
              <div className="left-wrapper-content">
                <div className="first-section">
                  <span className="first-type" style={{ color: props.theme === "dark" ? 'white' : '' }}>Audiobook</span>
                </div>
                <h1 className="bk-name">
                  The Guest List: YOU'D KILL TO BE ON IT
                </h1>
                <div className="publication">
                  <p className="pub-name" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                    By
                    <Link
                      className="pub-link"
                      href="/books/book/id"
                      style={{ marginLeft: "5px",  color: props.theme === "dark" ? 'white' : ''  }}
                    >
                      <span className="d-flex">
                        <span className="child">Lucy Foley</span>
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="user-rate">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="rating-count">
                    <Link className="pub-link" href="/books/book/id" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                      <span className="d-flex">
                        <span className="child">(1,103 ratings)</span>
                      </span>
                    </Link>
                  </p>
                </div>
                <span>
                  <div
                    className="d-block"
                    style={{ height: "29px", marginBottom: "24px" }}
                  ></div>
                </span>
                <div style={{ marginBottom: "56px" }}>
                  <h2 style={{ color: props.theme === "dark" ? 'white' : '' }} className="abt-bk">About this Book</h2>
                  <div style={{ marginTop: "8px", fontSize: "1rem" }}>
                    <div className="theory">
                      <p>
                        <strong>
                          <em>Winner for Best Mystery & Thriller (2020) </em>
                        </strong>
                      </p>{" "}
                      <br />
                      <p>
                        A wedding celebration turns dark and deadly in this
                        deliciously wicked and atmospheric thriller reminiscent
                        of Agatha Christie from the New York Times bestselling
                        author of The Hunting Party. The bride – The plus one –
                        The best man – The wedding planner – The bridesmaid –
                        The body On an island off the coast of Ireland, guests
                        gather to celebrate two people joining their lives
                        together as one. The groom: handsome and charming, a
                        rising television star. The bride: smart and ambitious,
                        a magazine publisher. It’s a wedding for a magazine, or
                        for a celebrity: the designer dress, the remote
                        location, the luxe party favors, the boutique whiskey.
                        The cell phone service may be spotty and the waves may
                        be rough, but every detail has been expertly planned and
                        will be expertly executed. But perfection is for plans,
                        and people are all too human. As the champagne is popped
                        and the festivities begin, resentments and petty
                        jealousies begin to mingle with the reminiscences and
                        well wishes. The groomsmen begin the drinking game from
                        their school days. The bridesmaid not-so-accidentally
                        ruins her dress. The bride’s oldest (male) friend gives
                        an uncomfortably caring toast. And then someone turns up
                        dead. Who didn’t wish the happy couple well? And perhaps
                        more important, why?
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: "40px" }} >
                  <div className="bk-desc">
                    <div className="lang">
                      <span className="first-lang">Language</span>
                      <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>English</span>
                    </div>
                    <div className="lang">
                      <span className="first-lang">Publisher</span>
                      <Link className="pub-link" href="/books/book/id">
                        <span className="d-flex">
                          <span className="child" style={{ color: props.theme === "dark" ? 'white' : '' }}>Lucy Foley</span>
                        </span>
                      </Link>
                    </div>
                    <div className="lang">
                      <span className="first-lang">Release Date</span>
                      <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>Oct 17, 2001</span>
                    </div>
                    <div className="lang">
                      <span className="first-lang">ISBN</span>
                      <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>9780718074326</span>
                    </div>
                  </div>
                </div>
                <span className="divider"></span>
              </div>
              <div className="space"></div>

              <div className="right-wrapper-content">
                <div className="side">
                  <div style={{ marginBottom: "24px" }}>
                    <div>
                      <div className="book-box">
                        <div className="thumbnail">
                          <Image loading='lazy' src={abk2} alt="The Guest List" width={100} height={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      style={{
                        backgroundColor: "#1e7b85",
                        color: "white",
                        width: "100%",
                        marginBottom: "12px",
                        fontWeight: 600,
                      }}
                    >
                      Start Reading
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      style={{
                        width: "100%",
                        marginBottom: "12px",
                        fontWeight: 600,
                        backgroundColor: "transparent", // Set the initial background color as transparent
                        transition: "background-color 0.3s ease", // Add a transition effect
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#1e7b85"; // Change the background color on hover
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent"; // Restore the initial background color when not hovered
                      }}
                    >
                      Sample
                    </button>
                  </div>
                  <div className="right-last">
                    <ul className="right-list">
                      <li>
                        <button className="sfl">
                          <div style={{ display: "flex", maxWidth: "190px" }}>
                            <div>
                              <FontAwesomeIcon
                              style={{ color: props.theme === "dark" ? 'white' : '', height: "24px", backgroundColor: color }}
                              icon={faBookmark}
                              onClick={() => {handleClick()}}
                              />
                            </div>
                            <div className="label" style={{ color: props.theme === "dark" ? 'white' : '' }}>Save for later</div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

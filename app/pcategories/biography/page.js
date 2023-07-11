'use client'
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "@/components/Home/BkCards/BkCards";
import "./biography.css"; // Import the CSS file for styling

function Biography(props) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <Container className="biography-container mx-auto">
      <div className="biography-header bg-neutral-100  dark:bg-neutral-800">
        <h1 className="heading">Biography &amp; Memoir</h1>
        <p className="subtitle">
          Discover captivating life stories and memoirs
        </p>
        <p className={`mt-3 text-lg ${showMore ? "show-more-visible" : ""}`}>
          Discover captivating tales of individuals who have truly embraced life
          to its fullest. Immerse yourself in a diverse collection of books that
          delve into the lives of renowned icons, infamous figures, and
          fascinating personalities across art, sports, politics, and music.
          From the world's most celebrated names to lesser-known individuals
          with captivating stories and unique perspectives, Informatician offers
          an extensive selection that will captivate and enlighten you.
          Subscribe now to embark on a journey through the extraordinary lives
          that have shaped our world.
        </p>
      </div>
      <Row className="my-5">
        <Col>
          <p className="subtitle">
            The most talked-about and well-loved Biography & Memoir titles this month.
          </p>
          <BkCards bkhead="Trending titles"></BkCards>
          <BkCards bkhead="Must-Read Biographies of Great Leaders"></BkCards>
          <div className={`${!showMore && "pt-10"} pb-10`}>
          {showMore && <BkCards bkhead="Everything About Biography & Memoir"></BkCards>}
          {!showMore && (
            <button className="show-more-button mx-auto" onClick={handleShowMore}>
              Show More
            </button>
          )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Biography;

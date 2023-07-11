'use client'
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./BkCards.css";
import CardContent from "./CardContent/CardContent";
import { useSwiper } from "swiper/react";
import Link from "next/link";
import Books from "../Books";

SwiperCore.use([Autoplay]);

const GhostPrevButton = ({ refprop }) => {
  const swiper = useSwiper();
  return (
    <div
      ref={refprop}
      className="hidden"
      onClick={() => swiper.slidePrev()}
    ></div>
  );
};

const GhostNextButton = ({ refprop }) => {
  const swiper = useSwiper();
  return (
    <div
      ref={refprop}
      className="hidden"
      onClick={() => swiper.slideNext()}
    ></div>
  );
};

export default function BkCards(props) {
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const swiperRef = useRef(null);

  // useEffect(() => {
  //   if (props.theme === "light") {
  //     document.querySelectorAll(".swiper-slide").forEach((elem) => {
  //       elem.style.backgroundColor = "white";
  //       elem.addEventListener("mouseover", () => {
  //         elem.style.backgroundColor = "white";
  //       });
  //     });
  //   } else {
  //     document.querySelectorAll(".swiper-slide").forEach((elem) => {
  //       elem.style.backgroundColor = "rgb(22, 19, 19)";
  //       elem.addEventListener("mouseover", () => {
  //         elem.style.backgroundColor = "rgb(22, 19, 19)";
  //       });
  //     });
  //   }
  // }, [props.theme]);

  return (
    <>
      <div className="container pt-1">
        <div className="row justify-content-center">
          <div className="books">
            <h2 className="font-serif text-3xl font-bold mb-4 mx-5">
              {props.bkhead}
            </h2>
            <div className="flex items-center gap-2 md:gap-10 ">
              <div
                onClick={() => prevButton.current.click()}
                className=" cursor-pointer"
              >
                <svg
                  height="50"
                  width="50"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ rotate: "180deg" }}
                >
                  <path
                    d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
                    fill="grey"
                  />
                </svg>
              </div>

              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                  delay: 2300,
                }}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1096: {
                    slidesPerView: 5,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper dark:bg-[#161313] h-[30rem]"
              >
                <GhostPrevButton refprop={prevButton} />
                {Books.map((book) => {
                  return (
                    <SwiperSlide key={book.id}>
                      <Link href={`/books/${book.id}`}>
                        <CardContent
                          className="columnn"
                          imgName={book.img}
                          type={book.type}
                          title={book.title}
                          author={book.author}
                          description={book.description}
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
                <GhostNextButton refprop={nextButton} />
              </Swiper>

              <div
                onClick={() => nextButton.current.click()}
                className="cursor-pointer"
              >
                <svg
                  height="50"
                  width="50"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
                    fill="grey"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

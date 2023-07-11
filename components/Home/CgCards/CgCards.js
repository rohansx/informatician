"use client";
import CardContent from "./CardContent/CardContent";
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import ebk1 from "@/public/assets/ebooks/ebk1.webp";
import ebk2 from "@/public/assets/ebooks/ebk2.webp";
import ebk3 from "@/public/assets/ebooks/ebk3.webp";
import ebk4 from "@/public/assets/ebooks/ebk4.webp";
import ebk5 from "@/public/assets/ebooks/ebk5.webp";
import ebk6 from "@/public/assets/ebooks/ebk6.webp";
import abk1 from "@/public/assets/audiobks/abk1.webp";
import abk2 from "@/public/assets/audiobks/abk2.webp";
import abk3 from "@/public/assets/audiobks/abk3.webp";
import abk4 from "@/public/assets/audiobks/abk4.webp";

export default function CgCards() {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="text-3xl mb-12 text-center">Popular Categories</h1>
      <div className="flex max-h-full">
        <Swiper
          className="h-40"
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
          }}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            512: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <CardContent image={ebk1} title="Biography & Memoir" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={abk1} title="Politics" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={abk2} title="Career & Growth" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={abk3} title="Contemporary Fiction" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={abk4} title="Science & Mathematics" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={ebk2} title="Cooking & Food" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={ebk3} title="Self-Improvement" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={ebk4} title="Travel" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={ebk5} title="Mystery, Thriller & Crime" />
          </SwiperSlide>
          <SwiperSlide>
            <CardContent image={ebk6} title="Home & Garden" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

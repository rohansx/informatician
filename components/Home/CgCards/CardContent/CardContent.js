'use client'
import Link from "next/link";
import "./CardContent.css";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export default function CardContent(props) {
  return (
    <SwiperSlide>
      <Link
        href="/pcategories/biography"
        className="cg-card mx-2 px-3 py-2 h-20 relative cursor-pointer border"
      >
        <div>
          <p>{props.title}</p>
        </div>
        <div>
          <Image
            loading="lazy"
            className="absolute"
            onDragStart={(e) => {
              e.preventDefault();
              return false;
            }}
            src={props.image}
            alt={props.title}
          />
        </div>
      </Link>
    </SwiperSlide>
  );
}

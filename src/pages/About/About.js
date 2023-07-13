import React, { useEffect } from "react";
import "./About.css";
import aboutUs from "../../assets/mainPages/aboutUs.webp";
import Tilt from 'react-parallax-tilt';
import { useMediaQuery } from "react-responsive";
import ScrollToTopButton from "../../components/ScrollButton/ScrollButton";
import Feature from "../../components/About/Feature";
import Testimonial from "../../components/About/Testimonial";
import Download from "../../components/About/Download";
import AOS from "aos";
import Contributors from "../../components/About/Contributors";
import "aos/dist/aos.css";
import '../../components/About/Feature.css'

const About = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="about">
      <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-28 mb-5 max-w-screen-2xl">
        <div className="md:w-1/2 w-11/12" data-aos="fade-left" data-aos-duration="500">
          <Tilt>
            <img
              loading="lazy"
              src={aboutUs}
              className="w-11/12"
              alt="a group of people sitting on a pile of papers"
            />
          </Tilt>
        </div>
        <div className="md:w-1/2 p-3 w-11/12" data-aos="fade-right" data-aos-duration="500">
          <h1 className="heading text-5xl mb-6 font-bold">About Us</h1>
          <p className="leading-6">
            Book Listing App connects book lovers, fostering a vibrant community
            of diverse genres. Our mission is to make reading accessible,
            enjoyable, and interactive for all, promoting literacy and building
            a strong book-centric community. Discover new books, engage in
            discussions, and share the joy of reading. Our curated collection
            caters to various interests, ensuring there's something for every
            reader. Join us to explore, connect, and celebrate the magic of
            reading!
          </p>
        </div>
      </div>
      <ScrollToTopButton />
      <Feature theme={props.theme} />
      <div className="Testimonial"><Testimonial theme={props.theme}/></div>
      <Download theme={props.theme}/>
      <Contributors theme={props.theme}/>
    </div>
  );
};

export default About;

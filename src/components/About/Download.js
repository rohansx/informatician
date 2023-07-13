import React, { useEffect } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import logo from "../../assets/logos/logo_png.png";
import darklogo from "../../assets/logos/darklogo_png.png";
import mobile from "../../assets/mobile.webp";
import "./Download.css";
import "aos/dist/aos.css";

export default function Download(props){
  const themeImage = props.theme === "dark" ? darklogo : logo;

  // const { theme } = props;
  useEffect(() => {
    var container = document.getElementById("mobile-image-container");
    var inner = document.getElementById("mobile-image");
    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function () {
      return counter++ % updateRate === 0;
    };

    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return "(" + this.x + ", " + this.y + ")";
      },
    };
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    var onMouseEnterHandler = function (event) {
      update(event);
    };
    var onMouseLeaveHandler = function () {
      inner.style = "";
    };
    var onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    var update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function (x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  }, []);

  return (
    <div className="row download">
      <div className="left col-lg-6 col-md-6 position-relative d-flex align-items-start justify-content-center">
        <div id="mobile-image-container">
          <img
            loading='lazy'
            className="rounded-5"
            id="mobile-image"
            src={mobile}
            alt="mobile view of the website"
            data-aos="fade-left"
            data-aos-duration="500"
          />
        </div>
        <div className="box box1"></div>
        <div className="box box2"></div>
      </div>
      <div
        className="available right col-lg-6 col-md-6"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <p className={`brand-name fw-bold text-uppercase `}>
          <img loading='lazy' src={themeImage} alt="Informatician logo, a book with a bookmark" className="h-22 w-64  d-inline" /> 
        </p>
        <h1 className={`fw-bolder fs-1 text-${props.theme === 'dark' ? "white" : "black"}`}>Available For Your Smartphone</h1>
        <p className={`text-${props.theme === 'dark' ? "white" : "black"}`}>
          Use Informatician through any web browser, Android, or iOS device.
          Download into the apps for offline access, so whether you’re reading
          on the beach or on the airplane, you’ll always have access. Install
          the apps to try them out.
        </p>
        <div className="flex flex-col items-center justify-center mt-6 space-y-4 sm:flex-row md:flex-col lg:flex-row sm:space-y-3 sm:space-x-3 md:space-x-0 lg:space-x-3 lg:space-y-0 md:items-start lg:items-center">
          <button className="inline-flex items-center py-2.5 px-4  rounded-xl bg-gray-600 text-gray-50 w-52 btn1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current w-16 h-16 text-gray-50"
            >
              <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
            </svg>
            <div className="flex flex-col items-start ml-4 leading-none text-center w-full">
              <div className="mb-1 text-xs w-full">GET IT ON</div>
              <div className="font-semibold w-full title-font">Google Play</div>
            </div>
          </button>
          <button className="inline-flex items-center px-4 py-2.5 rounded-xl bg-gray-600 text-gray-50 w-52 btn2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="fill-current w-16 h-16 text-gray-50"
            >
              <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
            <div className="flex flex-col items-start ml-4 leading-none text-center w-full">
              <div className="mb-1 text-xs w-full">GET IT ON</div>
              <div className="font-semibold title-font w-full">App Store</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

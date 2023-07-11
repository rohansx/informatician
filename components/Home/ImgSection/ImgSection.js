import AutoType from "./AutoType";
import "./ImgSection.css";

export default function ImgSection(props) {

  return (
    <div className="img-section w-full">
      <div className="img-black">
        <div className="container-fluid px-7">
          <div className="row">
            <div style={{ height: '60px' }}></div>
            <div className="inner">
              <div className="inner-one inner-two"></div>
              <div className="inner-content">
                <h3 className="inner-head">
                  Read anywhere. Anytime.
                </h3>
                <span className="inner-span">
                  <p className="inner-para text-center">
                    Unveil the finest literary treasures across diverse genres.
                  </p>
                </span>
                <AutoType txt={props.txt} />
              </div>
              <div className="last-one last-two"></div>
              <div className="last-three"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

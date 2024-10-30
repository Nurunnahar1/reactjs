 
import Accor from "../Accordion/Accordion";
import "./Feature.css"; 

const Feature = () => {
  return (
    <>
      <div className="feature-area">
        <div className="heading">
          <h2>Our Features</h2>
        </div>
        <div className="feature">
          <div className="item">
            <div className="single-item">
              <div className="title">
                <i class="fa-solid fa-life-ring icon"></i>
                <h3>Customer Support</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa
              </p>
            </div>
            <div className="single-item">
              <div className="title">
                <i class="fa-solid fa-layer-group icon"></i>
                <h3>Sliders</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa
              </p>
            </div>
            <div className="single-item">
              <div className="title">
                <i class="fa-regular fa-file-lines icon"></i>
                <h3>HTML5 / CSS3 / JS</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa
              </p>
            </div>
            <div className="single-item">
              <div className="title">
                <i class="fa-brands fa-google icon"></i>
                <h3>500+ Google Fonts</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa
              </p>
            </div>
            <div className="single-item">
              <div className="title">
                <i class="fa-regular fa-user icon"></i>
                <h3>Icons</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa
              </p>
            </div>
            <div className="single-item">
              <div className="title">
                <i class="fa-solid fa-bars icon"></i>
                <h3>Buttons</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa
              </p>
            </div>
            <div className="single-item">
              <div className="title">
                <i class="fa-solid fa-display icon"></i>
                <h3>Lightbox</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa
              </p>
            </div>
            <div className="single-item">
              <div className="title">
                <i class="fa-solid fa-pencil icon"></i>
                <h3>Colors</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa
              </p>
            </div>
          </div>
          <div className="accordion">
            <Accor/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;

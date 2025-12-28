import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS

function App() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto" }}>
      <Carousel
        showThumbs={true}
        infiniteLoop
        autoPlay
        interval={3500}
        stopOnHover
        swipeable
        emulateTouch
        dynamicHeight={false}
        useKeyboardArrows
        ariaLabel="Featured images carousel"
      >
        <div>
          <img src="/hongkong.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="/macao.webp" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="/japan.webp" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="/lasvegas.webp" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
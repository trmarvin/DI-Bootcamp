import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", border: "1px solid #999" }}>
      <h1 style={{ marginBottom: 12 }}>Carousel sanity check</h1>
      <Carousel showStatus={false} showThumbs={false} infiniteLoop>
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

import { Carousel } from 'react-bootstrap';
import { banners } from '../data/product';

function Banner() {
  return (
    <Carousel className="mb-5 shadow-sm">
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            style={{ height: '450px', objectFit: 'cover' }}
            src={banner.image}
            alt={banner.title}
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100">
            <div className="bg-dark bg-opacity-50 p-3 p-md-4 rounded text-center">
              <h2 className="fw-bold">{banner.title}</h2>
              <p className="mb-0 fs-5">{banner.description}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;

import { Carousel } from 'react-bootstrap';
import { banners } from '../data/product';

function Banner() {
  return (
    <Carousel className="mb-5 shadow-sm">
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            style={{ height: '70vh', objectFit: 'cover', objectPosition: 'center' }}
            src={banner.image}
            alt={banner.title}
          />
          <Carousel.Caption style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
            <h3 className="fw-bold">{banner.title}</h3>
            <p className="fs-5 fw-medium">{banner.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;

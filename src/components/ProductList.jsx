import { Row, Col, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { products } from '../data/product';

function ProductList({ onAddToCart }) {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase">Featured Products</h2>
        <hr className="w-25 mx-auto text-primary border-3 opacity-75" />
      </div>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;

import { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaCartPlus, FaCheck } from 'react-icons/fa';

function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);
  const isOutOfStock = product.status === 'Out of Stock';

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart();
  };

  return (
    <Card className="h-100 shadow-sm border-0">
      <div className="position-relative bg-light" style={{ aspectRatio: '3/4' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.name}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
        <Badge 
          bg={isOutOfStock ? 'danger' : (product.status === 'Low Stock' ? 'warning' : 'success')} 
          className="position-absolute top-0 end-0 m-2 px-2 py-1"
        >
        {product.status}
      </Badge>
      </div>
      <Card.Body className="d-flex flex-column text-center p-4">
        <Card.Title className="fw-bold fs-5">{product.name}</Card.Title>
        <Card.Text className="text-primary fw-bold fs-4 mb-4">
          {product.price.toLocaleString('vi-VN')} VND
        </Card.Text>
        <Button 
          variant={isAdded ? "secondary" : "success"}
          className="w-100 mt-auto"
          onClick={handleAddToCart}
          disabled={isOutOfStock || isAdded}
        >
          {isAdded ? <FaCheck size={18} /> : <FaCartPlus size={18} />}
          {isOutOfStock ? 'Out of Stock' : (isAdded ? 'Added to Cart' : 'Add to Cart')}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

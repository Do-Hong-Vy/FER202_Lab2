import { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaCartPlus, FaCheck } from 'react-icons/fa';

function ProductCard({ product, onAddToCart }) {
  const [isJustAdded, setIsJustAdded] = useState(false);
  const isOutOfStock = product.quantity === 0;
  
  let statusBadgeColor = 'success';
  let statusText = 'In Stock';
  if (product.quantity === 0) {
    statusBadgeColor = 'danger';
    statusText = 'Out of Stock';
  } else if (product.quantity <= 5) {
    statusBadgeColor = 'warning';
    statusText = 'Low Stock';
  }

  const handleAddToCartClick = () => {
    onAddToCart();
    setIsJustAdded(true);
    setTimeout(() => {
      setIsJustAdded(false);
    }, 1000);
  };

  return (
    <Card className="h-100 shadow-sm border-0">
      <div className="position-relative bg-light" style={{ aspectRatio: '1/1' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.name}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
        <Badge 
          bg={statusBadgeColor} 
          className="position-absolute top-0 end-0 m-2 px-2 py-1"
        >
        {statusText}
      </Badge>
      </div>
      <Card.Body className="d-flex flex-column text-center p-4">
        <Card.Title className="fw-bold fs-5">{product.name}</Card.Title>
        <Card.Text className="text-primary fw-bold fs-4 mb-3">
          {product.price.toLocaleString('vi-VN')} VND
        </Card.Text>
        
        <p className="text-muted small mb-3">Stock remaining: {product.quantity}</p>

        <Button 
          variant={isJustAdded ? "secondary" : "success"}
          className="w-100 mt-auto"
          onClick={handleAddToCartClick}
          disabled={isOutOfStock}
        >
          {isJustAdded ? <FaCheck size={18} className="me-2" /> : <FaCartPlus size={18} className="me-2" />}
          {isOutOfStock ? 'Out of Stock' : (isJustAdded ? 'Added to Cart' : 'Add to Cart')}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

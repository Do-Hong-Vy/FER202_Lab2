import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart, FaTshirt } from "react-icons/fa";

function Header({ cartQuantity }) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="py-3 shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <FaTshirt className="me-2" /> ShopFashion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-4">
            <Nav.Link href="#home" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link href="#products" className="px-3">
              Products
            </Nav.Link>
            <Nav.Link href="#men" className="px-3">
              Men
            </Nav.Link>
            <Nav.Link href="#women" className="px-3">
              Women
            </Nav.Link>
            <Nav.Link href="#contact" className="px-3">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart" className="d-flex align-items-center gap-1">
              <FaShoppingCart size={20} className="text-white" />
              <span className="fw-bold text-white">{cartQuantity}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

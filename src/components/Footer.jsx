import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <Container>
        <Row>
          <Col md={12}>
            <h5 className="fw-bold mb-4 text-uppercase text-white">
              Student Information
            </h5>
            <div className="d-flex flex-column gap-3 text-text-white">
              <p className="mb-0">
                <strong className="text-light">Name:</strong> Do Hong Vy
              </p>
              <p className="mb-0">
                <strong className="text-light">Student ID:</strong> HE190507
              </p>
              <p className="mb-0">
                <strong className="text-light">Class:</strong> SE2009
              </p>
              <p className="mb-0">
                <strong className="text-light">Email:</strong>{" "}
                dohongvy.work@gmail.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

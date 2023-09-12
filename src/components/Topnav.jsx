import { usePathname } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Topnav = () => {
  const pathname = usePathname();
  const expand = "md";
  return (
    <Row className="mx-1">
      <Navbar
        key={expand}
        expand={expand}
        bg="light"
        variant="light"
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#">MENU.IO</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className={pathname === "/" ? "text-dark" : "text-secondary"}
                  href="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={
                    pathname === "/dashboard" ? "text-dark" : "text-secondary"
                  }
                  href="/dashboard"
                >
                  dashboard
                </Nav.Link>
                <Nav.Link href="/boh">Categories</Nav.Link>

                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Topnav;

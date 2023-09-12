"use client";
import Topnav from "@/components/Topnav";
import LoginForm from "@/components/LoginForm";

import { Col, Container, Row } from "react-bootstrap";

// `app/page.js` is the UI for the `/` URL
export default function Page() {
  return (
    <Container fluid>
      <Row className="justify-content-center vh-100">
        <Col className="col-sm-5 align-self-center">
          <LoginForm></LoginForm>
        </Col>
      </Row>
    </Container>
  );
}

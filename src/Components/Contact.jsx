import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container id="contact" className="my-5">
      {/* Section Heading */}
      <Row className="text-center">
        <Col>
          <h1 data-aos="zoom-in-down">Get in Touch</h1>
          <hr
              className="animated-hr"
              style={{
                border: "2px solid rgb(253, 254, 254)",
                width: "20%",
                margin: "10px auto",
              }}/>
      </Col>
      </Row>

      {/* Contact Content */}
      <Row className="mt-5">
        {/* Contact Information */}
        <Col md={6} className="mb-4">
   
          <br />
          <br />

          <ul className="list-unstyled">
         
            <li>
              <i className="fa-solid fa-mobile infoicons" ></i> +91 88.....847
            </li>
            <li>
              <i className="fa-solid fa-envelope infoicons"></i>
              <a href="mailto:shamlumolakms@gmail.com" className="text-white text-decoration-none ms-2">
                 shamlumolakms@gmail.com
              </a>
            </li>
          </ul>
          <br />
          <br />

          <h2>FOLLOW ME</h2>
          <div className="d-flex">
         
            <a href="#" className="me-3">
              <i className="fa-brands fa-x-twitter i2"></i>
            </a>
            <a href="#" className="me-3">
              <i className="fa-brands fa-facebook i3"></i>
            </a>
            <a href="#" className="me-3">
              <i className="fa-brands fa-google i4"></i>
            </a>
            <a href="#" className="me-3">
              <i className="fa-brands fa-github i5"></i>
            </a>
          </div>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <h2>SEND A NOTE</h2>
          <br />
          <Form>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Control type="text" placeholder="Name" id="name" />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Control  type="email" placeholder="Email" id="email" />
              </Col>
            </Row>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Tell us more about your needs......"
              className="mb-3 textarea"
            />
            <div className="d-grid">
              <Button className="downloadBtn" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
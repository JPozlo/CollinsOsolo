import React, { Component } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Axios from "axios";
import Hero from "../Components/Hero";

export class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    console.log(`Handle change triggered: ${event}`);

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });

    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row className="justify-content-center mt-4 display-4 font-weight-light">
            {this.props.subTitle}
          </Row>
          <Row className="justify-content-center p-1 mt-3 lead font-weight-light">
            <Col md={{ offset: 2, span: 4 }}>Email: </Col>
            <Col md={{ span: 4 }}>
              <a href="mailto:ozlocollins@gmail.com">
                {" "}
                <Button variant="outline-info">ozlocollins@gmail.com</Button>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center p-1 mt-3 lead font-weight-light">
            <Col md={{ offset: 2, span: 4 }}>Mobile: </Col>
            <Col md={{ span: 4 }}>
              {" "}
              <a href="tel:+254710411246">
                {" "}
                <Button variant="outline-info">+254-710-411-246</Button>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center p-1 mt-3 lead font-weight-light">
            <Col md={{ offset: 2, span: 4 }}>Github: </Col>
            <Col md={{ span: 4 }}>
              <a
                href="https://github.com/JPozlo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info">My Github Account</Button>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center p-1 mt-3 lead font-weight-light">
            <Col md={{ offset: 2, span: 4 }}>LinkedIn: </Col>
            <Col md={{ span: 4 }}>
              {" "}
              <a
                href="https://www.linkedin.com/in/collins-osolo-59654a14b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info">My LinkedIn Profile</Button>
              </a>
            </Col>
          </Row>
        </Container>

        {/* <Container fluid={true}>

          

          <Row className="p-1 mt-3">
            <Col md={{ offset: 2, span: 8 }}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="John Doe"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    placeholder="example@gmail.com"
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    as="textarea"
                    row="5"
                    placeholder="Get in touch"
                  />
                </Form.Group>

                <Row className="justify-content-center">
                  <Col md={{ offset: 2, span: 8 }}>
                    <Form.Group controlId="formButton">
                      <Button
                        disabled={this.state.disabled}
                        variant="primary"
                        type="submit"
                      >
                        Send
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>

                {this.state.emailSent === true && (
                  <p className="d-inline success-msg">
                    Email sent successfully!
                  </p>
                )}
                {this.state.emailSent === false && (
                  <p className="d-inline err-msg">Email not sent!</p>
                )}
              </Form>
            </Col>
          </Row> 
        </Container> */}
      </div>
    );
  }
}

export default ContactPage;

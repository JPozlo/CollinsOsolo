import React, { Component } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

import Content from "../Components/Content";
import MyCarousel from "../Components/Carousel";

export class PortfolioPage extends Component {
  render() {
      return (
        //       <Container fluid={true}>
        //     <Row className="justify-content-center">
        //         <Col md={8} sm={12}>
        //             {this.props.title && <h2 className="display-2 font-weight-bolder">{this.props.title}</h2> }
        //             {this.props.subTitle && <h4 className="display-4 font-weight-light" >{this.props.subTitle}</h4> }
        //             {this.props.text && <h4 className="lead font-weight-light" >{this.props.text.title}</h4> }
        //         </Col>
        //     </Row>

        // </Container>
        <Container fluid={true}>
          <Row className="justify-content-center mt-4">
            <Col md={8} sm={12}>
                <h3 className="display-4 font-weight-light"> My Projects</h3>
            </Col>
          </Row>
          <MyCarousel />
        </Container>
      );
  }
}

export default PortfolioPage;

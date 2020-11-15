import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

export class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col md={8} sm={12}>
                            {this.props.title && <h2 className="display-2 font-weight-bolder">{this.props.title}</h2> }
                            {this.props.subTitle && <h4 className="display-4 font-weight-light" >{this.props.subTitle}</h4> }
                            {this.props.text && <h4 className="lead font-weight-light" >{this.props.text.title}</h4> }
                        </Col>
                    </Row>

                </Container>
    
        )
    }
}

export default Hero


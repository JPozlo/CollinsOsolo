import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

export class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron className="bg-transparent jumbotron-fluid p-0" >
                <Container fluid={true}>
                    <Row className="justify-content-center py-5">
                        <Col md={8} sm={12}>
                            {this.props.title && <h2 className="display-1 font-weight-bolder">{this.props.title}</h2> }
                            {this.props.subTitle && <h4 className="display-4 font-weight-light" >{this.props.subTitle}</h4> }
                            {this.props.text && <h4 className="lead font-weight-light" >{this.props.text}</h4> }
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        )
    }
}

export default Hero


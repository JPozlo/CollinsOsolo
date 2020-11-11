import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

export class Footer extends Component {
    render() {
        return (
            <footer className="mt-6">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0" md={3} sm={12}>
                            Copyright
                            &copy;
                            2020
                            Collins Osolo                
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer

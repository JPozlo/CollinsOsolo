import React from 'react'
import { Container, Row , Col, ProgressBar} from 'react-bootstrap'

function Skills(props) {
     return (
        <Container fluid={true}>
               <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>            
        </Container>
    )
}

export default Skills
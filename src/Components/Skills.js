import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Skills() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
        <ul className="list-group">
                    <li>Kotlin: 85%</li>
                    <li>Java: 80%</li>
                    <li>Dart: 83%</li>
                    <li>C#: 75%</li>
                    <li>Javacript: 95%</li>
                    <li>CSS: 95%</li>
                    <li>HTML: 95%</li>
                    <li>Python: 80%</li>
                    <li>PHP: 70%</li>
                </ul>
            </Row>       
        </Container>
    )
}

export default Skills
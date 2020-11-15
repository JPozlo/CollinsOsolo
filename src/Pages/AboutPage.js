import React from 'react'
import { Row , Col, ProgressBar} from 'react-bootstrap'

import Content from '../Components/Content'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'

function AboutPage(props) {
    const kotlin = 85
    const java = 80
    const html = 98
    const css = 96
    const javascript = 96
    const dart = 83
    const python = 87
    const php = 73
    const c_sharp = 78
   
        return (
          <div>
            <Content>
              <p>
                I'm a full-stack engineer with experience in Kotlin, Java,
                React, Angular, Node JS, PostgreSQL and MySQL.
              </p>
              <p>
                My dream is to one day start a business that will impact
                people's lives positively.
              </p>
              <p>
                My latest project, Commands, is a simple web app that developers
                can use to save commands they routinely use and how to run them,
                for later referral.
              </p>
              <p>
                When not programming, I play basketball or catch up on some
                Formula 1 action.
              </p>
            </Content>

            <Skills className="my-skills">
              <h4 className="display-4 font-weight-bolder">Skills</h4>
              <Row className="justify-content-center">
                <Col md={4} xs={12}>
                  <h3>HTML</h3>
                  <ProgressBar variant="info" now={html} />
                </Col>
                <Col md={4} xs={12}>
                  <h3>CSS</h3>
                  <ProgressBar variant="info" now={css} />
                </Col>
                <Col md={4} xs={12}>
                  <h3>Javascript</h3>
                  <ProgressBar variant="info" now={javascript} />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={4} xs={12}>
                  <h3>Kotlin</h3>
                  <ProgressBar variant="info" now={kotlin} />
                </Col>
                <Col md={4} xs={12}>
                  <h3>Java</h3>
                  <ProgressBar variant="info" now={java} />
                </Col>
                <Col md={4} xs={12}>
                  <h3>Dart</h3>
                  <ProgressBar variant="info" now={dart} />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={4} xs={12}>
                  <h3>Python</h3>
                  <ProgressBar variant="info" now={python} />
                </Col>
                <Col md={4} xs={12}>
                  <h3>C#</h3>
                  <ProgressBar variant="info" now={c_sharp} />
                </Col>
                <Col md={4} xs={12}>
                  <h3>PHP</h3>
                  <ProgressBar variant="info" now={php} />
                </Col>
              </Row>
            </Skills>
          </div>
        );
}

export default AboutPage

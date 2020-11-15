import React from "react";
import { Container, Navbar, Nav, Jumbotron } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./App.css";

import MyFooter from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Collins Osolo",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Hello, I am Collins Osolo",
        subTitle: "I specialize in web and mobile development.",
        text: { title: "Check out my work", path: "/portfolio" },
      },
      about: {
        title: "About me",
      },
      contact: {
        title: "Get in touch!",
        subTitle: "You can reach me through: ",
      },
      portfolio: {
        title: "Work done",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom jumbo-header"
            expand="lg"
          >
            <Navbar.Brand>Collins Osolo</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <HashLink className="nav-link" to="#about">
                  About
                </HashLink>
                <HashLink className="nav-link" to="#portfolio">
                  Portfolio
                </HashLink>
                <HashLink className="nav-link" to="#contact">
                  Contact
                </HashLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Jumbotron
            className="jumbotron-fluid p-0 jumbo-header"
          >
            <div id="about">
              <Route
                id="home"
                path="/"
                exact
                render={() => (
                  <HomePage
                    title={this.state.home.title}
                    subTitle={this.state.home.subTitle}
                    text={this.state.home.text.title}
                  />
                )}
              />
            </div>
            <Route
              exact
              render={() => <AboutPage title={this.state.about.title} />}
            />
          </Jumbotron>

          <div id="portfolio">
            <Route
              exact
              render={() => (
                <PortfolioPage title={this.state.portfolio.title} />
              )}
            />
          </div>

          <div id="contact">
            <Route
              exact
              render={() => (
                <ContactPage
                  title={this.state.contact.title}
                  subTitle={this.state.contact.subTitle}
                />
              )}
            />
          </div>

          <MyFooter />
        </Container>
      </Router>
    );
  }
}

export default App;

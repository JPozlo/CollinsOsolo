import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'Collins Osolo',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Hi there, I am Collins Osolo',
        subTitle: 'I specialize in web and mobile development.',
        text: { title: 'Check out my work', path: '/portfolio'}
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Get in touch',
      },
      portfolio: {
        title: 'Work done'
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Collins Osolo</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text.title} />} />      
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />      
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}  />} />      
          <Route path="/portfolio" exact render={() => <PortfolioPage title={this.state.portfolio.title} />} />      

          <Footer /> 

        </Container>
      </Router>
    );
  }

}

export default App;

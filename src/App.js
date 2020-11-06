import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';

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
                <Link className="nav-link" to="#">About</Link>
                <Link className="nav-link" to="#">Contact</Link>
                <Link className="nav-link" to="#">Portfolio</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer /> 

        </Container>
      </Router>
    );
  }

}

export default App;

import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';
import Hero from '../Components/Hero';

import AboutPage from './AboutPage';

export class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              <Hero
                title={this.props.title}
                subTitle={this.props.subTitle}
                text={this.props.text.title}
              />
          </div>
        );
    }
}

export default HomePage

import React, { Component } from 'react';

import Hero from '../Components/Hero';
import MyCarousel from '../Components/Carousel';

export class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text.title} />

                <MyCarousel />
            </div>
            
        )
    }
}

export default HomePage

import React, { Component } from 'react'

import Card from './Card'
import commands from '../assets/images/commands.png'
import spiq from '../assets/images/spiq.PNG'
import { Container , Row } from 'react-bootstrap'

export class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [
            {
              id: 0,
              title: "Commands Website",
              subTitle: "A website for saving the common CLI commands one uses for easy reference later.",
              imgSrc: commands,
              link: "http://51.132.187.202/",
              selected: false,
            },
            {
              id: 1,
              title: "Spiq Android App",
              subTitle: "An android app that gives its users access to the various Spiq services.",
              imgSrc: spiq,
              link:
                "https://play.google.com/store/apps/details?id=com.missolova.spiq&hl=en_US&gl=US",
              selected: false,
            },
          ],
        };
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={( e => this.handleCardClick(item.id, e))} key={item.id}></Card>
        })
    }

    render() {
        return (
          <Container fluid={true}>
            <Row className="justify-content-around">
              {this.makeItems(this.state.items)}
            </Row>
          </Container>
        );
    }
}

export default Carousel

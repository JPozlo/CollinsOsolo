import React, { Component } from 'react'

import Card from './Card'
import local from '../assets/images/batsy.jpg'
import devgrub from '../assets/images/dave.jpg'
import youtube from '../assets/images/dellinspiron.jpg'
import { Container , Row } from 'react-bootstrap'

export class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'First Project',
                    subTitle: 'The project details',
                    imgSrc: local,
                    link: '/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Second Project',
                    subTitle: 'The project details',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Third Project',
                    subTitle: 'The project details',
                    imgSrc: youtube,
                    link: 'https://devgrub.com',
                    selected: false
                },
            ]
        }
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
        )
    }
}

export default Carousel

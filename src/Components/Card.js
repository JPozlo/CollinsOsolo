import React, { Component } from 'react'

import CardInfo from './CardInfo'

export class Card extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div onClick={(e) => this.props.click(this.props.item)} className="d-inline-block osolo-card">
                <img className="osolo-card-image" src={this.props.item.imgSrc} alt={this.props.item.imgSrc}></img>
                { this.props.item.selected && <CardInfo title={this.props.item.title} subTitle={this.props.item.subTitle} link={this.props.item.link} />}
            </div>
        )
    }
}

export default Card

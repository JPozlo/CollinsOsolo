import React, { Component } from 'react'
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {
      const style = useSpring({
            opacity: 1, 
            from: {opacity: 0}
        })

    return (
        <animated.div className="osolo-card-info" style={style}>
            <p className="osolo-card-title">{props.title}</p>
            <p className="osolo-card-subtitle" >{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" >View Project</a>
        </animated.div>

    )
}

export default CardInfo

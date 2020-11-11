import React from 'react'

import Content from '../Components/Content'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'

function AboutPage(props) {
   
        return (
            <div>
                <Hero title={props.title} subTitle="My subtitle" text="My text" />

                <Skills>

                </Skills>
                
                <Content>
                    <p>Hello, my name is Collins Osolo, I'm a full-stack engineer with experience in Kotlin, Java, React, Angular, Node JS, PostgreSQL and MySQL.</p>

                    <p>My dream is to one day start a business that will impact people's lives positively.</p>

                    <p>My latest project, Commands, is a simple web app that developers can use to save commands they routinely encounter and how to run them, for later referral.</p>
                    <p>
                        When not programming, I play basketball or catch up on some Formula 1 action.
                    </p>
                </Content>
            </div>
        )
}

export default AboutPage

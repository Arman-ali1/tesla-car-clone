import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';
import Footer from './Footer';

function Home() {

    document.title = "Electric Cars, Solar & Clean Energy | Tesla";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section title="Model 3" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="LEARN MORE" backgroundImg="model-3.jpg" arrow="true"/>
            </Content>
            <Content>
                <Section title="Model Y" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="LEARN MORE" backgroundImg="model-y.jpg"/>
            </Content>
            <Content>
                <Section title="Model S" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="LEARN MORE" backgroundImg="model-s.jpg"/>
            </Content>
            <Content>
                <Section title="Model X" desc="Order Online for " link="Touchless Delivery" leftbtn="CUSTOM ORDER" rightbtn="LEARN MORE" backgroundImg="model-x.jpg"/>
            </Content>
            <Content>
                <Section title="Accessories" leftbtn="SHOP NOW" backgroundImg="accessories.jpg"/>
                <Footer/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home
import React from "react";
import styled from "styled-components";
import Section from "./Section";
import carData from "../data"

const sectionElements = carData.map(items => {
    return (
        <Section key={items.id} {...items} />
    )
})



export default function Home() {


    return (
        <Container>
            {sectionElements}
        </Container>
    )
}

// we are using <Container> as a custom styled component
//and in that component we can write our css by using the 
//tagged template literal.

const Container = styled.section`
    height:100vh;  
    width: 100vw;
   `

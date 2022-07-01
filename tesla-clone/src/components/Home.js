import React from "react";
import styled from "styled-components";
import Section from "./Section";



export default function Home() {


    return (
        <Container>
            <Section />
        </Container>
    )
}

// we are using <Container> as a custom styled component
//and in that component we can write our css by using the 
//tagged template literal.

const Container = styled.section`
    height:100vh;  
   `

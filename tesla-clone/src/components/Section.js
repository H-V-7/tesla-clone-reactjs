import React from "react";
import styled from "styled-components";

export default function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online For Touchless Delivery</p>
            </ItemText>
            <ButtonGroup>
                <button>Custom Button</button>
            </ButtonGroup>
        </Wrap>
    )
}
const Wrap = styled.div`
    height:100vh;
    width:100vw;
    background-image: url("./images/model-s.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`
const ItemText = styled.div`
    height:auto;
    text-align: center;
`
const ButtonGroup = styled.div`
    

`
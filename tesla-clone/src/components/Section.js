import React from "react";
import styled from "styled-components";
import "../index.css"
import Fade from "react-reveal/Fade";

export default function Section(props) {
    return (
        <Wrap bgImage={props.image}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>

                <Button>

                    <ButtonGroup>
                        <LeftButton>
                            Custom Button
                        </LeftButton>
                        <RightButton>
                            Existing Inventory
                        </RightButton>
                    </ButtonGroup>
                    <DownArrow src="./images/down-arrow.svg" />
                </Button>
            </Fade>
        </Wrap>
    )
}

const Wrap = styled.div`
    height:100vh;
    width:100vw;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
`
const ItemText = styled.div`
    display:flex;
    flex-direction: column;
    row-gap:5px;
    padding:80px;
    text-align:center;
    justify-content: center;
    align-items: center;
    margin-top:50px;
    
`
const Button = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    
`
const ButtonGroup = styled.div`
   display: flex;
   gap:50px;
    
`
const LeftButton = styled.div`
    color:white;
    height:50px;
    width:250px;
    background-color: rgba(23,26,32,0.8);
    border-radius: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    opacity:85%;
    text-transform:uppercase;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: ghostwhite;
    color:black;
`
const DownArrow = styled.img`
    width:50px;
    height: 50px;
    display: block;
    margin-bottom: 20px;
    animation-name: animateArrow;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
`


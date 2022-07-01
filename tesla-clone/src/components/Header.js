import React from "react";
import styled from "styled-components";


export default function Header(props) {
    const [navToggle, setNavToggle] = React.useState(false);


    return (
        <NavBar>
            <a href="#">
                <Logo src="/images/logo.svg" alt="Tesla Logo" />
            </a>
            <Menu id="menu-items">
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar roof</a>
                <a href="#">Solar Panel</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <a href="#">Menu</a>
            </RightMenu>
            <BurgerNav>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Existing Inventory</a>
                <a href="#">Used Inventory</a>
                <a href="#">Trade-in</a>
                <a href="#">Cyber Truck</a>
                <a href="#">Roadster</a>
                <a href="#">Solar roof</a>
                <a href="#">Solar Panel</a>
            </BurgerNav>
        </NavBar>
    )
}

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 15px;
    position: fixed;
    z-index: 1;
`
const Logo = styled.img`
    padding:10px;
    margin: auto;
`

const Menu = styled.div`
    display: flex;
    list-style: none;
    margin-left: auto;
    
    gap:15px;
    justify-content: center;
    font-weight: bolder;
    //we can use this to target the child
     a {
    text-decoration: none;
    }
    @media only screen and (max-width:786px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 15px;
    font-weight: bolder;
    margin-left: auto;
    
    a{
        text-decoration: none;
    }
    img{
        display: none;
    }
    @media only screen and (max-width:786px){
        img{
            display: block;
            width:30px;
            height:30px;
            font-weight: bolder;
        }
    }
`
const BurgerNav = styled.div`
    display: none;
    /* display:flex;
    flex-direction: column;
    align-items: flex-start; */
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    background-color: white;
    width: 300px;
    padding:10px;
    row-gap: 5px;
    a{  
        font-weight: bolder;
        width:100%;
        padding: 20px;
        border-bottom: solid grey;
        text-decoration: none;
    }
`
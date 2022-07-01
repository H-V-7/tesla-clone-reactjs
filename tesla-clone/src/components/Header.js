import React from "react";
import styled from "styled-components";

export default function Header() {
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
            </Menu>

        </NavBar>
    )
}

const NavBar = styled.nav`
    min-height:60px;
    width: 100vw;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding: 20px;
    position: fixed;

`
const Logo = styled.img``

const Menu = styled.div`
    list-style: none;
    display: flex;
    gap:15px;
    margin-left: auto;
`
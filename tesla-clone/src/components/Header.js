import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <NavBar>
            <h1>NAV BAR</h1>
        </NavBar>
    )
}

const NavBar = styled.nav`
    height:auto;
`
import React from "react";

import styled from "styled-components";


function NavBar () {
    const Header = styled.section`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: #FFFCF7;
        margin: -9px;
    `
    const Name = styled.a`
        text-decoration: none;
        font-size: 2.5em;
        font-family: 'Vollkorn', serif;
        color: #738290;
        margin: 2%;
    `
    const Links = styled.section`
        margin: 3%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `
    const Link = styled.a`
        font-family: 'Vollkorn', serif;
        text-decoration: none;
        a:hover {
            color: red;
        };
        display: flex;
        margin: 2%;
        color: #738290;
    `
    return (
        <Header>
            <Name href="/">Rebecca Barrett</Name>
            <Links>
                <Link href="/projects">Projects</Link>
                <Link>|</Link>
                <Link href="/contact">Contact</Link>
            </Links>
        </Header>
        
    )
}

export default NavBar;
import React from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';

export default ({ light = false, font, toggleNavbar, selectItem, selectedItem, cms = {} }) => {
    return (
        <Navbar dark={!light} light={light} expand className="NavigationItems position-static">
            <Container>
                <Collapse navbar>
                    <Nav className="d-block d-xl-flex align-items-center" navbar>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/" icon="fad fa-home">{cms.menu.home}</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/results">{cms.menu.results}</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/faq">{cms.menu.faq}</NavigationItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
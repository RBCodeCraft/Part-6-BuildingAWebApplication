
import * as React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export interface INavBarProps {
    title: string;
}

export function NavBar(props: INavBarProps) {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>{props.title}</Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/partners">Partners</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem href="/login">Log In</NavItem>
            </Nav>
        </Navbar>
    );
} 
import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import { Activity } from '../models/activity';

interface Props{
    formOpen: () => void;
}

export default function NavBar({formOpen}: Props) {
    return (
        <Navbar variant="dark" fixed="top" className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="/assets/logo.png" alt="logo" width="30"
                         height="30" className="d-inline-block align-top" style={{marginRight:"10px"}}/>
                    Reactivities
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Navbar.Brand>Activities</Navbar.Brand>
                    <Button onClick={()=>formOpen()} variant="success">Create Activity</Button>{' '}
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}
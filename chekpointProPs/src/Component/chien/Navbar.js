import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


const Nabar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">About Dogs </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"></Nav.Link>
                    <Nav.Link href="#features">List of dogs</Nav.Link>
                    <Nav.Link href="#pricing">Dogs</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Nabar

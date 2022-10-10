import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarespace } from '@fortawesome/free-brands-svg-icons';

const Navigationbar = () => {
    return (

        <div>
            {/*  */}
            <Navbar bg="light" expand="lg" fixed="top">
                <Container fluid>

                    {/* nav brand */}
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faSquarespace} className="me-3" />
                        Student Repo
                    </Navbar.Brand>

                    {/* -------- nav content ------------------ */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 pe-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/notes">Notes</Nav.Link>
                        </Nav>

                        <div className="container-flex m-1">
                            <Button variant="outline-success me-2" href="/sign-in">Sign in</Button>
                            <Button variant="outline-secondary me-2" href='/sign-up'>Sign up</Button>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
};

export default Navigationbar;
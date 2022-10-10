import React from 'react'
import { Navbar, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "../style/Notes.css";



const Notes = () => {


    let navigate = useNavigate();

    function handleClick() {
        navigate("/notes-uplode")
    }

    return (
        <div className='NotesSection'>

            <Navbar bg="light" expand="lg">
                <Container fluid>

                    <div className='d-flex sort_add'>

                        <div className='sort_sec'>
                            <NavDropdown title="Sort" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="https://www.facebook.com/">IT</NavDropdown.Item>
                                <NavDropdown.Item href="https://twitter.com/">
                                    CS
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    EXTC
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        </div>

                    {/* search bar */}
                    <div className='container'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>

                            <div className='add_sec'>
                            <Button variant="outline-success" onClick={handleClick}><FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </div>
                        </Form>

                        
                    </div>

                    {/* sort section ------------------------------------------------ */}
                    {/* <div className='d-flex sort_add'>
                        <div className='add_sec'>
                            <Button variant="outline-success" onClick={handleClick}><FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </div>

                    </div> */}

                </Container>
            </Navbar>

        </div>

    );
};


export default Notes;
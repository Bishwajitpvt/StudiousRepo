import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "../style/Notes.css";

import FileStructure from '../components/FileStructure';



const Notes = () => {
    const [noteArray, setNoteArray] = useState([]);
    const [branch, setBranch] = useState("All");
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch("http://localhost:3001/allNotes");
            const resJson = await response.json();
            console.log(resJson);
            setNoteArray(resJson);
        }
        fetchNotes();
    },[]);

    let navigate = useNavigate();

    function handleClick() {
        navigate("/notes-uplode")
    }

    async function filterBranch(e) {
        setBranch(e.target.innerText);
            const response = await fetch("http://localhost:3001/notes/"+e.target.innerText.toLowerCase());
            const resJson = await response.json();
            console.log(resJson);
            setNoteArray(resJson);
    }

    return (
        <>
            <div className='NotesSection'>

                <Navbar bg="light" expand="lg">
                    <Container fluid>

                        <div className='d-flex sort_add'>

                            <div className='sort_sec'>
                                <NavDropdown title="Sort" id="navbarScrollingDropdown">
                                    <NavDropdown.Item onClick={filterBranch}>
                                        <span >IT</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={filterBranch}>
                                        <span >CS</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={filterBranch}>
                                        <span >EXTC</span>
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

            
            {/*  ------------- display notes ---------- */}
            <div>
                <h1>{branch}</h1>
                <Container>
                    {
                        noteArray.map(note => {
                            return <FileStructure
                                fileName={note.fileName}
                                description={note.description}
                                uploadFile={note.uploadFile}
                                branch={note.branch}
                            />
                        })
                    }
                    
                </Container>
            </div>

            



        </>
    );
};


export default Notes;
import React from "react";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import { MDBRadio } from 'mdb-react-ui-kit';

import '../style/Notesuplode.css';


const NotesUplode = () => {

    // to roll back to previous page ------------------------------
    let navigate = useNavigate();
    function handleClick() {
        navigate(-1)
    }

    return (


        // main body ---------------------
        <div className="notes_uplode_body">

            <div className="main_container">

                <Card className="uplode_card">
                    <Container className="ntup_header">
                        <Row>
                            <Col sm={8}>
                                <Card.Title style={{ fontSize: '2rem', fontWeight: '600' }}>Uplode Document</Card.Title>
                            </Col>
                            <Col sm={4}>
                                <Button variant="outline-success" style={{  }} onClick={handleClick}><FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </Col>
                        </Row>
                    </Container>




                    {/* form uplode */}
                    <Form className="uplode_form">
                        <Row>
                            <Col>
                                <Form.Label>File Name</Form.Label>
                            </Col>
                            <Col xs={8}>
                                <Form.Control type="text" placeholder="Enter file name" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Description</Form.Label>
                            </Col>
                            <Col xs={8}>
                                <Form.Control type="text" placeholder="Enter file description" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Add File</Form.Label>
                            </Col>
                            <Col xs={8}>
                                <Form.Control type="file" />
                            </Col>
                        </Row>

                        {/* <Form>
                            {['radio'].map((type) => (

                                <div key={`default-${type}`}>
                                    <Form.Check

                                        type={type}
                                        id={`default-${type}`}
                                        label={'Public'}
                                    />
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={'Private'}
                                    />
                                </div>
                            ))}
                        </Form> */}

                        <div className="radio_grp">
                            <div class="form-check" style={{ margin: '.5rem', }}>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Public
                                </label>
                            </div>

                            <div class="form-check" style={{ margin: '.5rem', }}>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Private
                                </label>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <Button variant="outline-success" size="lg" type='submit'>Uplode</Button>
                        </div>

                    </Form>
                </Card>

            </div>
        </div>

    );
};



export default NotesUplode;
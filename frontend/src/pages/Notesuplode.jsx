import React from "react";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import { MDBRadio } from 'mdb-react-ui-kit';

import '../style/Notesuplode.css';


const NotesUplode = () => {

    function extractCookieByName(name, cookie) {
        let cookieArray = cookie.split("; ");
        let fliteredArray = cookieArray.filter(ck => ck.indexOf(name) >= 0);
        let keyValue = fliteredArray[0].split("=");
        return keyValue[1];
    }

    const loggedInUser = JSON.parse(extractCookieByName("loggedIn", document.cookie));
    console.log(loggedInUser);
    // to roll back to previous page ------------------------------
    let navigate = useNavigate();
    function handleClick() {
        navigate(-1)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        alert("Uploded")
        const {
            fileName,
            description,
            branch,
            uploadFile
        } = event.target;

        const data = new FormData();
        console.log(branch.value)
        data.append("UserID", loggedInUser._id);
        data.append("fileName", fileName.value);
        data.append("branch", branch.value)
        data.append("description", description.value);
        data.append("uploadFile", uploadFile.files[0]);
        try {
            const fetchResponse = await fetch("http://localhost:3001/noteUpload", {
                method: "POST",
                body: data
            });
            const jsonResponse = await fetchResponse.json();
            console.log(jsonResponse);
        } catch (error) {
            console.log(error);
        }

    }

    return (


        // main body ---------------------
        <div className="notes_uplode_body" style={{backgroundColor: '#161623', height:'100vh'}}>

            <div className="main_container mt-5 pt-5" style={{position:'relative'}}>

                <Card className="uplode_card " >
                    <Container className="ntup_header">
                        <Row>
                            <Col sm={8}>
                                <Card.Title style={{ fontSize: '2rem', fontWeight: '600' }}>Uplode Document</Card.Title>
                            </Col>
                            <Col sm={4}>
                                <Button variant="outline-success" style={{}} onClick={handleClick}><FontAwesomeIcon icon={faXmark} />
                                </Button>
                            </Col>
                        </Row>
                    </Container>


                    {/* form uplode */}
                    <Form onSubmit={handleOnSubmit} className="uplode_form">
                        <Row>
                            <Col>
                                <Form.Label>File Name</Form.Label>
                            </Col>
                            <Col xs={8}>
                                <Form.Control type="text" name="fileName" placeholder="Enter file name" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Branch</Form.Label>
                            </Col>
                            <Col xs={8}>
                                <Form.Control type="text" name="branch" placeholder="Enter branch" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Description</Form.Label>
                            </Col>
                            <Col xs={8}>
                                <Form.Control type="text" name="description" placeholder="Enter file description" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Add File</Form.Label>
                            </Col>
                            <Col xs={8}>
                                <Form.Control name="uploadFile" type="file" />
                            </Col>
                        </Row>



                        {/* <div className="radio_grp">
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
                        </div> */}

                        <div className="d-grid gap-2">
                            <Button variant="outline-success" size="lg" type='submit' >Uplode</Button>
                        </div>

                    </Form>
                </Card>

            </div>
        </div>

    );
};



export default NotesUplode;
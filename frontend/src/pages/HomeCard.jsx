import React from "react";
import "../style/Homecard.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomeCard = () => {
    return (
        <div className="card_container" >
            <Container>

                {/* card header title */}
                <div className="container-flex card_header">
                    <h1>Features</h1>
                </div>

                {/* card layout */}
                <Row>

                    <Col>
                        <Card >
                            <Card.Img variant="top" src={require('../images/card_file.png')} />
                            <Card.Body>
                                <Card.Title>Explore</Card.Title>
                                <Card.Text>
                                    Explore the vast information/knowledge in the notes section and refer to the best information of all.
                                </Card.Text>
                                <Button href="/notes">Explore</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card >
                            <Card.Img variant="top" src={require('../images/card_signIU.png')} />
                            <Card.Body>
                                <Card.Title>Sign Up</Card.Title>
                                <Card.Text>
                                    Sign up to unlock various features and share your write-up and access notes with the community.
                                </Card.Text>
                                <Button href="/sign-in">Sign Up</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card >
                            <Card.Img variant="top" src={require('../images/card_uplode.png')} />
                            <Card.Body>
                                <Card.Title>Upload</Card.Title>
                                <Card.Text>
                                    Simple and user-friendly UI to upload notes into the community feed section. Share among the vast community .
                                </Card.Text>
                                <Button href="/notes-uplode">Upload</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};


export default HomeCard;
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
                                <Card.Title>Card Title 1</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card >
                            <Card.Img variant="top" src={require('../images/card_signIU.png')} />
                            <Card.Body>
                                <Card.Title>Card Title 2</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card >
                            <Card.Img variant="top" src={require('../images/card_uplode.png')} />
                            <Card.Body>
                                <Card.Title>Card Title 3</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};


export default HomeCard;
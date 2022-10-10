import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='mt-5 sign-body'>
            <Container>
                <Row>
                    <Col>
                        <div class="col-lg-6 d-flex justify-content-center">
                            <div class="card">
                                <div class="card-body text-center">
                                    <form>
                                        <h4>Sign In
                                            {/* <br /><small class="text-muted">Studious Repo Community.</small> */}
                                        </h4>
                                        <hr />
                                        
                                        <div className="mb-3">
                                            <label>Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter password"
                                                size="8"
                                            />
                                        </div>
                                       


                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">
                                                Sign In
                                            </button>
                                        </div>
                                        <p className="signin text-center"><hr />
                                            Already registered <a href="/sign-in">sign up?</a>
                                        </p>
                                        <h6 className="forgot-password text-center"><a href="/forgot-password">Forgot Password</a></h6>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Login;
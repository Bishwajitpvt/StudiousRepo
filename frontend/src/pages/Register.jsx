import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import '../style/Register.css';

const Register = () => {
    return (

        <div className='mt-5 sign-body'>
            <Container>
                <Row>
                    <Col>
                        <div class="col-lg-4 d-flex justify-content-center">
                            <div class="card">
                                <div class="card-body text-center">
                                    <form>
                                        <h4>Sign Up
                                        </h4>
                                        <hr />
                                        <div className="mb-3">
                                            <label>First name</label>
                                            <input
                                                id="first-name"
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                        {/* <div className="mb-3">
                                                <lable>Select Department</lable>
                                                <select className='form-control'>
                                                    <option value="1">IT</option>
                                                    <option value="2">Computer</option>
                                                    <option value="3">Electric</option>
                                                    <option value="3">Electronic</option>
                                                    <option value="3">Instru</option>
                                                </select>
                                            </div> */}
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
                                        <div className="mb-3">
                                            <label>Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter confirm password"
                                                size="8"
                                            />
                                        </div>


                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">
                                                Sign Up
                                            </button>
                                        </div>
                                        <p className="signin text-center"><hr />
                                            Already registered <a href="/sign-in">sign in?</a>
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


export default Register;
import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import '../style/Register.css';
// import { useState } from "react";

const Register = (props) => {

    const handlesubmit = async (event) => {
        event.preventDefault();

        const {
            first_name,
            last_name,
            email,
            password,
            confirm_password
        } = event.target;


        // checking
        const response = await fetch("http://localhost:3001/sign-up", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                password: password.value,
                confirm_password: confirm_password.value
            })
        });

        if (response.status === 200) {
            const resJson = await response.json();
            alert("Successfully Registered");
            console.log("Response: ");
            console.log(resJson);

        } else {
            const resJson = await response.json();
            console.log(resJson.error.message);
            alert(resJson.error.message);
            console.log(resJson.error);
        }

    }



    return (

        <div className='mt-5 sign-body'>
            <Container>
                <Row>
                    <Col>
                        <div class="col-lg-4 d-flex justify-content-center">
                            <div class="card">
                                <div class="card-body text-center">
                                    <form onSubmit={handlesubmit}>
                                        <h4>Sign Up
                                        </h4>
                                        <hr />
                                        <div className="mb-3">
                                            <label>First name</label>
                                            <input
                                                name="first_name"
                                                type={"text"}
                                                className="form-control"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Last name</label>
                                            <input
                                                name="last_name"
                                                type={"text"}
                                                className="form-control"
                                                placeholder="Last name" />
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
                                                name="email"
                                                type={"email"}
                                                className="form-control"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input
                                                name="password"
                                                type={"password"}
                                                className="form-control"
                                                placeholder="Enter password"
                                                size="8"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Confirm Password</label>
                                            <input
                                                name="confirm_password"
                                                type={"password"}
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
                                        {/* <h6 className="forgot-password text-center"><a href="/forgot-password">Forgot Password</a></h6> */}
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
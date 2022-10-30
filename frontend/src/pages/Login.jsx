import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import '../style/Login.css';

// import { useContext } from "react";
// import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";


const Login = () => {
    
    
// const currentUser = useContext(CurrentUserContext);
    // console.log(currentUser);
    
    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const { email, password, } = event.target;
        const loginResponse = await fetch("http://localhost:3001/sign-in", {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        });


        if (loginResponse.status === 200) {
            const ResJson = await loginResponse.json();
            console.log(ResJson);
            document.cookie = "loggedIn=" + JSON.stringify(ResJson);
            alert("Logged In");
             window.location = "/";
        } else {
            const resJson = await loginResponse.json();
            console.log(resJson.error);
            alert(resJson.error);
        }
    }
    if (document.cookie.indexOf("loggedIn") >= 0) {
        window.location = "/";
        return <div></div>
    } else {
        return (
            <div className='loginBody'>
                <Container>
                    <Row>
                        <Col>
                            <div class="col-lg-6 d-flex mt-5 justify-content-center">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <form onSubmit={handleOnSubmit}>
                                            <h4>Sign In
                                                {/* <br /><small class="text-muted">Studious Repo Community.</small> */}
                                            </h4>
                                            <hr />

                                            <div className="mb-3">
                                                <label className="mb-2">Email address</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="mb-2">Password</label>
                                                <input
                                                    name="password"
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
                                            <p className="signup_txt text-center"><hr />
                                                Already registered ??<a href="/sign-up" className="ms-2">sign up</a>
                                            </p>
                                            {/* <p className="signup_txt text-center">
                                                <a href="/forgot-password">Forgot Password</a>
                                            </p> */}

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
    }

    
};


export default Login;
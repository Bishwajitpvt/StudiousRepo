import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { useContext, useEffect } from "react";
import { createContext } from "react";

import "../style/Profile.css"
import { useState } from "react";


const Profile = (props) => {

    const [profile, setProfile] = useState({});
    const [profilePicture, setProfilePicture] = useState();


    function extractCookieByName(name, cookie) {
        let cookieArray = cookie.split("; ");
        let fliteredArray = cookieArray.filter(ck => ck.indexOf(name) >= 0);
        let keyValue = fliteredArray[0].split("=");
        return keyValue[1];
    }
    const loggedInUser = JSON.parse(extractCookieByName("loggedIn", document.cookie));

    // const CurrentUserContext = createContext();
    // const { state, setState } = useContext(CurrentUserContext);

    useEffect(() => {
        const fetchUser = async () => {
            const userResponse = await fetch("http://localhost:3001/user/" + loggedInUser._id);
            const resJson = await userResponse.json();
            if (userResponse.status === 200) {
                setProfile(resJson);
                console.log(resJson);
            } else {
                alert("User not found");
                console.log(resJson);
            }
        };
        fetchUser();
    }, []);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                setProfilePicture({ data: e.target.result, name: event.target.files[0].name });
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    const handleUpdate = async (event) => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const profilePictureInput = event.target.profilePictureInput.files[0]
        const data = new FormData();
        console.log(profilePicture);
        data.append("UserID", loggedInUser._id);
        data.append("phone", phone);
        data.append("profilePicture", profilePictureInput);
        alert("profile updated")
        const updateResponse = await fetch("http://localhost:3001/update-profile", {
            method: "POST",
            body: data
        });
    }

    return (

        <>
            <div style={{ backgroundColor: '#161623' }}>

                <section class="vh-100" style={{ backgroundColor: '#161623' }}>
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col col-lg-6 mb-4 mb-lg-0">
                                <div class="card mb-3" style={{ borderRadius: '.5rem' }}>

                                    <form onSubmit={handleUpdate} class="row g-0  container" style={{ width: '100%' }}>

                                        {/* -------------  profile image section  ----------------------------  */}

                                        <div class="col-md-4 gradient-custom text-center text-white"
                                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>

                                            <label for="profileImageInput"> <img src={profilePicture ? profilePicture.data : (profile.profilePicture ? profile.profilePicture : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp")}
                                                alt="Avatar" class="img-fluid my-5" style={{ width: '90px' }} /></label>

                                            <input onChange={handleImageChange} type="file" name="profilePictureInput" id="profileImageInput" style={{ display: "none" }} />

                                            <h5>{profile.first_name}</h5>
                                            {/* <p>Web Designer</p> */}

                                            <div className="container">
                                                <FontAwesomeIcon icon={faPenToSquare}
                                                    style={{ width: '25px', height: '25px', marginTop: '1.3rem', marginInlineEnd: '20px' }} />

                                                <input type="submit" value="Update" className="btn" />
                                            </div>

                                        </div>


                                        <div class="col-md-8 ">
                                            <div class="card-body p-4">

                                                <h6>Information</h6>
                                                <hr class="mt-0 mb-4" />

                                                <div class="row pt-1">
                                                    {/*  ===============  personal Infromation ==========================  */}
                                                    <div class="col-6 mb-3">
                                                        <h6>First Name</h6>
                                                        <p class="text-muted">{profile.first_name}</p>
                                                    </div><div class="col-6 mb-3">
                                                        <h6>Last Name</h6>
                                                        <p class="text-muted">{profile.last_name}</p>
                                                    </div>

                                                    <div class="col-6 mb-3">
                                                        <h6>Email</h6>
                                                        <p class="text-muted">{profile.email}</p>
                                                    </div>
                                                    <div class="col-6 mb-3">
                                                        <h6>Phone</h6>
                                                        {/* <p class="text-muted">123 456 789</p> */}
                                                        <input placeholder="phone" name="phone" value={profile.phone}
                                                            style={{ border: 'none', backgroundColor: '#2E2E39', color: "grey", marginLeft: '20px', textDecoration: 'none' }}></input>
                                                    </div>
                                                </div>


                                                <h6>Uploads</h6>
                                                <hr class="mt-0 mb-4" />
                                                <div class="row pt-1">
                                                    <div class="col-6 mb-3">
                                                        <h6>Notes Uploaded</h6>
                                                        <p class="text-muted">{profile.count}</p>
                                                    </div>

                                                </div>


                                                {/* <div class="d-flex justify-content-start">
                                                    <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                                                    <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                                                    <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};



export default Profile;
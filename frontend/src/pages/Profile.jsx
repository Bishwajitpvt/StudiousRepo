import React from "react";
import "../style/Profile.css"


const Profile = () => {
    return(
      
            <div class="container mt-4 mb-4 p-3 d-flex justify-content-center profile_body"
            style={{marginTop:'58px', backgroundColor: '#161623'}}>

                <div class="card p-4">
                    <div class=" image d-flex flex-column justify-content-center align-items-center">

                        
                            <img src="data:image/png;base64,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" height="200" width="130" />
                        
                        <span class="name mt-3">Aniruddha Thakur</span>
                        <span class="idd">@its_me_ani</span>

                        {/* <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                        <span class="idd1">Oxc4c16a645_b21a</span> <span><i class="fa fa-copy"></i></span>
                    </div> */}

                        <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                            <span class="number">53 <span class="follow">Notes Upload</span></span>
                        </div>

                        <div class=" d-flex mt-2">
                            <button class="btn1 btn-dark">Edit Profile</button>
                        </div>


                        {/* <div class="text mt-3" align="center"> <span>Aniruddha Thakur is a creator of Team Leader x bold graphics and digital artwork.<br /><br /> Artist/ Creative digital artist / Work On Adobe Illustrator and Ibis Paint. </span> </div> */}

                        {/* <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span>

                        <span><i class="fa fa-facebook-f"></i></span>
                        <span><i class="fa fa-instagram"></i></span>
                        <span><i class="fa fa-linkedin"></i></span>
                    </div>

                    <div class=" px-2 rounded mt-4 date ">
                        <span class="join">Joined October,2022</span>

                    </div> */}

                    </div>
                </div>
            </div>
      
    );
};



export default Profile;
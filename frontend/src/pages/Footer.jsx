import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faSquarespace } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                {/* social media icons */}
                <div>
                    <a href='https://www.facebook.com/' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href='https://twitter.com/' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    {/* <a href='https://www.google.com/' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faGoogle} />
                    </a> */}
                    <a href='https://www.instagram.com/' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='https://www.linkedin.com/' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='https://github.com/' className='me-4 text-reset'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>

            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-3'>
                                {/* <MDBIcon icon="gem" className="me-3" /> */}
                                <FontAwesomeIcon icon={faSquarespace} className="me-3" />
                                StudiousRepo
                            </h6>
                            <p>
                                Help Students to have impact within the community they are part of.
                            </p>

                            <h6 className='text-uppercase fw-bold mb-3'>
                                {/* <MDBIcon icon="gem" className="me-3" /> */}
                                Team Members
                            </h6>
                            <p>
                                Bishwajit , Aniruddha , Nishant , Raj
                            </p>
                        </MDBCol>

                        
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-2'>Contact</h6>
                            <p>
                                <FontAwesomeIcon icon={faHome} className="me-2"/>
                                Navi Mumbai - 400709,Maharashtra.
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className="me-2"/>
                                studiousrepo@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className="me-2"/> + 01 234 567 88
                            </p>

                        </MDBCol>

                    </MDBRow>
                    
                </MDBContainer>
            </section>

            {/* copyright */}
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold' href='/'>
                    StudiousRepo.com
                </a>
            </div>

        </MDBFooter>
    );  
};



export default Footer;
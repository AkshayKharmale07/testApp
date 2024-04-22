

import { Row, Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Meta from './shared/Meta';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../images/banner.jpg'
import { Link } from "react-router-dom";
import Globalpresence from './page/Globalpresence';


function Contact() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    function contactform(data) {
        console.log(data)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_67vbd5r', 'template_anmy9jj', form.current, 'hJfE2ougHSy0vpZER')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <>
            <Meta title="Contact Us" />

            <section className="section-divider inner-banner Background" style={{ backgroundImage: `url("../images/banner.jpg")` }}>
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="inner-banner-dsc text-center">
                                    <h1 className="banner-heading text-center">Contact <span>Us</span></h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}

            <div className="section-divider">
                <div className="inner-banner-form-block">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="inner-banner-form mt-0">
                                    <div className="services-image">
                                        <img src="images/contact.png" className="img-fluid" alt="image" />
                                    </div>
                                </div>
                                <div className="inner-banner-form mt-0 d-none">
                                    <h2 className="heading">Contact Us by submitting <br className="d-block d-md-none" />the form below:</h2>
                                    {/* <form method="post" ref={form} onSubmit={handleSubmit(contactform)}> */}
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row className=" ">

                                            <Col md="12">
                                                <div className="form-group">
                                                    <input className="form-control" id="name" type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name*" />
                                                    <span class="error-msg">{errors.name?.message}</span>
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <div className="form-group">
                                                    <input className={`form-control ${errors.phone ? "invalid" : ""}`} id="phone" type="text" {...register("phone", { required: "Please Enter Phone No." })} placeholder="Phone*" />
                                                    <span class="error-msg">{errors.phone?.message}</span>
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <div className="form-group">
                                                    <input className={`form-control ${errors.email ? "invalid" : ""}`} id="Emai" type="email" {...register("email", { required: "Please Enter Email" })} placeholder="Email*" />
                                                    <span class="error-msg">{errors.email?.message}</span>
                                                </div>
                                            </Col>

                                            <Col md="12">
                                                <div className="form-group">
                                                    <textarea className={`form-control ${errors.message ? "invalid" : ""}`} Rows="5" id="Emai" type="email" {...register("message", { required: "Please Select Message" })} placeholder="Message*" />
                                                    <span class="error-msg">{errors.message?.message}</span>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="form-group text-center mb-0">
                                                    <button type="submit" value="Send" className="btn-main">Submit</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="contact-address-single">
                                    {/* <Row>
                                        <Col md="6">
                                            <div className="contact-icon-desc-area">
                                                <div className="contact-icon"> <i className="fas fa-phone-intercom"></i> </div>
                                                <div className="contact-desc">
                                                    <p><strong>Phone Number:</strong> </p>
                                                    <p><Link to="tel:+97143626779" title="Phone">+971 4 36267 79</Link></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div className="contact-icon-desc-area">
                                                <div className="contact-icon"> <i className="fas fa-mailbox"></i> </div>
                                                <div className="contact-desc">
                                                    <p><strong>Email:</strong> </p>
                                                    <p><Link to="mailto:info@rbktechnologies.com" title="Email">info@rbktechnologies.com</Link></p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row> */}


                                    <div className="contact-icon-desc-area">
                                        <div className="contact-icon">
                                            <i className="fas fa-globe"></i>
                                        </div>
                                        <div className="contact-desc">
                                            <p><u>Headquarter:</u></p>
                                            <p><strong>RBK Technologies LLC</strong></p>
                                            <p> 809 Cuesta Dr Suite B PMB 1133 
                                                 Mountain View, San Francisco
                                                California 94040<br /> United States.</p>
                                            <p><a href="tel:+971502672799"><i class="fas fa-phone" aria-hidden="true"></i>   +1(650)457 0277</a> </p>
                                            <p><a href="tel:+97143626779"><i class="fas fa-phone-intercom" aria-hidden="true"></i>   +1(585)437 0967</a> </p>
                                            <p><a href="mailto:info@rbktechnologies.com"><i class="fas fa-envelope" aria-hidden="true"></i>  info@rbktechnologies.com</a> </p>
                                        </div>
                                    </div>

                                    <div className="contact-icon-desc-area">
                                        <div className="contact-icon">
                                            <i className="fas fa-location"></i>
                                        </div>
                                        <div className="contact-desc">
                                            <p><u>United Kingdom </u></p>
                                            <p><strong>RBK Technologies Limited</strong></p>
                                            <p>167-169 Great Portland Street,
                                              London  England
                                               W1W 5PF</p>
                                            <p><a href="tel:+912029527909"><i class="fas fa-phone-intercom" aria-hidden="true"></i>  Tel : +44 20 3807 8779</a> </p>
                                            <p><a href="mailto:info@rbktechnologies.com"><i class="fas fa-envelope" aria-hidden="true"></i> Info@rbktechnologies.com</a> </p>
                                        </div>
                                    </div>

                                    <div className="contact-icon-desc-area">
                                        <div className="contact-icon">
                                            <i className="fas fa-location"></i>
                                        </div>
                                        <div className="contact-desc">
                                            <p><u>India Branch Office:</u></p>
                                            <p><strong>RBK Technologies Limited</strong></p>
                                            <p>
                                               #704-07 Maker Chambers - V,
                                               Nariman Point,
                                               Mumbai 400 021, India
                                               Tel : +91(20) 3501 0486
                                                     +91 9823123103</p>
                                            <p><a href="tel:+919823123103"><i class="fas fa-phone-intercom" aria-hidden="true"></i>  +91 98231 23103</a> </p>
                                            <p><a href="mailto:info@rbktechnologies.com"><i class="fas fa-envelope" aria-hidden="true"></i> Info@rbktechnologies.com</a> </p>
                                        </div>
                                    </div>
                                    <div className="contact-icon-desc-area">
                                        <div className="contact-icon">
                                            <i className="fas fa-location"></i>
                                        </div>
                                        <div className="contact-desc">
                                            <p><u>India Branch Office:</u></p>
                                            <p><strong>RBK Technologies Limited</strong></p>
                                            <p>
                                            Tech 37, Plot Number 2A, Electronic City, 
                                            2nd Phase Bengaluru Karnataka 560100, India 
                                            Tel :	+91 9823123103</p>
                                            <p><a href="tel:+919823123103"><i class="fas fa-phone-intercom" aria-hidden="true"></i>  +91 98231 23103</a> </p>
                                            <p><a href="mailto:info@rbktechnologies.com"><i class="fas fa-envelope" aria-hidden="true"></i> Info@rbktechnologies.com</a> </p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        

             <section>
            <div className="section-divider">
                <div className="inner-banner-form-block">
                

            <Globalpresence/> 

            
                </div>
                </div>
            </section>

        </>


    );
}
export default Contact;



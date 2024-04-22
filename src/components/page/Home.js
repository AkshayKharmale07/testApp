import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';
import Servicebox from '../shared/Servicebox';
import Servicelink from '../shared/Servicelink';
import { Link } from "react-router-dom";
import Meta from '../shared/Meta';
import Carousel from 'react-bootstrap/Carousel';
 



function Home() {
    return (
        <>
            <Meta title="Welcome to the world of RBK International" keyword="RBK International" description="" />


            <section className="section-divider">
                <div className="Banner-section position-relative">
                    <Carousel>
                        <Carousel.Item>
                            <img className="img-fluid d-none d-md-block w-100" src="./images/home-banner1.jpg" alt="First slide" />
                            <img className="img-fluid d-block d-md-none w-100" src="./images/home-banner1-xs.jpg" alt="First slide" />
                            <Container>
                                <Carousel.Caption>
                                    <div className='caption-innner'>
                                        <h2>Design &amp; Development</h2>
                                        <p>Excellent IT services for your success</p>
                                        <div className="home-cta flex-btn justify-content-center text-center mt-5">
                                            <Link to="/contact" title="Get In Touch" className="btn-main home-cta-1">Call Us</Link>
                                            <Link to="/contact" title="Get In Touch" className="btn-main main-btn">Get In Touch</Link> </div>
                                    </div>
                                </Carousel.Caption>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img-fluid d-none d-md-block w-100" src="./images/home-banner.jpg" alt="First slide" />
                            <img className="img-fluid d-block d-md-none w-100" src="./images/home-banner1-xs.jpg" alt="First slide" />
                            <Container>
                                <Carousel.Caption>
                                    <div className='caption-innner'>
                                        <h2>Digital Marketing Services</h2>
                                        <h3>Rank your website top of the search engines</h3>
                                        <p>Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
                                        <div className="home-cta flex-btn justify-content-center text-center mt-5">
                                            <Link to="/contact" title="Get In Touch" className="btn-main home-cta-1">Call Us</Link>
                                            <Link to="/contact" title="Get In Touch" className="btn-main main-btn">Get In Touch</Link> </div>
                                    </div>
                                </Carousel.Caption>
                            </Container>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="img-fluid d-none d-md-block w-100" src="./images/banner.jpg" alt="First slide" />
                            <img className="img-fluid d-block d-md-none w-100" src="./images/home-banner1-xs.jpg" alt="First slide" />
                            <Container>
                                <Carousel.Caption>
                                    <div className='caption-innner text-right'>
                                        <h2>RBK Technologies</h2>
                                        <p>Take Service from Expert IT Professinal</p>
                                        <div className="home-cta flex-btn justify-content-center text-center mt-5">
                                            <Link to="/contact" title="Get In Touch" className="btn-main home-cta-1">Call Us</Link>
                                            <Link to="/contact" title="Get In Touch" className="btn-main main-btn">Get In Touch</Link> </div>
                                    </div>
                                </Carousel.Caption>
                            </Container>
                        </Carousel.Item>
                    </Carousel>
                    <div className="below-banner">
                        <img className="img-fluid d-block w-100 bbimg" src="./images/below-banner.png" alt="First slide" />
                    </div>
                </div>
            </section>


            <section className="section-divider position-relative">
                <div className="position-relative">
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="services-block text-center">
                                    <h6 className="subhead"><i class="fas fa-bring-forward"></i> About Our Company</h6>
                                    <h2 className="heading">WELCOME TO  <span>RBK Technologies</span></h2>
                                    <p>Welcome to RBK Technologies! Do you have a great business idea? Have you kick started a new business? Want to change the format or structure of your family business? Come to us at any stage of your business. Share your ideas with us and transform the ideas into reality through a digital platform. We expertise in software development and data analytical solutions.We custom make solutions for your business model. We will be happy to help you design and implement your ideas. Every business is unique and the requirements are various and variable. We have a solution for each kind.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="section-divider position-relative">
                <div className="aboutus-sec position-relative">
                    <p className="sidetxt">RBK Technologies</p>
                    <Container>
                        <Row className="align-items-center flex-row-reverse">
                            <Col lg="6" md="12">
                                <div className="services-image">
                                    <img src="images/about.png" className="img-fluid" alt="image" />
                                </div>
                            </Col>
                            <Col lg="6" md="12">
                                <div className="services-block">
                                    <h6 className="subhead"><i class="fas fa-bring-forward"></i> About Our Company</h6>
                                    <h2 className="heading">Connecting <span>People &amp; Technology</span></h2>
                                    <p>RBK Technologies is a global IT and business consulting company. Our offerings spans over variety of industry sectors with strong technical, domain and process expertise helping clients grow their businesses and decrease operational costs on continuous basis in an ever-changing business environment.</p>
                                    <p>Our engagement offers tremendous value by optimizing your processes driving efficiency and helping clients establish agile and solid business and technical background achieving higher business growth and customer satisfaction.</p>
                                    <Link to="/about" title="About Us" className="btn-main">About Us <i class="far fa-long-arrow-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="section-divider services-sec ">
                <div className="our-servisec">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <div className="text-center mb-5">
                                    <h6 className="subhead"><i class="fas fa-bring-forward"></i> Our Latest Services</h6>
                                    <h2 className="heading mb-2">What Kind Of Services  <span> We Are Offering</span></h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">


                            <Col xl="4" lg="4" md="6">
                                <Servicelink
                                    Serviceboxheading="Web Design &amp; Development"
                                    Serviceboxicon="images/communication.svg"
                                    servicedsclink="/Webdesign"
                                    Serviceboxdsc="You don’t have to worry about your website getting out-of-date as we will redesign your website for FREE every two years as a complementary service."></Servicelink>
                            </Col>

                            <Col xl="4" lg="4" md="6">
                                <Servicelink
                                    Serviceboxheading="Digital Marketing"
                                    Serviceboxicon="images/communication.svg"
                                    servicedsclink="/DigitalMarketing"
                                    Serviceboxdsc="We understand the value of open communication. We are committed to being accessible, accommodating, and transparent at all times."></Servicelink>
                            </Col>

                            <Col xl="4" lg="4" md="6">
                                <Servicelink
                                    Serviceboxheading="Aap Developmentg"
                                    Serviceboxicon="images/collaborative.svg"
                                    servicedsclink="/SoftwareDevelopment"
                                    Serviceboxdsc="If customers can’t find it, it doesn’t exist. Clearly list and describe the services you offer. Also, be sure to showcase a premium service."></Servicelink>
                            </Col>

                            <Col xl="4" lg="4" md="6">
                                <Servicelink
                                    Serviceboxheading="Software Services"
                                    Serviceboxicon="images/relationships.svg"
                                    servicedsclink="/SoftwareDevelopment"
                                    Serviceboxdsc="At RBK Technologies we provide top-Quality Custom Application Development Services and quality assurance delivering complex world-class software solutions on a variety of technology platforms. We offer a full range of custom software development services for diverse business domains."></Servicelink>
                            </Col>
                            <Col xl="4" lg="4" md="6">
                                <Servicelink
                                    Serviceboxheading="Ecommerce"
                                    Serviceboxicon="images/problem-solving.svg"
                                    servicedsclink="/Ecommerce"
                                    Serviceboxdsc="A solid ecommerce website is the foundation of your online business and a means to drive greater traffic. We, at RBK Technologies are one of the pioneered web development companies that understand the importance of building ecommerce website using the latest technology to increase your profitability. "></Servicelink>
                            </Col>

                            <Col xl="4" lg="4" md="6">
                                <Servicelink
                                    Serviceboxheading="Business Process Management"
                                    Serviceboxicon="images/experts.svg"
                                    servicedsclink="/BusinessProcessManagement"
                                    Serviceboxdsc="Every company plans differently based on its unique requirements; however, more and more enterprises have begun re-orienting themselves into a process-centric customer-focused organization. This paradigm shift has led to the evolution of Business Process Management (BPM) as a principal management discipline to enable strategic planning of business goals and driving process improvements."></Servicelink>
                            </Col>

                        </Row>

                        <div className="text-center mb-5">
                            <Link to="/Services" title="See More" className="btn-main">See More <i class="far fa-long-arrow-right"></i></Link>
                        </div>

                    </Container>
                </div>
            </section>


            <section className="section-divider services-sec gray-bg">
                <div className="our-servisec">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <div className="text-center mb-5">
                                    <h6 className="subhead"><i class="fas fa-bring-forward"></i> Why Choose Us</h6>
                                    <h2 className="heading">Why Choose  <span>RBK Technologies</span> As Your IT Company?</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xl="4" lg="4" md="6">
                                <Servicebox
                                    Serviceboxheading="Creative"
                                    Serviceboxicon="images/creative.svg"
                                    Serviceboxdsc="We unite innovation and creativity to build stunning web designs and insurance-relevant marketing solutions."></Servicebox>
                            </Col>
                            <Col xl="4" lg="4" md="6">
                                <Servicebox
                                    Serviceboxheading="Collaborative"
                                    Serviceboxicon="images/collaborative.svg"
                                    Serviceboxdsc="We work with you to understand your insurance agency’s specific needs and fulfill your marketing objectives."></Servicebox>
                            </Col>

                            <Col xl="4" lg="4" md="6">
                                <Servicebox
                                    Serviceboxheading="Communication"
                                    Serviceboxicon="images/communication.svg"
                                    Serviceboxdsc="We understand the value of open communication. We are committed to being accessible, accommodating, and transparent at all times."></Servicebox>
                            </Col>

                            <Col xl="4" lg="4" md="6">
                                <Servicebox
                                    Serviceboxheading="Developing Relationships"
                                    Serviceboxicon="images/relationships.svg"
                                    Serviceboxdsc="We are a company that you can rely on for all your insurance marketing needs. We are ready to go the extra mile to ensure your agency’s success."></Servicebox>
                            </Col>
                            <Col xl="4" lg="4" md="6">
                                <Servicebox
                                    Serviceboxheading="Problem Solving"
                                    Serviceboxicon="images/problem-solving.svg"
                                    Serviceboxdsc="We have the industry knowledge, connections, and resources to develop innovative solutions to satisfy all of your insurance marketing needs."></Servicebox>
                            </Col>

                            <Col xl="4" lg="4" md="6">
                                <Servicebox
                                    Serviceboxheading="Industry Experts"
                                    Serviceboxicon="images/experts.svg"
                                    Serviceboxdsc="With our years of experience serving the insurance industry, we know exactly how to meet industry standards and assure your agency’s growth."></Servicebox>
                            </Col>

                        </Row>



                    </Container>
                </div>
            </section>




            <section className="section-divider position-relative">
                <div className="aboutus-sec position-relative">
                    <p className="sidetxt">RBK Technologies</p>
                    <Container>
                        <Row className="align-items-center  ">
                            <Col lg="6" md="12">
                                <div className="services-image">
                                    <img src="images/rbk-technologies-track-record.jpg" className="img-fluid" alt="image" />
                                </div>
                            </Col>
                            <Col lg="6" md="12">
                                <div className="services-block">
                                    <h2 className="heading">RBK Technologies <span>Track Record</span></h2>
                                    <p>A multi-site business enterprise and British specialist distributor has decided to implement a market leading enterprise resource system. RBK Technologies consultants were deployed to provide assistance with implementation of customised ERP solution across multiple sites.</p>
                                    <p>A technology and service partner of major UK mobile phone service provider roped in RBK Technologies consultants to set up a data-warehouse testing expertise within their existing test team moving from existing "one-stop-team" model</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="section-divider gray-bg  get-started-now-bg mb-0 inner-banner" style={{ backgroundImage: `url("images/aboutus.jpg")` }}>
                <div className="get-started-now-sec inner-banner-dsc">
                    <Container>
                        <div className="get-started-now-inner  align-items-center">
                            <Row>
                                <Col lg="8" md="12">
                                    <div className="gsn"><h6 className="subhead text-white"><i class="fas fa-bring-forward"></i> We Are Here To Answer Your Questions 24/7</h6>
                                        <h2 className="heading text-white mb-4 mb-md-0">Need A <span>Consultation?</span></h2>
                                    </div>
                                </Col>
                                <Col lg="4" md="4">
                                    <div className="tetx-right">
                                        <Link to="/contact" title="Get In Touch" className="btn-main white-btn"> Contact Us</Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>

        </>
    );
}
export default Home;
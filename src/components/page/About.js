import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';
import Meta from '../shared/Meta';

function About() {
    return (

        <>
            <Meta title="About RBK Technologies" />

            <section className="section-divider inner-banner Background" style={{ backgroundImage: `url("../images/webdesign-banner.jpg")` }}>
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="inner-banner-dsc text-center">
                                    <h1 className="banner-heading text-center">About <span>Us</span></h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="section-divider">
                <Container>
                    <Row className="align-items-center flex-row-reverse">
                        <Col lg="5" md="4">
                            <div className="services-image">
                                <img src="images/mission.jpg" className="img-fluid" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                            <div className="services-block">
                                <h2 className="heading">Our Mission   <span>&amp; Vision</span></h2>
                                <h3>Mission</h3>
                                <p>Help our stakeholders achieve their strategic goals by providing smart solutions.</p>
                                <h3>Vision
                                </h3>
                                <p>To become the best business and IT consulting organisation for our stakeholders</p>
                                <h3>Making IT better</h3>
                                <p>RBK has come far from being a small corner-of-a-room start up software development company to a global IT and business consulting organization with decent services and solutions portfolio for diverse set of industries.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section-divider">
                <Container>
                    <Row className="align-items-center">
                        <Col lg="5" md="4">
                            <div className="services-image">
                                <img src="images/corporate-social-responsibility.jpg" className="img-fluid w-100" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                            <div className="services-block">
                                <h2 className="heading">Corporate   <span>Social Responsibility</span></h2>
                                <p>We at RBK aim to achieve clear and definite standards of good corporate social citizen in all areas of our business.</p>
                                <p>We have therefore determined to bring together existing operating principles and policies under the umbrella of Corporate Social Responsibility.</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="section-divider">
                <Container>
                    <Row className="align-items-center flex-row-reverse">
                        <Col lg="5" md="4">
                            <div className="services-image">
                                <img src="images/track-record.jpg" className="img-fluid w-100" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                            <div className="services-block">
                                <h2 className="heading">Track <span>Record</span></h2>
                                <p>A multi-site business enterprise and British specialist distributor has decided to implement a market leading enterprise resource system. RBK consultants were deployed to provide assistance with implementation of customised ERP solution across multiple sites.</p>
                                <p>
                                    A technology and service partner of major UK mobile phone service provider roped in RBK consultants to set up a data-warehouse testing expertise within their existing test team moving from existing "one-stop-team" model</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="section-divider gray-bg  get-started-now-bg mb-0 inner-banner" style={{ backgroundImage: `url("images/aboutus.jpg")` }}>
                <div className="get-started-now-sec inner-banner-dsc">
                    <Container>
                        <div className="get-started-now-inner  align-items-center">
                            <Row className="align-items-center">
                                <Col lg="8" md="12">
                                    <div className="gsn">
                                        <h2 className="heading text-white "><i class="fa-solid fa-quote-left"></i> Company Profile</h2>
                                        <p>We at RBK aim to achieve clear and definite standards of good corporate social citizen in all areas of our business.</p>
                                        <p>We have therefore determined to bring together existing operating principles and policies under the umbrella of corporate Social Responsibility.</p>
                                    </div>
                                </Col>
                                <Col lg="4" md="4">
                                    <div className="tetx-right girlimg">
                                    <img className="img-fluid" src="./images/girl-thumb.png" alt="Image" />
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
export default About;
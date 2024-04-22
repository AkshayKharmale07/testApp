import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';
import Meta from '../shared/Meta';

function DigitalMarketing() {
    return (

        <>
            <Meta title="Application Software Development Service" />

            <section className="section-divider inner-banner Background" style={{ backgroundImage: `url("../images/digital-marketing-banner.jpg")` }}>
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="inner-banner-dsc text-center">
                                    <h1 className="banner-heading text-center">Digital  <span>Marketing</span></h1>

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
                                <img src="images/team-discuss.jpg" className="img-fluid" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                            <div className="services-block">
                                <h2 className="heading">Overview</h2>
                                <p>RBK Technologies is the leader in providing independent and objective based Digital marketing services. Our top notch Digital Marketing solutions add value to businesses and improve the information from which marketing decisions are made. Being a full service digital marketing agency we offer affordable SEO services, local SEO, SEM, Email Marketing, Social Media and Web Development services for all types of businesses.</p>
                                <p>Our managed Search Engine Optimization services will help you generate more organic leads. Our team of SEO professionals help to optimize your site for better keyword rankings with content marketing.</p>
                                <p>We employ best Email Marketing strategies to market your products and services. Pay for leads with a targeted advertising approach with our managed Pay Per Click Marketing Services. Companies trust us to manage their online presence, monitor the internet for online mentions of their products and brand, and build reliable marketing assets using social media marketing.</p>
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
                                <img src="images/digital-marketing.jpg" className="img-fluid" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                            <div className="services-block">
                                <h2 className="heading">Digital Marketing  <span>Services</span></h2>
                                <p><strong>The key advantage areas for our Digital Marketing Services are:</strong></p>

                                <ul className="check-list">
                                    <li>Search Engine Optimisation</li>
                                    <li>Social Media Marketing</li>
                                    <li>Search Engine Marketing</li>
                                    <li>E-Commerce Marketing</li>
                                    <li>E-mail Marketing</li>
                                    <li>Pay-Per-Click Advertising</li>
                                    <li>Lead Generation</li>
                                    <li>Mobile App Marketing</li>
                                </ul>
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
                                        <h2 className="heading text-white "><i class="fa-solid fa-quote-left"></i> OBJECTIVE</h2>
                                        <p>" Digital Marketing allows brands to reach out beyond its existing networks. Get the best ROI in social advertising through strategic planning. We offer all digital marketing and creative services needed to build your brand drive growth. Drive More Traffic to Your Website, Improve Your Position on Google, Reach More Customers & Increase your Sales with Our Digital Marketing Services. "</p>
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
export default DigitalMarketing;


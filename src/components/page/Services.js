import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';
import Meta from '../shared/Meta';
import Servicebox from '../shared/Servicebox';
import Servicelink from '../shared/Servicelink';



function Services() {
    return (
        <>
            <Meta title="Strategic Business Units" />

            <section className="section-divider inner-banner Background mb-0" style={{ backgroundImage: `url("../images/aboutus.jpg")` }}>
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="inner-banner-dsc text-center">
                                    <h1 className="banner-heading text-center">Our    <span>Services</span></h1>
                                    {/* <div className="home-cta flex-btn justify-content-center" ><a className="btn-main home-cta-1" title="METAL" href="/steel">METAL</a><a className="btn-main home-cta-1" title="PAPER" href="/paper-unit">PAPER</a><a className="btn-main home-cta-1" title="PLASTICS" href="/plastics">PLASTICS</a><a className="btn-main home-cta-1" title="MINERALS" href="/minerals">MINERALS</a><a className="btn-main home-cta-1" title="TIMBER" href="/timber">TIMBER</a></div> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="section-divider services-sec gray-bg mb-0">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="10" md="12">
                            <div className="text-center mb-5">
                                <p>In new economy, Information Technology has taken a pivotal and central role in advancing the strategic vision of a modern enterprise. It has become paramount important for organisations to make sure that their technical, domain and process expertise maintains crucial competitive advantage.</p>
                                <p>We offer unique expertise in the all ranges of services from our offerings making sure that the client's expectations are met during development and implementation of critical business applications. As client's increasingly focus on widening their offering range and develop new capabilities, we position ourselves in the background in such a way that the business success and productivity is always backed up.</p>
                                <p>The focus of TESTQ’s comprehensive services portfolio is to help customers understand where they need to start, how to get there, and the impact they wish to achieve on their business. From consulting, development and managed services, TESTQ has the capacity to deliver the innovation needed to help our clients maximize the potential.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xl="4" lg="4" md="6">
                            <Servicelink
                                Serviceboxheading="Web Design &amp; Development"
                                Serviceboxicon="images/communication.svg"
                                servicedsclink="/Webdesign"></Servicelink>
                        </Col>
                        <Col xl="4" lg="4" md="6">
                            <Servicelink
                                Serviceboxheading="Digital Marketing"
                                Serviceboxicon="images/communication.svg"
                                servicedsclink="/DigitalMarketing"></Servicelink>
                        </Col>

                        <Col xl="4" lg="4" md="6">
                            <Servicelink
                                Serviceboxheading="Software Services"
                                Serviceboxicon="images/relationships.svg"
                                servicedsclink="/SoftwareDevelopment"></Servicelink>
                        </Col>
                        <Col xl="4" lg="4" md="6">
                            <Servicelink
                                Serviceboxheading="Ecommerce"
                                Serviceboxicon="images/experts.svg"
                                servicedsclink="/Ecommerce"></Servicelink>
                        </Col>
                        <Col xl="4" lg="4" md="6">
                            <Servicelink
                                Serviceboxheading="Business Process Management"
                                Serviceboxicon="images/problem-solving.svg"
                                servicedsclink="/BusinessProcessManagement"></Servicelink>
                        </Col>
                        <Col xl="4" lg="4" md="6">
                            <Servicelink
                                Serviceboxheading="Business Application Services"
                                Serviceboxicon="images/problem-solving.svg"
                                servicedsclink=""></Servicelink>
                        </Col>



                        <Col xl="4" lg="4" md="6">
                            <Servicelink
                                Serviceboxheading="Business Consulting Services"
                                Serviceboxicon="images/problem-solving.svg"
                                servicedsclink=""
                            ></Servicelink>
                        </Col>

                        <Col xl="4" lg="4" md="6">
                            <Servicelink
                                Serviceboxheading="Enterprise Solutions"
                                Serviceboxicon="images/problem-solving.svg"
                                servicedsclink=""></Servicelink>
                        </Col>


                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Services;
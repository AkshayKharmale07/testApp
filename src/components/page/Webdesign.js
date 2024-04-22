import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';
import Meta from '../shared/Meta';

function Webdesign() {
    return (

        <>
            <Meta title="Web Design at RBK Technologies" />

            <section className="section-divider inner-banner Background" style={{ backgroundImage: `url("../images/webdesign-banner.jpg")` }}>
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="inner-banner-dsc text-center">
                                    <h1 className="banner-heading text-center">Professional  <span>Website Design</span></h1>

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
                                <img src="images/website-design.jpg" className="img-fluid" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                            <div className="services-block">
                                <h2 className="heading">Professional  <span>Website Design</span></h2>
                                <p>RBK Technologies is a professional website design company that has helped diverse businesses create just the right website to serve their online audience. We help you craft sites that will not only look great but also cater to the demands of both you and your target audience. With rich experience in the field of website design, you can rely on us for delivering quality work and excellent support.</p>

                                <p>For SMB’s RBK Technologies offers more than just web design. Our services range from custom WordPress design and development to logo design and visual branding and beyond.“Passion leads to designing performance driven sites that in turn leads to success” is what we believe! Our strategy, passion and profession offers you the best solution.</p>

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
                                <img src="images/e-commerce.jpg" className="img-fluid w-100" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                            <div className="services-block">
                                <h2 className="heading">Ecommerce  <span>Website Design</span></h2>
                                <p>Do you want to sale your products online? Whether it’s just a simple website creation or an Ecommerce website design, at RBK Technologies we help you have an amazing website and bring your idea to life. With about ---16 years of experience we are masters in providing the best solution for your online business place. Our websites are result oriented as they are created with strategy based on your goal.</p>
                                <p>So, if you are looking to shift your business online or thinking about the development of your online business, RBK Technologies is the right place for you to give you the ultimate choices for Ecommerce Website Design with 100% satisfaction. Our Multi-Channel E-commerce System will integrate Ebay, Amazon, Facebook Store, Google Shopping and manage your stock under one system.</p>
                                <p>Waste no time and join hands with the best and most reliable ecommerce web site design company where you get the superior web services for affordable prices.</p>

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
                                        <p>We want your business to have an amazing website as per your personalized needs that brings your idea to life. Generate more leads and sales with a professionally designed website that is responsive, has the ability to update and manage content easily and more. Having a website that reflects your brand and gets your message across will convert visitors into engaged customers.</p>
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
export default Webdesign; 
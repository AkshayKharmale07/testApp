
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';
import Meta from '../shared/Meta';

function Ecommerce() {
    return (

        <>
            <Meta title="Application Software Development Service" />

            <section className="section-divider inner-banner Background" style={{ backgroundImage: `url("../images/webdesign-banner.jpg")` }}>
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="inner-banner-dsc text-center">
                                    <h1 className="banner-heading text-center">Ecommerce  <span>Website Development</span></h1>

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
                                <img src="images/ecommerce.jpg" className="img-fluid" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                            <div className="services-block">
                                <h2 className="heading">Ecommerce <span>Website Development</span></h2>
                                <p>A solid ecommerce website is the foundation of your online business and a means to drive greater traffic. We, at RBK Technologies are one of the pioneered web development companies that understand the importance of building ecommerce website using the latest technology to increase your profitability. We offer totally customisable solutions with the best in standard features and functionality. This will help to promote your brand effectively while bringing success as well as online sales. Our professionals use current industry trends to deliver prolific results and can tailor a solution that matches your online brand and ecommerce goals.</p>
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
                                <img src="images/peoples.jpg" className="img-fluid" alt="image" />
                            </div>
                        </Col>
                        <Col lg="7" md="8">
                        <div className="services-block">
                        <h2 className="heading">Features </h2>
                        <ul className="check-list">
                            <li>Build fully-loaded marketplace website</li>
                            <li>100% customisable while being search engine and social media friendly</li>
                            <li>Dashboards for Admin and sellers to offer real-time sales updates</li>
                            <li>Flexibility to set unique commission, shipping &amp; seller subscription rates</li>
                            <li>Exclusive profile pages for sellers and custom URLs for stores</li>
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
                                        <p>" Application development is complex and dynamic. To meet business needs, managers must align with an application development services partner that possesses a proven track record, a quality approach to delivering consistent results and the expertise required to drive successful outcomes. We are a Helping enterprises build sophisticated business applications that are robust, scalable and extensible. Our practice specializes in application services that span the full software development life cycle. "</p>
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
export default Ecommerce;


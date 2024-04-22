import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Container, Row, Col } from 'react-bootstrap';
import Meta from './shared/Meta';
import '../images/home-banner2.jpg'

function Aboutus() {
    return (

        <>
          <Meta title="About Us" />

            <section className="section-divider inner-banner Background" style={{ backgroundImage: `url("../images/home-banner2.jpg")` }}>
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="inner-banner-dsc text-center">
                                    <h1 className="banner-heading text-center">About <span>Us</span></h1>
                                    <p>RBKinternational was founded in southafrica, Belgium with a mission trade to get the best outcome for everyone. We specialize in the global buying and selling of recyclable and non-prime raw materials. We strongly believe in offering our customers a consistent and dependable supply of quality raw material with competitive pricing.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="section-divider">
                <Container>
                    <Row className="align-items-center flex-row-reverse">
                        <Col lg="6" md="12">
                            <div className="services-image">
                                <img src="images/about.jpg" className="img-fluid" alt="image" />
                            </div>
                        </Col>
                        <Col lg="6" md="12">
                            <div className="services-block">
                                <h2 className="heading">About <span>Us</span></h2>
                                <p>RBKinternational was founded in southafrica, Belgium with a mission trade to get the best outcome for everyone. We specialize in the global buying and selling of recyclable and non-prime raw materials. We strongly believe in offering our customers a consistent and dependable supply of quality raw material with competitive pricing.</p>
                                <h3 className="py-3"><strong>CORE VALUES</strong></h3>
                                <ul class="check-list">
                                    <li>Sustainability</li>
                                    <li>Quality</li>
                                    <li>Commitment</li>
                                    <li>Integrity</li>
                                </ul>
                                <p>Furthermore, we have a synergised infrastructure of multiple strategically selected warehouses, logistic partners, shipping lines and relations with multiple suppliers throughout Europe to fulfill all our customers’ needs. Additionally, the company has a physical presence via associated company offices in 16 countries.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Aboutus;
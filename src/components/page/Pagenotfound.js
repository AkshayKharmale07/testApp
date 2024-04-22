
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Meta from '../shared/Meta';




function Pagenotfound(props) {
    return (
        <>
            <Meta title="About RBK Technologies" />

            <section className="section-divider inner-banner Background" style={{ backgroundImage: `url("../images/page-not-found.jpg")` }}>
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="8" md="12">
                                <div className="inner-banner-dsc text-center">
                                    <h1 className="banner-heading text-center">Page Not  <span>Found</span></h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="section-divider">
                <div className="Objectivesinner-main position-relative">
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col lg="7" md="8">
                                <div className="services-block">
                                    <h2 className="heading">Page Not   <span>Found</span></h2>
                                     

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}
export default Pagenotfound;


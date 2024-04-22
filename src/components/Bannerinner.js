import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function Bannerinner(props) {
    return (
        <>
            <section className="section-divider">
                <div className="inner-banner-page">
                    <Container>
                        <Row className="align-item-center justify-content-center">
                            <Col lg="6" md="12">
                                <div className="Banner-title text-center">
                                    <h1 className="banner-heading text-center">{props.bannertitle}</h1>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item href="/services">Services </Breadcrumb.Item>
                                        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Bannerinner;


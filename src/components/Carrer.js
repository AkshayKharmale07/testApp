import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';
import Meta from './shared/Meta';
import { Link } from "react-router-dom";
import '../images/career-banner.jpg'

function Carer() {
    return (
<>
        <Meta title="Career" />
            <section className="Banner-sec  Background" style={{ backgroundImage: `url("../images/career-banner.jpg")` }}>
                <div className="">
                    <Container>
                        <Row className="align-item-center">
                            <Col md="9">
                                <div className="Banner-inner">
                                    <div className="Banner-title text-center">
                                        <h1 className="banner-heading text-white">Career at RBKinternational</h1>
                                        <p className="text-white">At RBKinternational, every challenge spans the globe. We need workers who can work nearly with our guests, suppliers, shipping lines, bankers and insurers. If you’re interested please telegraph your CV at <b><Link to="mailto:southafrica@rbkinternational.com" className='text-white'><u>southafrica@rbkinternational.com</u></Link></b></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            </>
    );
}
export default Carer;
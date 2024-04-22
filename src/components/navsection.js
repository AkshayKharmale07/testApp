import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navsection() {

    return (

        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col md="6">
                        <div className='Top-sec'>
                            <p> <a href="tel: "><i className="fa-solid fa-phone-office"></i>  </a></p>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className='Top-sec right-top-sec d-flex'> <p> <a href="mailto:southafrica@rbkinternational.com"><i className="fas fa-mailbox"></i> southafrica@rbkinternational.com</a></p> <p> <i className="fas fa-clock-desk"></i> 9 am to 5 pm, Monday to Friday</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>

    );

}
export default Navsection;

 
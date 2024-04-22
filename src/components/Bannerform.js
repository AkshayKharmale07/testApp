import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useForm } from "react-hook-form";

import { Container, Row, Col, Button } from "react-bootstrap";

function Bannerform() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    function bannerform(data) {
        console.log(data)
    }

    return (
        <>
            <div className="section-divider">
                <div className="inner-banner-form-block banner-form">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="10">
                                <div className="inner-banner-form">
                                 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>

    );
}
export default Bannerform;
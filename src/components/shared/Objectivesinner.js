import { Container, Row, Col } from 'react-bootstrap';

function Objectivesinner(props) {
    return (
        <section className="section-divider">
        <div className="Objectivesinner-main position-relative">
            <Container>
                <Row className="align-items-center justify-content-center"> 
                    <Col lg="7" md="8">
                        <div className="Objectivesinner-dsc text-center">
                        <i class="fa-solid fa-quote-left"></i>
                            <h2 className="heading">{props.Objectivesinnerheading}</h2>
                            <p>{props.Objectivesinnerdsc}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </section>
    );
}
export default Objectivesinner;


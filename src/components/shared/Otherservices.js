 
import { Container, Row, Col } from 'react-bootstrap';
import ServicesSection from '../ServicesSection'; 


function Otherervices() {
    return (
        
 
            <section className="section-divider services-sec gray-bg mb-0">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="8" md="12">
                            <div className="text-center mb-5">
                                <h2 className="heading text-center ">OUR BUSINESS <span>UNITS </span></h2>
                            </div>
                        </Col>
                    </Row>

                    <div className="d-flex servicessection-main-sec">
                         <div className="servicessection-inner">
                            <ServicesSection
                                serviceheading="METALS"
                                servicedsclink="/metals"
                                serviceicon="images/metals.jpg"
                                servicedsc="RBK International provides solutions for all types of Ferrous and Non-Ferrous Metal Scrap and Non-Prime Materials."></ServicesSection>
                        </div>

                        <div className="servicessection-inner">
                            <ServicesSection
                                serviceheading="Paper"
                                servicedsclink="/paper"
                                serviceicon="images/paper.jpg"
                                servicedsc="RBK International provides a linkage between supply and demand in the Waste Paper Business."></ServicesSection>
                        </div>

                        <div className="servicessection-inner">
                            <ServicesSection
                                serviceheading="Plastic"
                                servicedsclink="/plastic"
                                serviceicon="images/plastic.jpg"
                                servicedsc="RBK International provides solutions for all types of Plastics Scrap and Reprocessed Materials."></ServicesSection>
                        </div>

                        <div className="servicessection-inner">
                            <ServicesSection
                                serviceheading="Minerals"
                                servicedsclink="/minerals"
                                serviceicon="images/minerals.jpg"
                                servicedsc="RBK International source the materials directly from the reputed mines and ship to our customers to give a consistent quality."></ServicesSection>
                        </div>
                        <div className="servicessection-inner">
                            <ServicesSection
                                serviceheading="Timber"
                                servicedsclink="/Timber"
                                serviceicon="images/timber.jpg"
                                servicedsc="RBK International offer a wide range of exotic and imported timber for residential and commercial purposes."></ServicesSection>
                        </div>

                        </div>

                </Container>
            </section>
 
    );
}
export default Otherervices;
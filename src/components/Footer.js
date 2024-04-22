import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";

function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };


    return (
        <>
            <div className="footer-bg">
                <Container>
                    <Row>
                        <Col xl="4" lg="4">
                            <div className="footer-left-block">
                                <div className="footer-logo ">
                                    <Link to="/" title="RBK International">
                                        <img src="images/logo-white.png" class="img-fluid" alt="RBK International" />
                                    </Link>
                                    <p className="mt-3 text-white">RBK Technologies is a global IT and business consulting company. Our offerings spans over variety of industry sectors with strong technical, domain and process expertise helping clients grow their businesses and decrease operational costs on continuous basis in an ever-changing business environment.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl="2" lg="4" md="6">
                            <div className="footer-left-block">
                                <h2 className="foot-head text-white position-relative">Useful <span>Links</span></h2>
                                <Row>
                                    <Col md="12">
                                        <ul className="footer-links useful-links">
                                        <li><Link to="/" title="Home"><i class="fas fa-angle-right"></i> Home</Link></li>
                                        <li><Link to="/aboutus" title="About us"><i class="fas fa-angle-right"></i> About us</Link></li>
                                        <li><Link to="/services" title="Business units"><i class="fas fa-angle-right"></i> Business units</Link></li>
                                        <li><Link to="/contact" title="Contact Us"><i class="fas fa-angle-right"></i> Contact Us</Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl="6" lg="4" md="6">
                            <h2 className="foot-head text-white position-relative">Contact <span>Us</span> </h2>
                            <ul className="footer-links address-details">
                                <li><Link to="tel:+97143626779" title="Phone"><i className="fas fa-phone-intercom"></i><span> +1(650)457 0277</span></Link></li>
                                <li><Link to="mailto:info@rbktechnologies.com" title="Email"><i className="fas fa-mailbox"></i>
                                    <span>info@rbktechnologies.com</span></Link></li> 
                                <li><p><i className="fas fa-location"></i> <span>RBK Technologies LLC<br /> 809 Cuesta Dr Suite B PMB 1133 
                                    Mountain View, San Francisco
                                     California 94040
                                      United States</span></p>
                                </li>
                                <li><h4 className="text-white">India </h4></li> 
                                <li><p><i className="fas fa-location"></i> <span>RBK Technologies Limited<br /> 
                              
                                     #704-07 Maker Chambers - V,
                                     Nariman Point,
                                     Mumbai 400 021, India. <br />
                                     Tel : +91(20) 3501 0486 <br />
                                           +91 9823123103 
                                   </span></p>
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copyright-bg">
                <div className="container">
                    <div className="copyright text-center">
                        <p className="m-0">Copyright @ <i className="fal fa-copyright"></i> {getCurrentYear()} RBK International | All Rights
                            Reserved</p>
                    </div>
                </div>
            </div>
        </>


    );

}
export default Footer;
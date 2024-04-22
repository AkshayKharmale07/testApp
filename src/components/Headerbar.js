import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Row, Col, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StickyNav } from 'react-js-stickynav'
import '../components/style.css';
// import NavbarOffcanvas from 'react-bootstrap-navbar-offcanvas';



function Headerbar() {
    return (
        <>
            <StickyNav length='40' className='Header'>
                <div className="menu-sec w-100">
                    <Container>
                        <Row className='align-items-center'>
                            <Col lg="3" md="6" xs="6">
                                <div className="logo-area">
                                    <Link to="/" title='RBK International'><img src="images/logo.jpg" className="img-fluid white-logo" alt="RBK International" /></Link>
                                </div>
                            </Col>
                            <Col lg="9" md="6" xs="6">
                                <div className="nav-Section menu__block_wrap">
                                    <Navbar collapseOnSelect expand="xl">
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="d-flex d-xl-none" id='hamburger'>
                                            <svg width="50" height="50" viewBox="0 0 100 100">
                                                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                                <path className="line line2" d="M 20,50 H 80" />
                                                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                            </svg>
                                        </Navbar.Toggle>
                                        <Navbar.Collapse id="responsive-navbar-nav " className='offcanvas-start'>
                                            <Nav className="me-auto align-items-center">
                                                <Nav.Item>
                                                    <Link to="/" className="nav-link">Home</Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Link to="/about" className="nav-link">About Us</Link>
                                                </Nav.Item>
                                                <Nav.Item className='dropdown'>
                                                    <Link to="/services" id="navbarDropdownMenuLinkC" className="nav-link">Business units <i className="far fa-angle-down d-none d-xl-inline-block"></i>
                                                        <span aria-expanded="false" role="button" className="drp-arrow dropdown-toggle d-flex d-xl-none" data-bs-toggle="dropdown">
                                                            <i className="far fa-plus"></i>
                                                        </span>
                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkC">
                                                            <Link to="/metals" className="nav-link dropdown-item">Metal <i className="fal fa-arrow-right d-inline-block d-xl-none"></i></Link>
                                                            <Link to="/paper" className="nav-link dropdown-item">Paper <i className="fal fa-arrow-right d-inline-block d-xl-none"></i></Link>
                                                            <Link to="/plastic" className="nav-link dropdown-item">Plastic <i className="fal fa-arrow-right d-inline-block d-xl-none"></i></Link>
                                                            <Link to="/minerals" className="nav-link dropdown-item">Minerals <i className="fal fa-arrow-right d-inline-block d-xl-none"></i></Link>
                                                            <Link to="/timber" className="nav-link dropdown-item">Timber <i className="fal fa-arrow-right d-inline-block d-xl-none"></i></Link>
                                                        </div>
                                                    </Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Link to="/carrer" className="nav-link">career</Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Link to="/contact" className='nav-link nav-btn'>Contact Us</Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </StickyNav>

        </>

    );
}

export default Headerbar;
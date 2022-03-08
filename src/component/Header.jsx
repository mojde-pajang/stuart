import React from 'react'
import Col from 'react-bootstrap/Col'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';

import './Header.css'


const Header = () => {
  return (
        <Navbar className='pl-5 pr-5'>
            <Navbar.Brand href="/">Stuart</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="me-auto">
                <NavDropdown title="Bussiness Booster" id="collasible-nav-dropdown" >
                    <div className='dropdown-content-container'>
                        <Col xs={6}>
                            <h6>Insights</h6>
                            <NavDropdown.Item href="/Signup">
                                <p>How Stuart Increased customer loyalty in 2021</p>
                                <span>Data chart included</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Signup">
                                <p className='text-dark'>How to save the planet, and your customers</p>
                                <span className='text-secondary'>Data chart included</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Signup">
                                <p>Success stories from inspiring business & startups</p>
                                <span>Data chart included</span>
                            </NavDropdown.Item>
                        </Col>
                        <Col xs={2}>
                            <h6 className='text-center' >Podcast</h6>
                        </Col>
                        <Col xs={2}>
                            <h6 className='text-center' >Blog</h6>
                        </Col>
                        <Col xs={2}>
                            <h6 className='text-center' >Events</h6>
                        </Col>
                    </div>
                </NavDropdown>
                <Nav.Link href="#pricing">Bussiness Solutions</Nav.Link>
                <Nav.Link href="#pricing">Become a courier</Nav.Link>
                <Nav.Link href="#pricing">About us</Nav.Link>
                
                </Nav>
                <Nav>
                <Button variant="primary" className='rounded-pill ml-4 mr-4' size='lg'>Get in touch</Button>
                <Button variant="secondary" className='rounded-pill' size='lg' >
                    Request a delivery
                </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default Header
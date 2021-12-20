import React from 'react'
import "./Dashboard.css"
import { Container, Row, Col } from "reactstrap";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Body from "../../Components/Body/Body";



function Dashboard() {
    return (
        <>
            {/* The Quick link icon on the right side as in the provided UI sample*/}
            <div className='Quick_links d-flex flex-column justify-content-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                    <path d="M18.25 13.4999V15.3333H1.74998V13.4999H18.25ZM5.04631 0.578613L6.34248 1.87478L3.42565 4.79161L6.34248 7.70845L5.04631 9.00461L0.833313 4.79161L5.04631 0.578613ZM18.25 7.08328V8.91661H9.99998V7.08328H18.25ZM18.25 0.666613V2.49995H9.99998V0.666613H18.25Z" fill="white" />
                </svg>
                <span>Quick</span>
                <span>Links</span>
            </div>


            <Container fluid="md">
                <Row className='row1' xs={12} md={12} lg={12}>
                    <Col style={{ paddingRight: 0 }} s={2} md={2} lg={2}>
                        <h1 id="logo_heading">Logo</h1>
                    </Col>
                    <Col className='navbar_div' s={10} md={10} lg={10}>
                        <Navbar />
                    </Col>
                </Row>
                <Row className='row2' xs={12} md={12} lg={12}>
                    <Col style={{ paddingRight: 0 }} s={2} md={2} lg={2}>
                        <Sidebar />
                    </Col>
                    <Col className='body_div' s={10} md={10} lg={10}>
                        <Body />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard

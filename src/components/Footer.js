import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer= () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/arief-shamsuddin-831386240/"><img src={navIcon1} alt=""/></a>
                            <a href="https://www.instagram.com/arief_saiber/"><img src={navIcon3} alt=""/></a>
                            <a href="https://github.com/AriefSaiber"><img src={navIcon4} alt=""/></a>
                        </div>
                        <p>This website was made with React.js</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
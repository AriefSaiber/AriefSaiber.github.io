import {Nav, Container, Row, Tab, Col} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Calmify from "../assets/img/Calmify.jpg";
import Booking from "../assets/img/Bookingapp.jpg";
import Design from "../assets/img/Design.png";
import Prodigy from "../assets/img/Prodigy.png";
import Vaccine from "../assets/img/Vaccine.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Projects = () => {
    const project1 = [
        {
            title: "ProDigy: The next Entrepreneur",
            description: "Prodigy is a serious web-based game which its objective is to provide a platform that is easy to use and learn the basics of entrepreneurship. This game was developed and hosted with Unity.",
            imgUrl: Prodigy,
            link: "https://play.unity.com/mg/other/saved-games-26",
        },
        {
            title: "Misconception of Vaccine",
            description: "This website objective is to educate prople on misconceptions of vaccines. This website was developed with HTML and hosted with github.",
            imgUrl: Vaccine,
            link: "https://ariefsaiber.github.io/",
        },
    ];
    const project2 = [
        {
            title: "Calmify",
            description: "Calmify is a meditation-based mobile application for android with the purpose of motivating adults to meditate. This app was developed with Flutter.",
            imgUrl: Calmify,
            link: "https://www.linkedin.com/posts/arief-shamsuddin-831386240_development-programming-android-activity-7019971593049169920-f7oh?utm_source=share&utm_medium=member_desktop",
        },
        {
            title: "Computer Cleaning Booking Application",
            description: " This app is created for an entrepreneur who has laptop cleaning and repair services. This application was developed using Java and android studio.",
            imgUrl: Booking,
            link: "https://www.linkedin.com/posts/arief-shamsuddin-831386240_development-programming-android-activity-7019971593049169920-f7oh?utm_source=share&utm_medium=member_desktop",
        },
    ];
    const project3 = [
        {
            title: "Poster Designs",
            description: "These are my past works of designing posters with Adobe Photoshop and Adobe Illustrator.",
            imgUrl: Design,
            link: "https://drive.google.com/file/d/1RS2dTV3dQk9lcUM0F8e7hF9MwkVDAnxa/view?usp=sharing",
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size ={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Projects</h2>
                        <p></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Mobile Application</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Others</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {project1.map((project, index) => {
                                        return (<ProjectCard key={index} {...project}/>)
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {project2.map((project, index) => {
                                        return (<ProjectCard key={index} {...project}/>)
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                    {project3.map((project, index) => {
                                        return (<ProjectCard key={index} {...project}/>)
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
    );
};

import {Col} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';

export const ProjectCard = ({title, description, imgUrl, link}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt=""/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <p></p>
                    <a href={link}>
                        <button>Learn More<ArrowRightCircle size={25}/></button>
                    </a>
                </div>
            </div>
        </Col>
    )
}
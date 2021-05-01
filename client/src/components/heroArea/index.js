import { Col, Container, Row } from "reactstrap";
import authorImage from "../../images/eahea.jpg";
import Menus from "../menus";

const HeroArea = () => {
  return (
    <div className="heroArea">
      <Row className="align-items-center">
        <Col xs="12" md="4">
          <div className="authorImageArea">
            <div className="authorImage">
              <img src={authorImage} alt="authorImage" />
            </div>
          </div>
        </Col>
        <Col xs="12" md="8">
          <div className="heroContent">
            <h2>
              hello, <br /> i am eahea ratan
            </h2>
            <h2>a full stack developer</h2>
            <p>
              I am an expert Full Stack Developer, I have been working since
              2016 I worked on five different software companies. My expertise
              in HTML, CSS, js, ReactJS, Nextjs, Vuejs, Nuxtjs, Nodejs and many
              more.
            </p>
          </div>
        </Col>
      </Row>
      <Menus />
    </div>
  );
};

export default HeroArea;

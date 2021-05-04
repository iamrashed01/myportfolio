import { motion } from "framer-motion";
import { Col, Container, Row } from "reactstrap";
import authorImage from "../../images/eahea.jpg";
import Menus from "../menus";
// import heroBg from "../../images/bg.jpg";

const HeroArea = ({ heroInfo }) => {
  const username = heroInfo ? heroInfo.username : "";
  const profession = heroInfo ? heroInfo.profession : "";
  const description = heroInfo ? heroInfo.description : "";
  return (
    <div
      className="heroArea"
      // style={{ background: `url(${heroBg}) right /cover` }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs="12" md="4">
            <div className="authorImageArea">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="authorImage">
                  <img src={authorImage} alt="authorImage" />
                </div>
              </motion.div>
            </div>
          </Col>
          <Col xs="12" md="8">
            <div className="heroContent">
              <h2>
                hello, <br /> i am {username}
              </h2>
              <h2>a {profession}</h2>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
        <Menus />
      </Container>
    </div>
  );
};

export default HeroArea;

import { Card, CardBody, Col, Container, Row } from "reactstrap";

const RecentPosts = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col xs="12">
          <div className="sectionTitle text-center">
            <h2>Recept Post</h2>
          </div>
        </Col>
        <Col xs="12">
          <Row>
            <Col xs="12" sm="6" md="4">
              <div className="recetPost">
                <div className="postTitle">
                  <h2>
                    <strong>1</strong> React boilerplate setup instruction
                  </h2>
                  <span className="createTime">March 18, 2021</span>
                </div>
                <p>
                  My experience and thoughts on 2020 web development
                  technologies.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <div className="recetPost">
                <div className="postTitle">
                  <h2>
                    <strong>2</strong> React boilerplate setup instruction
                  </h2>
                  <span className="createTime">March 18, 2021</span>
                </div>
                <p>
                  My experience and thoughts on 2020 web development
                  technologies.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="6" md="4">
              <div className="recetPost">
                <div className="postTitle">
                  <h2>
                    <strong>3</strong> React boilerplate setup instruction
                  </h2>
                  <span className="createTime">March 18, 2021</span>
                </div>
                <p>
                  My experience and thoughts on 2020 web development
                  technologies.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RecentPosts;

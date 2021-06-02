import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const RecentPosts = ({ recentProjects }) => {
  return (
    <Container className="mb-5">
      <Row>
        <Col xs="12">
          <div className="sectionTitle text-center">
            <h2>Recept Post</h2>
          </div>
        </Col>
        <Col xs="12" sm={{ size: 8, offset: 2 }}>
          <Row>
            {recentProjects.map((project, i) => (
              <Col key={i} xs="12" sm={6} className="mb-5">
                <Card className="full-h">
                  <CardBody>
                    <div className="recetPost">
                      <Link to={`/project/${project.slug}`} />
                      <div className="postTitle">
                        <h2>
                          <strong>{i + 1}</strong> {project.title}
                        </h2>
                        <span className="createTime">
                          {new Date(project.createdAt).toDateString()}
                        </span>
                      </div>
                      <p>{project.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RecentPosts;

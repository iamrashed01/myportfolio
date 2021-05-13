const { Form, FormGroup, Label, Input, Row, Col } = require("reactstrap");

const index = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Form>
          <Row>
            <Col xs="12" sm="4">
              <FormGroup>
                <Label>username</Label>
                <Input name="unmae" placeholder="uname" />
              </FormGroup>
            </Col>
            <Col xs="12" sm="4">
              <FormGroup>
                <Label>username</Label>
                <Input name="unmae" placeholder="uname" />
              </FormGroup>
            </Col>
            <Col xs="12" sm="4">
              <FormGroup>
                <Label>username</Label>
                <Input name="unmae" placeholder="uname" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default index;

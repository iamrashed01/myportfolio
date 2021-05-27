import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { apiRequest } from "../../../utils/request";
import { CREATE_PROJECT } from "../../../utils/urls";
import { toast } from "react-toastify";

const CreateProject = () => {
  const [markdown, setMarkdown] = useState("");

  const [values, setState] = useState({
    title: "",
    slug: "",
    description: "",
  });

  const changeHandler = ({ target: { value, name } }) => {
    setState({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = () => {
    const formData = {
      title: values.title,
      slug: values.slug,
      description: values.description,
      markdown,
    };

    apiRequest(CREATE_PROJECT, formData)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          setState({
            title: "",
            slug: "",
            description: "",
          });
          setMarkdown("");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div>
      <Row>
        <Col xs="12" sm="6">
          <FormGroup>
            <Label>Title</Label>
            <Input
              name="title"
              onChange={changeHandler}
              placeholder="title"
              value={values.title}
            />
          </FormGroup>
        </Col>
        <Col xs="12" sm="6">
          <FormGroup>
            <Label>Slug</Label>
            <Input
              name="slug"
              onChange={changeHandler}
              placeholder="slug"
              value={values.slug}
            />
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label>Description</Label>
            <Input
              style={{ height: "100px" }}
              type="textarea"
              name="description"
              onChange={changeHandler}
              placeholder="description"
              value={values.description}
            />
          </FormGroup>
        </Col>
      </Row>
      <MDEditor value={markdown} onChange={setMarkdown} />
      <Button className="mt-4" color="success" onClick={submitHandler}>
        Add Project
      </Button>
    </div>
  );
};

export default CreateProject;

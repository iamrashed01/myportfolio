import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { apiRequest } from "../../../utils/request";
import { GET_SINGLE_PROJECTS, UPDATE_PROJECT } from "../../../utils/urls";
import { toast } from "react-toastify";

const CreateProject = (props) => {
  const [markdown, setMarkdown] = useState("");

  const [values, setState] = useState({
    id: "",
    title: "",
    slug: "",
    description: "",
  });

  useEffect(() => {
    apiRequest(GET_SINGLE_PROJECTS, null, props.match.params.slug)
      .then((res) => {
        if (res.data.success) {
          setState({
            id: res.data.data._id,
            title: res.data.data.title,
            slug: res.data.data.slug,
            description: res.data.data.description,
          });
          setMarkdown(res.data.data.markdown);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, [props]);

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

    apiRequest(UPDATE_PROJECT, formData, values.id)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          props.history.push("/admin/projects");
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
        Update
      </Button>
    </div>
  );
};

export default CreateProject;

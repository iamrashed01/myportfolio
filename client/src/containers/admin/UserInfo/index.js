import { useState, useReducer, useEffect } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import reducer, { initialState } from "./reducer";
import { apiRequest } from "../../../utils/request";
import { GET_MY_INFO, UPDATE_MY_INFO } from "../../../utils/urls";
import { SET_USER_INFO } from "./constants";
import { toast } from "react-toastify";

const UpdateUserInfo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    apiRequest(GET_MY_INFO)
      .then((res) => {
        if (res.data.data) {
          dispatch({ type: SET_USER_INFO, data: res.data.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [values, setState] = useState({
    username: "",
    profession: "",
    description: "",
  });

  useEffect(() => {
    if (state.userInfo) {
      setState({
        username: state.userInfo.username,
        profession: state.userInfo.profession,
        description: state.userInfo.description,
      });
    }
  }, [state.userInfo]);

  const changeHandler = ({ target: { value, name } }) => {
    setState({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("profession", values.profession);
    formData.append("description", values.description);

    apiRequest(UPDATE_MY_INFO, formData)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <Form onSubmit={submitHandler}>
          <Row>
            <Col xs="12" sm="6">
              <FormGroup>
                <Label>Username</Label>
                <Input
                  name="username"
                  onChange={changeHandler}
                  placeholder="username"
                  value={values.username}
                />
              </FormGroup>
            </Col>
            <Col xs="12" sm="6">
              <FormGroup>
                <Label>Profession</Label>
                <Input
                  name="profession"
                  onChange={changeHandler}
                  placeholder="profession"
                  value={values.profession}
                />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <Label>Description</Label>
                <Input
                  style={{ height: "250px" }}
                  type="textarea"
                  name="description"
                  onChange={changeHandler}
                  placeholder="description"
                  value={values.description}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit">Update</Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateUserInfo;

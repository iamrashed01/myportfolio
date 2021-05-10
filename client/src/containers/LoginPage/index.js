import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { apiRequest, resetAuthToken } from "../../utils/request";
import { LOGIN } from "../../utils/urls";
import { toast } from "react-toastify";

const LoginPage = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const changeHandler = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", state.email);
    formData.append("password", state.password);

    apiRequest(LOGIN, formData)
      .then((res) => {
        console.log(res, "res");
        if (res.data.success) {
          toast.success(res.data.message);
          resetAuthToken(res.data.auth_token);
          window.location.replace("/");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="loginForm mt-5">
      <div className="card">
        <div className="card-body">
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                onChange={changeHandler}
                value={state.email}
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                name="password"
                onChange={changeHandler}
                value={state.password}
                placeholder="Password"
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

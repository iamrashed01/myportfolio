import { useEffect, useReducer } from "react";
import { apiRequest } from "../../../utils/request";
import * as urls from "../../../utils/urls";
import reducer, { initialState } from "./reducer";
import { SET_DASHBAORD } from "./constants";
import { toast } from "react-toastify";

const AdminDashbaord = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    apiRequest(urls.GET_DASHBAORD)
      .then((res) => {
        if (res.data.success) {
          dispatch({ type: SET_DASHBAORD, data: res.data.data });
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  const totalProjects = state.dashboard ? state.dashboard.projects : 0;
  const totalUsers = state.dashboard ? state.dashboard.users : 0;
  const totalVisitors = state.dashboard ? state.dashboard.visitors : 0;
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5>Total Projects</h5>
              <h3>{totalProjects}</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5>Total Users</h5>
              <h3>{totalUsers}</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5>Users visited</h5>
              <h3>{totalVisitors}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashbaord;

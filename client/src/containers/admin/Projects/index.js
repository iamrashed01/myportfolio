import { Button, Table } from "reactstrap";
import { apiRequest } from "../../../utils/request";
import * as urls from "../../../utils/urls";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  function fetchProjects() {
    apiRequest(urls.GET_PROJECTS)
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deleteProject = (id) => {
    apiRequest(urls.DELETE_PROJECT, null, id)
      .then((res) => {
        if (res.data.success) {
          fetchProjects();
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.success(err.response.data.message);
      });
  };

  return (
    <Table dark striped>
      <thead>
        <tr>
          <th scope="row" style={{ whiteSpace: "nowrap" }}>
            Updated At
          </th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.length > 0 &&
          projects.map((project) => (
            <tr key={project._id}>
              <th scope="row">{new Date(project.createdAt).toDateString()}</th>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td style={{ display: "flex" }}>
                <Link
                  className="btn btn-primary"
                  to={`/admin/edit-project/${project.slug}`}
                >
                  Edit
                </Link>
                <Button
                  color="danger"
                  className="ml-2"
                  onClick={() => deleteProject(project._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default Projects;

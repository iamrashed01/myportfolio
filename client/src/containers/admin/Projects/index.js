import { Table } from "reactstrap";
import { apiRequest } from "../../../utils/request";
import * as urls from "../../../utils/urls";
// import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    apiRequest(urls.GET_PROJECTS)
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("====================================");
  console.log(projects);
  console.log("====================================");

  return (
    <Table dark striped>
      <thead>
        <tr>
          <th scope="row" style={{ whiteSpace: "nowrap" }}>
            Updated At
          </th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {projects.length > 0 &&
          projects.map((project) => (
            <tr key={project._id}>
              <th scope="row">
                {new Date(project.createdAt).toLocaleDateString("en-EN")}
              </th>
              <td>{project.title}</td>
              <td>{project.description}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default Projects;

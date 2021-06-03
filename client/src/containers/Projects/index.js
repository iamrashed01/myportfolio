import { useEffect, useState } from "react";
import ProjectLists from "../../components/ProjectLists";
import Menus from "../../components/menus";
import { apiRequest } from "../../utils/request";
import * as urls from "../../utils/urls";

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

  return (
    <div>
      <div id="header">
        <Menus />
      </div>
      <ProjectLists
        className="mt-5"
        title="Projects"
        recentProjects={projects}
      />
    </div>
  );
};

export default Projects;

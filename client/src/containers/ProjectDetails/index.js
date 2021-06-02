import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import Menus from "../../components/menus";
import { apiRequest } from "../.../../../utils/request";
import { GET_SINGLE_PROJECTS } from "../.../../../utils/urls";
import { toast } from "react-toastify";
const ProjectDetails = (props) => {
  const [project, setProject] = useState(null);
  useEffect(() => {
    apiRequest(GET_SINGLE_PROJECTS, null, props.match.params.slug)
      .then((res) => {
        if (res.data.success) {
          setProject(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, [props]);

  return (
    <div className="projectDetails">
      <div id="header">
        <Menus />
      </div>
      <div className="container py-5">
        {console.log(project)}
        <h2>{project?.title}</h2>
        <p>{project?.description}</p>
        <MDEditor.Markdown source={project?.markdown} />
      </div>
    </div>
  );
};

export default ProjectDetails;

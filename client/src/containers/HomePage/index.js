import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectLists from "../../components/ProjectLists";
import HeroArea from "../../components/heroArea";
import { apiRequest } from "../../utils/request";
import * as urls from "../../utils/urls";

const HomePage = () => {
  const [heroInfo, setHeroInfo] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    apiRequest(urls.GET_MY_INFO)
      .then((res) => {
        setHeroInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    apiRequest(urls.GET_RECENT_PROJECTS)
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <HeroArea heroInfo={heroInfo} />
      <ProjectLists
        title="Recent Project"
        className="mb-2"
        recentProjects={projects}
      />
      <div className="text-center mb-5">
        <Link to="/project" className="btn btn-primary">
          More Projects
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

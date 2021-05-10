import { useEffect, useState } from "react";
import RecentPosts from "../../components/blog/recentPosts";
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
      <HeroArea heroInfo={heroInfo} />
      <RecentPosts recentProjects={projects} />
    </div>
  );
};

export default HomePage;

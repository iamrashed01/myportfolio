import RecentPosts from "../../components/blog/recentPosts";
import HeroArea from "../../components/heroArea";
import { useQuery } from "react-query";
import { apiRequest } from "../../utils/request";
import * as urls from "../../utils/urls";

const HomePage = () => {
  const { data: heroInfo } = useQuery(
    "myInfo",
    async () => await apiRequest(urls.GET_MY_INFO),
    {
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );
  const { data: projects } = useQuery(
    "recentProjects",
    async () => await apiRequest(urls.GET_PROJECTS),
    {
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );
  const info = heroInfo?.data.data;
  const recentProjects = projects?.data.data || [];
  return (
    <div>
      <HeroArea heroInfo={info} />
      <RecentPosts recentProjects={recentProjects} />
    </div>
  );
};

export default HomePage;

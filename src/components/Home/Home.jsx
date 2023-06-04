import Banner from "./Banner";
import Career from "./Career";
import FavoriteCourse from "./FavoriteCourse";
import FeaturedCourse from "./FeaturedCourse";
import OfficeAssets from "./OfficeAssets";
import TrendingCourses from "./TrendingCourses";


const Home = () => {
  return (
    <div>
      <Banner/>
      <OfficeAssets/>
      <FavoriteCourse/>
      <FeaturedCourse/>
      <Career/>
      <TrendingCourses/>
    </div>
  );
};

export default Home;
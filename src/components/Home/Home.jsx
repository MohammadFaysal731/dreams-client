import Banner from "./Banner";
import FavoriteCourse from "./FavoriteCourse";
import FeaturedCourse from "./FeaturedCourse";
import OfficeAssets from "./OfficeAssets";


const Home = () => {
  return (
    <div>
      <Banner/>
      <OfficeAssets/>
      <FavoriteCourse/>
      <FeaturedCourse/>
    </div>
  );
};

export default Home;
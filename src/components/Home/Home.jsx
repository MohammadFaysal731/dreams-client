import Banner from "./Banner";
import Career from "./Career";
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
      <Career/>
    </div>
  );
};

export default Home;
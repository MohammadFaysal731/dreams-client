import Banner from "./Banner";
import Career from "./Career";
import FavoriteCourse from "./FavoriteCourse";
import FeaturedCourse from "./FeaturedCourse";
import Instructor from "./Instructor";
import LatesBlogs from "./LatesBlogs";
import OfficeAssets from "./OfficeAssets";
import ShareYourKnowledge from "./ShareYourKnowledge";
import TrendingCourses from "./TrendingCourses";
import Trusted from "./Trusted";


const Home = () => {
  return (
    <div>
      <Banner/>
      <OfficeAssets/>
      <FavoriteCourse/>
      <FeaturedCourse/>
      <Career/>
      <TrendingCourses/>
      <Instructor/>
      <Trusted/>
      <ShareYourKnowledge/>
      {/* <Reviews/> */}
      <LatesBlogs/>
    </div>
  );
};

export default Home;
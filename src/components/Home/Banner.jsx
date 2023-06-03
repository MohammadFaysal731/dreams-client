import { AiFillStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
const Banner = () => {
  return (
    <div className="z-0 bg-gradient-to-t from-accent to-secondary md:bg-gradient-to-l md:from-accent md:to-secondary lg:bg-gradient-to-r lg:from-accent lg:to-secondary">
      <div className="place-items-center max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2">
        {/* left */}
        <div className="md:mt-28 m-5">
          <p className="mb-4 text-sm md:text-lg text-secondary-focus font-medium">
            The Leader in Online Learning
          </p>
          <h1 className="text-3xl font-bold">Engaging & Accessible Online</h1>
          <h1 className="text-3xl font-bold">Courses For All</h1>
          <p className="mt-4 text-sm md:text-lg text-secondary-focus font-medium">
            Own your future learning new skills online
          </p>
          {/* search part  */}
          <div className="space-y-3 md:space-y-0  md:flex md:justify-between md:items-center mt-5 p-8 md:p-3 bg-white  md:rounded-full rounded-3xl">
            {/* item 1 */}
            <div className="flex">
              <FiSearch className="mx-2 text-3xl text-primary" />
              <input
                className="w-full border-none outline-none "
                type="text"
                placeholder="Search School,Online education centers, etc"
              />
            </div>

            {/* item 2 */}
            <div className="flex justify-between items-center bg-accent  px-8 py-2 rounded-full font-medium ">
              <span>Category</span>
              <span>
                <BiChevronDown className="text-xl cursor-pointer" />
              </span>
            </div>
            {/* item 3 */}
            <div>
              <BsFillArrowRightCircleFill className="text-primary text-4xl cursor-pointer" />
            </div>
          </div>
          <p className="text-sm md:text-lg mt-3 text-secondary-focus font-medium">
            Trusted by over 15K Users
          </p>
          <p className="text-sm md:text-lg text-secondary-focus font-medium">
            worldwide since 2022
          </p>
          <div className="flex mb-32 mt-5">
            <div className="text-3xl font-bold whitespace-nowrap">1000+</div>
            <div className="text-3xl font-bold mx-3 flex items-center">
              <span className="">4.4</span>
              <span className="mx-2 flex space-x-3" style={{ color: "#FFB800" }}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="mb-16 mt-14">
          <img
            src="https://dreamslms.dreamguystech.com/html/assets/img/object.png"
            alt="banner-image"
            className="w-full md:w-[90%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

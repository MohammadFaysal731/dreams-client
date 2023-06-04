import { BiChevronDown } from "react-icons/bi";
import { RiMenu2Fill } from "react-icons/ri";
const Header = () => {
 
  return (
    <nav className="p-2 bg-gradient-to-r from-accent to-secondary">
      <div className="max-w-[1440px] mx-auto p-2 flex justify-between items-center ">
        {/* first part */}
        <div className="flex p-2 items-center relative z-0">
          <RiMenu2Fill className="lg:hidden cursor-pointer  text-4xl text-primary" />
          <div className="">
            <img
              src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
              alt="logo"
              className="h-8"
            />
          </div>
        </div>
        {/* second part */}
        <ul className="hidden lg:flex font-semibold space-x-6">
          <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
            <span className="flex justify-center items-center">
              Home <BiChevronDown className="text-xl" />
            </span>
          </li>
          <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
            <span className="flex justify-center items-center">
              Instructor <BiChevronDown className="text-xl" />
            </span>
          </li>
          <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
            <span className="flex justify-center items-center">
              Student <BiChevronDown className="text-xl" />
            </span>
          </li>
          <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
            <span className="flex justify-center items-center">
              Page <BiChevronDown className="text-xl" />
            </span>
          </li>
          <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
            <span className="flex justify-center items-center">
              Blog <BiChevronDown className="text-xl" />
            </span>
          </li>
        </ul>
        {/* third part */}
        <div className="space-x-4 hidden md:block">
          <button className="transition-all delay-100 duration-300 font-semibold hover:bg-primary hover:text-white   px-11 py-1.5 rounded-full">
            Signin
          </button>
          <button className="transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary hover:border-primary px-8 py-1.5 rounded-full">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

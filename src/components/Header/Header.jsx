import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { RiMenu2Fill } from "react-icons/ri";
const Header = () => {
  const [open, setOpen]=useState(false);
  return (
    <nav className="p-2 bg-gradient-to-r from-accent to-secondary" >
      <div className="max-w-7xl mx-auto p-2 flex justify-between items-center ">
        {/* first part */}
        <div className="flex p-2 items-center relative z-0">
          <RiMenu2Fill
            onClick={() => setOpen(!open)}
            className="lg:hidden cursor-pointer  text-4xl text-primary"
          />
          <div className="mx-auto">
           <img
            src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
            alt="logo"
            className="h-8"
          /> 
          </div>
          
          {/* mobile menu */}
          {open ? (
            <ul
              className={`z-1 left-0  absolute bg-primary ${
                open
                  ? "w-[290px] h-screen top-0 transition-all delay-100 duration-300"
                  : "w-[0px] h-screen top-0 transition-all delay-100 duration-300"
              } `}
            >
              <div
                className="p-4 bg-white flex justify-between
            items-center"
              >
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
                  alt="logo"
                  className="h-8"
                />
                <GrFormClose
                  onClick={() => setOpen(!open)}
                  className="text-2xl cursor-pointer"
                />
              </div>
              <li>jjj</li>
              <li>jjj</li>
              <li>jjj</li>
              <li>jjj</li>
              <li>jjj</li>
              <li>jjj</li>
              <li>jjj</li>
              <li>jjj</li>
              <li>jjj</li>
              <li>jjj</li>
            </ul>
          ) : (
            <></>
          )}
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
          <button className="transition-all delay-100 duration-300 font-semibold hover:bg-primary hover:text-white  px-5 py-1 rounded-full">
            Signin
          </button>
          <button className="transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary hover:border-primary px-5 py-1 rounded-full">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

const Footer = () => {
  return (
    <footer className="p-3">
      <div className="max-w-[1440px] mx-auto p-2">
        {/* first part */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-36 gap-y-10">
          {/* first column  */}
          <div>
            <img
              className="h-8"
              src={
                "https://dreamslms.dreamguystech.com/html/assets/img/logo.svg"
              }
              alt=""
            />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat mauris Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut consequat mauris
            </p>
          </div>
          {/* second column  */}
          <div>
            <h2 className="text-lg font-bold">For Instructor</h2>
            <ul className="space-y-6 mt-4">
              <li>Profile</li>
              <li>Login</li>
              <li>Register</li>
              <li>Instructor</li>
              <li>Dashboard</li>
            </ul>
          </div>
          {/* third column  */}
          <div>
            <h2 className="text-lg font-bold">For Student</h2>
            <ul className="space-y-6  mt-4">
              <li>Profile</li>
              <li>Login</li>
              <li>Register</li>
              <li>Instructor</li>
              <li>Dashboard</li>
            </ul>
          </div>
          {/* forth column  */}
          <div>
            <h2 className="text-lg font-bold">News Letter</h2>
            <ul className="space-y-6 mt-4">
              <li className="flex items-center">
                <span>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-20.svg"
                    alt=""
                  />
                </span>
                <span className="mx-4">
                  3556 Beech Street, San Francisco,
                  <p> California, CA 94108</p>
                </span>
              </li>
              <li className="flex">
                <span>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-19.svg"
                    alt=""
                    className=""
                  />
                </span>
                <span className="mx-4">dreamslms@example.com</span>
              </li>
              <li className="flex">
                <span>
                  <img
                    src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-21.svg"
                    alt=""
                  />
                </span>
                <span className="mx-4">+19 123-456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        {/* seconde part desktop and laptop */}
        <div className="hidden md:flex md:justify-between md:items-center m-12 space-y-5">
          <span className="mx-32">
            Terms
            <span className="select-none mx-2 text-2xl font-thin ">
              &#124;
            </span>
            Privacy
          </span>
          <span>© 2023 DreamsLMS. All rights reserved.</span>
        </div>
        {/* seconde part mobile */}
        <div className="md:hidden flex flex-col items-center m-12 space-y-5">
          <span>Terms</span>
          <span>Privacy</span>
          <span>© 2023 DreamsLMS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { HiUsers } from "react-icons/hi";
const Instructor = () => {
  return (
    <div className="bg-gradient-to-t from-accent to-secondary md:bg-gradient-to-l md:from-accent md:to-secondary lg:bg-gradient-to-r lg:from-accent lg:to-secondary pt-4 pb-24">
      <div className=" max-w-[1440px] mx-auto p-3 ">
        {/* first part */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-8">Featured Instructor</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum
          </p>
          <p className="text-sm">
            gravida maecenas augue elementum et neque. Suspendisse imperdiet.
          </p>
        </div>
        {/* second part */}
        <div className="">
          {/* container  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* instructor 1 */}
            <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/user/user8.jpg"
                  alt="instructor"
                  className="rounded-t w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">David Lee</h2>
                <h4 className="text-warning-content font-medium">
                  Web Developer
                </h4>
                <span className="flex items-center">
                  <HiUsers className="text-lg text-primary me-3" />
                  <p className="text-sm font-medium ">50 Students</p>
                </span>
              </div>
            </div>
            {/* instructor 1 */}
            <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/user/user8.jpg"
                  alt="instructor"
                  className="rounded-t w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">David Lee</h2>
                <h4 className="text-warning-content font-medium">
                  Web Developer
                </h4>
                <span className="flex items-center">
                  <HiUsers className="text-lg text-primary me-3" />
                  <p className="text-sm font-medium ">50 Students</p>
                </span>
              </div>
            </div>
            {/* instructor 1 */}
            <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/user/user8.jpg"
                  alt="instructor"
                  className="rounded-t w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">David Lee</h2>
                <h4 className="text-warning-content font-medium">
                  Web Developer
                </h4>
                <span className="flex items-center">
                  <HiUsers className="text-lg text-primary me-3" />
                  <p className="text-sm font-medium ">50 Students</p>
                </span>
              </div>
            </div>
            {/* instructor 1 */}
            <div className="card max-w-md md:max-w-xs bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://dreamslms.dreamguystech.com/html/assets/img/user/user8.jpg"
                  alt="instructor"
                  className="rounded-t w-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">David Lee</h2>
                <h4 className="text-warning-content font-medium">
                  Web Developer
                </h4>
                <span className="flex items-center">
                  <HiUsers className="text-lg text-primary me-3" />
                  <p className="text-sm font-medium ">50 Students</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;

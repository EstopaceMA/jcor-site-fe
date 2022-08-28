import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import logo from "../../assets/images/jcor_logo.png";

const variants = {
  /** this is the "visible" key and it's correlating styles **/
  visible: { opacity: 1, y: 0 },
  /** this is the "hidden" key and it's correlating styles **/
  hidden: { opacity: 0, y: -25 },
};

export const Navbar: FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const navigate = useNavigate();

  /** this hook gets the scroll y-axis **/
  const { scrollY } = useScroll();

  /** this hook manages state **/
  const [hidden, setHidden] = useState<boolean>(false);

  /** this onScrollYChange function will be called in the `scrollY.onChange` callback **/
  const onScrollYChange = () => {
    const scrollYVal = scrollY as unknown as any;
    if (scrollYVal?.current < scrollYVal?.prev) {
      setHidden(false);
    } else if (
      scrollYVal?.current > 100 &&
      scrollYVal?.current > scrollYVal?.prev
    ) {
      setHidden(true);
    }
  };

  useEffect(() => {
    scrollY.onChange(() => onScrollYChange());
  });

  return (
    <motion.nav
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? "hidden" : "visible"}
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }}
      className="relative sticky top-0 w-full bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-300"
      style={{ zIndex: 1 }}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <a href="javascript:void(0)">
              <img src={logo} alt="jcor_logo" className="h-16" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-900 hover:text-emerald-600">
                <a
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="text-gray-900 hover:text-emerald-600">
                <a
                  className="cursor-pointer"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   navigate("/about");
                  // }}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

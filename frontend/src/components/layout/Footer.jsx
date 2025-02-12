import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation(); // Hook to get the current location (URL)

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="bg-[#e0f4ff]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8 items-start">
            <div className="space-y-4">
              <div>
                <Link to="/">
                  <div className="flex items-start space-x-2 text-2xl font-medium">
                    <span>
                      <img
                        src="/img/logo-trans.png"
                        alt="AI Logo"
                        className="w-[164px]"
                      />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="max-w-md pr-16 text-md text-black font-medium">
                ModVisor (short for Modelling Advisor) is revolutionizing
                financial modelling! As a forward-thinking start-up, we aim to
                be your ultimate one-stop shop for all things spreadsheet,
                transforming the way businesses work with data every day.
              </div>
              <div className="flex space-x-2">
                <a
                  href="https://www.linkedin.com/company/modvisor-business-consultants/ "
                  target="_blank"
                  className="text-black hover:text-gray-200"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-16 xl:col-span-2 xl:mt-0">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div>
                  <h3 className="text-md font-extrabold leading-6 text-textColor text-xl">
                    Our Services
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        to="/services/modelbuild"
                        className="text-md font-bold leading-6 text-black hover:text-[#ffc541]"
                      >
                        Model Build
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/modelreview"
                        className="text-md font-bold leading-6 text-black hover:text-[#ffc541]"
                      >
                        Model Review
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/training"
                        className="text-md font-bold leading-6 text-black hover:text-[#ffc541]"
                      >
                        Training
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-md font-extrabold leading-6 text-textColor text-xl">
                    About Us
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        to="/team"
                        className="text-md font-bold leading-6 text-black hover:text-[#ffc541]"
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/join"
                        className="text-md font-bold leading-6 text-black hover:text-[#ffc541]"
                      >
                        Join Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="text-md font-bold leading-6 text-black hover:text-[#ffc541]"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-md font-extrabold leading-6 text-textColor text-xl">
                    Contact
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li className="text-md leading-6 text-black font-bold">
                      Phone:{" "}
                      <a
                        href="tel:+1234567890"
                        className="hover:text-black font-bold"
                      >
                        +91- 87504 05320
                      </a>
                    </li>
                    <li className="text-md leading-6 text-black font-semibold">
                      Email:{" "}
                      <a
                        href="mailto:info@example.com"
                        className="hover:text-[#ffc541]"
                      >
                        devasheesh.pant@modvisorbusiness <br />
                        consultants.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-black">
              © 2025 <span className="font-semibold">ModVisor</span>. All rights
              reserved. Powered by
              <a
                rel="noopener"
                href="https://digiace.in/"
                className="font-extrabold"
              >
                {" "}
                DigiAce
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

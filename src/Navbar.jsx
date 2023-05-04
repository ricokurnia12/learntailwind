import React, { useState } from 'react';

const Navbar = () => {
  const [navTogle, setNavTogle] = useState(false);
  return (
    <React.Fragment>
      <header className="bg-transparent  w-full flex items-center z-10 border">
        <div
          className={`container ${navTogle ? 'h-60' : ''} md:h-20`}
        >
          <div
            className="flex items-center justify-between relative
            "
          >
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                RKP
              </a>
            </div>

            <div className="flex flex-col justify-center px-4">
              <button
                type="button"
                className="block absolute right-4 md:hidden"
                onClick={() => {
                  setNavTogle(!navTogle);
                }}
              >
                <span
                  className={`humberger-line transition ${
                    navTogle && 'rotate-45 absolute transition '
                  }`}
                ></span>
                <span
                  className={`humberger-line transition ${
                    navTogle && '-rotate-45 transition'
                  }`}
                ></span>
                {!navTogle && (
                  <span className={`humberger-line`}></span>
                )}
              </button>
              <div
                className={`${
                  navTogle ? 'block' : 'hidden'
                } text-xl text-slate-500 absolute  right-4 top-14 flex flex-col text-end md:flex-row md:top-6 md:block`}
              >
                <a href="" className=" mr-4">
                  Home
                </a>
                <a href="" className=" mr-4">
                  About
                </a>
                <a href="" className=" mr-4">
                  Why us
                </a>
                <a href="" className=" mr-4">
                  Price
                </a>
                <a href="" className=" mr-4">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  const [displayAlert, setDisplayAlert] = useState(false);

  const notWorkingAlert = () => {
    setDisplayAlert(true);
    setTimeout(() => setDisplayAlert(false), 1500);
  };

  const alertBox = (
    <div className="absolute flex items-center right-0 h-full w-full bg-red-400 border rounded-tl-md border-l-blue-800">
      <p className="mx-auto text-white text-4xl text-center">It wont work!</p>
    </div>
  );
  return (
    <header className="w-full h-12percent px-6 py-25 bg-white flex justify-between sticky top-0 z-50 shadow-lg">
      {displayAlert ? alertBox : null}
      <div className="w-8/12 flex flex-row">
        <div className="flex flex-col justify-center mr-10">
          <h1 className="text-blue-400 text-lg sm:text-xl lg:text-3xl text-bold font-bold cursor-pointer">
            {title}
          </h1>
        </div>
        <nav className="hidden md:flex flex-col justify-center mt-2 text-xl">
          <ul className="flex flex-row">
            <button
              type="button"
              onClick={notWorkingAlert}
              className="px-5 cursor-pointer"
            >
              BOOKS
            </button>
            <button
              type="button"
              onClick={notWorkingAlert}
              className="px-5 cursor-pointer"
            >
              CATEGORIES
            </button>
          </ul>
        </nav>
      </div>
      <div className="w-4/12 flex flex-row justify-end my-auto">
        <div className="h-12 w-12 rounded-full bg-gray-100 border border-gray-300 text-center flex flex-col justify-center cursor-pointer hover:bg-gray-300">
          <Link to="/login">
            <span role="img" aria-label="profile" className="text-2xl">
              👱🏼
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Bookstore CMS',
};

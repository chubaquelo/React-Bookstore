import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <header className="relative w-full h-20 px-6 py-25 bg-white flex justify-between">
      {displayAlert ? alertBox : null}
      <div className="w-11/12 flex flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-blue-400 text-2xl sm:text-3xl text-bold font-bold cursor-pointer">
            {title}
          </h1>
        </div>
        <nav className="hidden md:flex flex-col justify-center mt-3 text-xl">
          <ul className="ml-8 flex flex-row text-gray-600 text-lg font-black font-sans">
            <button
              type="button"
              onClick={notWorkingAlert}
              className="px-4 cursor-pointer hover:text-black"
            >
              BOOKS
            </button>
            <button
              type="button"
              onClick={notWorkingAlert}
              className="px-4 cursor-pointer hover:text-black"
            >
              CATEGORIES
            </button>
          </ul>
        </nav>
      </div>
      <div className="w-2/12 flex flex-row justify-end my-auto">
        <div className="h-12 w-12 rounded-full bg-gray-100 border border-gray-300 text-center flex flex-col justify-center cursor-pointer hover:bg-gray-300">
          <button type="button" onClick={notWorkingAlert}>
            <span role="img" aria-label="profile" className="text-2xl">
              👱🏼
            </span>
          </button>
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

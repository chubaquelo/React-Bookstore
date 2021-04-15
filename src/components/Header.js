import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({ title }) => {
  const isLoggedIn = useSelector(state => state.session[1]);

  return (
    <header className="w-full h-12percent px-6 py-25 bg-white flex justify-between sticky top-0 z-50 shadow-lg">
      <div className="w-8/12 flex flex-row">
        <div className="flex flex-col justify-center mr-10">
          <Link to="/">
            <h1 className="text-blue-400 text-lg sm:text-xl lg:text-3xl text-bold font-bold cursor-pointer">
              {title}
            </h1>
          </Link>
        </div>
        <nav className="hidden md:flex flex-col justify-center mt-2 text-xl">
          <ul className="flex flex-row">
            <Link to="/">BOOKS</Link>
          </ul>
        </nav>
      </div>
      <div className="w-4/12 flex flex-row justify-end my-auto">
        {!isLoggedIn && (
          <div className="h-12 w-12 rounded-full bg-gray-100 border border-gray-300 text-center flex flex-col justify-center cursor-pointer hover:bg-gray-300">
            <Link to="/login">
              <span role="img" aria-label="profile" className="text-2xl">
                👱🏼
              </span>
            </Link>
          </div>
        )}

        {isLoggedIn && (
          <div className="ml-2 h-12 w-12 rounded-full bg-gray-100 border border-gray-300 text-center flex flex-col justify-center cursor-pointer hover:bg-gray-300">
            <span role="img" aria-label="profile" className="text-2xl">
              ❌
            </span>
          </div>
        )}
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

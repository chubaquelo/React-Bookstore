import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header className="w-full h-24 px-6 py-25 bg-white flex justify-between">
    <div className="w-8/12 flex flex-row">
      <div className="flex flex-col justify-center mr-10">
        <h1 className="text-blue-400 text-3xl text-bold font-bold cursor-pointer">
          {title}
        </h1>
      </div>
      <nav className="hidden md:flex flex-col justify-center mt-2 text-xl">
        <ul className="flex flex-row">
          <li className="px-5 cursor-pointer">BOOKS</li>
          <li className="px-5 cursor-pointer">CATEGORIES</li>
        </ul>
      </nav>
    </div>
    <div className="w-4/12 flex flex-row justify-end my-auto">
      <div className="h-12 w-12 rounded-full bg-gray-100 border border-gray-300 text-center flex flex-col justify-center cursor-pointer hover:bg-gray-300">
        <span role="img" aria-label="profile" className="text-2xl">👱🏼</span>
      </div>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Bookstore CMS',
};

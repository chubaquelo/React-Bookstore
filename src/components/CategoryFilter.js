import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const categoryOptions = categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));
  return (
    <div className="w-11/12 mx-auto text-center mb-6">
      <label
        htmlFor="categories"
        name="categories"
        className="text-2xl text-gray-700"
      >
        Show:
        <select
          name="categories"
          className="ml-3 cursor-pointer w-8/12 sm:w-2/12 h-11 text-2xl px-3 shadow border rounded cursor-pointer bg-white text-gray-700"
          onChange={handleFilter}
        >
          {categoryOptions}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleFilter: () => {},
};

export default CategoryFilter;

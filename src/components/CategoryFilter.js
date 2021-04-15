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
    <div className="w-11/12 mx-auto text-center pt-4">
      <label htmlFor="categories" name="categories" className="text-xl">
        Show:
        <select
          name="categories"
          className="h-11 text-xl ml-3 cursor-pointer"
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

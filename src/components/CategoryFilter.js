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
    <div>
      <select onChange={handleFilter}>
        {categoryOptions}
      </select>
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

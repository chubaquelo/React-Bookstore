import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ id, title, category }) {
  return (
    <>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </>
  );
}

Book.defaultProps = {
  id: 0,
  title: '',
  category: '',
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

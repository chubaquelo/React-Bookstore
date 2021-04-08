import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, removeBook,
}) => (
  <>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button type="button" onClick={() => removeBook(id)}>Remove Book</button></td>
  </>
);

export default Book;

Book.defaultProps = {
  id: 0,
  title: '',
  category: '',
  removeBook: () => {},
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  removeBook: PropTypes.func,
};

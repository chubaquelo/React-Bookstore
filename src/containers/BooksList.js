import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ bookData, dispatch }) => {
  function removeThisBook(id) {
    dispatch(removeBook(id));
  }

  const books = bookData.map(book => (
    <tr key={book.id}>
      <Book
        id={book.id}
        title={book.title}
        category={book.category}
        removeBook={removeThisBook}
      />
    </tr>
  ));

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{books}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  bookData: state.bookReducer,
});

BooksList.propTypes = {
  bookData: PropTypes.oneOfType(['string', 'array', 'object']),
  dispatch: PropTypes.func,
};

BooksList.defaultProps = {
  bookData: {},
  dispatch: () => {},
};

export default connect(mapStateToProps, null)(BooksList);

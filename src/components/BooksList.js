import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

function BooksList({ bookData }) {
  const books = bookData.map(book => (
    <tr key={book.id}>
      <Book id={book.id} title={book.title} category={book.category} />
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
        <tbody>
          {books}
        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    bookData: state.bookReducer,
  };
}

BooksList.propTypes = {
  bookData: PropTypes.oneOfType(['string', 'array', 'object']),

};

BooksList.defaultProps = {
  bookData: {},
};

export default connect(mapStateToProps, null)(BooksList);

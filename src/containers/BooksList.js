import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ bookData, dispatch, filterData }) => {
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

  const handleFilter = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  console.log(filterData);

  return (
    <div>
      <CategoryFilter handleFilter={handleFilter} />
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
  filterData: state.filterReducer,
});

BooksList.propTypes = {
  bookData: PropTypes.oneOfType(['string', 'array', 'object']),
  filterData: PropTypes.oneOfType(['string', 'array', 'object']),
  dispatch: PropTypes.func,
};

BooksList.defaultProps = {
  bookData: {},
  filterData: {},
  dispatch: () => {},
};

export default connect(mapStateToProps, null)(BooksList);

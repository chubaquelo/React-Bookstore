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

  const filteredBookData = bookData.filter(book => (filterData === 'All'
    ? true
    : book.category === filterData));

  const books = filteredBookData.map(book => (
    <div key={book.id}>
      <Book
        id={book.id}
        title={book.title}
        category={book.category}
        removeBook={removeThisBook}
      />
    </div>
  ));

  const handleFilter = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  return (
    <div>
      <CategoryFilter handleFilter={handleFilter} />
      <section className="">
        {books}
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  bookData: state.book,
  filterData: state.filter,
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

import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook, getUserBooks } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ bookData, dispatch, filterData }) => {
  const dispatchTest = useDispatch();

  function removeThisBook(id) {
    dispatch(removeBook(id));
  }

  useEffect(() => {
    dispatchTest(
      getUserBooks(
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2MTg1MDI1OTcsImlhdCI6MTYxODQxNjE5N30.sWRa0nZTsZpc88BBUh13951dg6cdBV8PbPLX3-7_pec',
      ),
    );
  }, []);

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
      <section className="w-11/12 mx-auto">
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

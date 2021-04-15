import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import {
  changeFilter,
  getUserBooks,
  deleteUserBook,
} from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ bookData, dispatch, filterData }) => {
  const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2MTg1Mjk5MTEsImlhdCI6MTYxODQ0MzUxMX0.CYFXxda3cqy3-XHhq7tWXXns-tHBvn2m3rVTLWqp_60';

  function removeThisBook(id) {
    dispatch(deleteUserBook(AUTH_TOKEN, id));
    // Promise.all([dispatch(deleteUserBook(AUTH_TOKEN, id))]).then(() =>
    //   setTimeout(() => dispatch(getUserBooks(AUTH_TOKEN)), 100)
    // );
  }

  useEffect(() => {
    dispatch(getUserBooks(AUTH_TOKEN));
  }, []);

  window.console.log(bookData);
  let books;

  if (bookData !== undefined) {
    books = bookData.filter(book => (filterData === 'All'
      ? true
      : book.category.name === filterData))
      .map(book => (
        <div key={book.id}>
          <Book
            id={book.id}
            title={book.title}
            category={book.category.name}
            removeBook={removeThisBook}
          />
        </div>
      ));
  }

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
  bookData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  filterData: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  dispatch: PropTypes.func,
};

BooksList.defaultProps = {
  bookData: {},
  filterData: {},
  dispatch: () => {},
};

export default connect(mapStateToProps, null)(BooksList);

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
  // const dispatchTest = useDispatch();

  const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE2MTg1MDQ2NjgsImlhdCI6MTYxODQxODI2OH0.NdkJHQnzZblW1eHXPVS81_4_6H_gyb6cc9BRTwtjnmI';

  function removeThisBook(id) {
    dispatch(deleteUserBook(AUTH_TOKEN, id));
    window.location.reload();
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

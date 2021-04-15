import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Book from '../components/Book';
import {
  changeFilter,
  getUserBooks,
  deleteUserBook,
} from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const dispatch = useDispatch();

  const authToken = useSelector(state => state.session[0]);
  const isLoggedIn = useSelector(state => state.session[1]);
  const bookData = useSelector(state => state.book);
  const filterData = useSelector(state => state.filter);

  function removeThisBook(id) {
    dispatch(deleteUserBook(authToken, id));
  }

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserBooks(authToken));
    }
  }, []);

  let books;

  if (bookData !== undefined) {
    books = bookData
      .filter(book => (filterData === 'All' ? true : book.category.name === filterData))
      .map(book => (
        <div key={book.id}>
          <Book
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category.name}
            progress={book.progress}
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
      {!isLoggedIn && <Redirect to="/" />}
      {isLoggedIn && (
        <>
          <CategoryFilter handleFilter={handleFilter} />
          <section className="w-11/12 mx-auto">{books}</section>
        </>
      )}
    </div>
  );
};

export default BooksList;

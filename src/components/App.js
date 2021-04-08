import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const App = () => (
  <>
    <Header />
    <div>
      <h1 className="text-4xl">Hi!</h1>
      <BooksForm />
      <BooksList />
    </div>
  </>
);

export default App;

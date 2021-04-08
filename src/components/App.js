import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <h1 className="text-4xl">Hi!</h1>
    <BooksForm />
    <BooksList />
  </div>
);

export default App;

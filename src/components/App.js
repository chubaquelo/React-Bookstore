import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const App = () => (
  <>
    <Header />
    <div className="bg-gray-100 font-serif">
      <BooksList />
      <BooksForm />
    </div>
  </>
);

export default App;

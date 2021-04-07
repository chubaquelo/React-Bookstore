import React from 'react';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';

export default function App() {
  return (
    <div>
      <h1>Hi!</h1>
      <BooksForm />
      <BooksList />
    </div>
  );
}

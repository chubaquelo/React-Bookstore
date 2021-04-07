import React from 'react';
// import { useSelector } from 'react-redux';
import Book from './Book';

export default function BooksList() {
  // window.console.log(useSelector());
  // const bookData = state

  const bookData = [
    { id: 1, title: 'one', category: 'cat' },
    { id: 2, title: 'two', category: 'cat' },
  ];

  const books = bookData.map(book => (
    <tr key={book.id}>
      <Book id={book.id} title={book.title} category={book.category} />
    </tr>
  ));

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    </div>
  );
}

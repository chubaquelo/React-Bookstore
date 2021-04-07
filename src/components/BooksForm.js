import React, { useState } from 'react';

export default function BooksForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSelect(event) {
    setCategory(event.target.value);
  }

  return (
    <div>
      <form className="bg-blue-200">
        <input onChange={handleChange} value={title} />
        <h1>
          {' '}
          {title}
        </h1>
        <h2>{category}</h2>
        <select value={category} onChange={handleSelect}>
          <option value="action">Action</option>
          <option value="biography">Biography</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="kids">Kids</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="learning">Learning</option>
        </select>
        <button type="button" onClick={() => {}}>
          Create Book
        </button>
      </form>
    </div>
  );
}

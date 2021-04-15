import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserBook } from '../actions';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const authToken = useSelector(state => state.authToken);
  const [isNoNameError, setIsNoNameError] = useState(false);
  const [category, setCategory] = useState('1');
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryOptions = categories.map((category, index) => (
    <option key={category} value={index + 1}>
      {category}
    </option>
  ));

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'title') {
      setIsNoNameError(false);
      setTitle(value);
    } else if (name === 'author') {
      setAuthor(value);
    }
  };

  const handleSelect = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    if (title === '') {
      setIsNoNameError(true);
    } else {
      dispatch(addUserBook(authToken, { title, author, category }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="bg-gray-100 font-serif w-9/12 mx-auto p-5 pb-24">
      <hr className="my-8" />
      <h3 className="text-gray-400 text-2xl font-bold font-sans mb-4">
        ADD NEW BOOK
        {isNoNameError ? (
          <span className="ml-5 text-red-400">
            MUST ADD A TITLE FOR YOUR BOOK!
          </span>
        ) : null}
      </h3>
      <form className="flex flex-row justify-between">
        <label
          className="pb-2 block text-gray-700 font-bold mb-2"
          htmlFor="title"
        >
          Title
          <input
            placeholder="Input your book name..."
            onChange={handleChange}
            value={title}
            name="title"
            className="mt-2 h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label
          className="pb-2 block text-gray-700 font-bold mb-2"
          htmlFor="author"
        >
          Author
          <input
            placeholder="Input your book's author name..."
            onChange={handleChange}
            value={author}
            name="author"
            className="mt-2 h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <select
          placeholder="Category"
          value={category}
          onChange={handleSelect}
          className="w-2/12 text-2xl cursor-pointer"
        >
          <option value="0" className="text-lg" disabled>
            Select a Category...
          </option>
          {categoryOptions}
        </select>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-2/12 text-2xl bg-blue-600 text-white hover:bg-blue-800 rounded-sm"
        >
          Create Book
        </button>
      </form>
    </div>
  );
};

export default BooksForm;

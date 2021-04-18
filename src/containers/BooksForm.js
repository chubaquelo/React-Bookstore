import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserBook } from '../actions';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const authToken = useSelector(state => state.session[0]);
  const isLoggedIn = useSelector(state => state.session[1]);
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

  const keyUpSubmitTest = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const form = (
    <div className="bg-gray-100 font-sans w-10/12 lg:w-10/12 mx-auto p-4 mt-8">
      <h3 className="text-gray-500 text-2xl font-bold font-sans mb-4">
        ADD NEW BOOK
        {isNoNameError ? (
          <>
            <span className="hidden lg:inline ml-5 text-red-400">
              MUST ADD A TITLE FOR YOUR BOOK!
            </span>
            <p className="lg:hidden text-red-400 text-base">
              MUST ADD A TITLE FOR YOUR BOOK!
            </p>
          </>
        ) : null}
      </h3>
      <form className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
        <label
          className="block text-xl text-gray-400 font-bold"
          htmlFor="title"
        >
          Title
          <input
            placeholder="Input your book name..."
            onChange={handleChange}
            onKeyUp={keyUpSubmitTest}
            value={title}
            name="title"
            className="mt-1 h-11 lg:my-3 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label
          className="block mt-3 lg:my-3 text-xl text-gray-400 font-bold"
          htmlFor="author"
        >
          Author
          <input
            placeholder="Input your book's author name..."
            onChange={handleChange}
            onKeyUp={keyUpSubmitTest}
            value={author}
            name="author"
            className="mt-1 h-11 lg:mt-3 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label
          className="block my-3 text-xl text-gray-400 font-bold"
          htmlFor="author"
        >
          Category
          <select
            placeholder="Category"
            value={category}
            onChange={handleSelect}
            className="w-full my-3 lg:mt-3 lg:my-0 h-11 text-xl px-3 shadow border rounded cursor-pointer bg-white text-gray-700"
          >
            <option
              value="0"
              className="text-xl text-gray-500 font-bold"
              disabled
            >
              Select a Category...
            </option>
            {categoryOptions}
          </select>
        </label>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full my-3 lg:w-1/4 h-11 text-xl bg-blue-600 text-white hover:bg-blue-800 rounded-sm"
        >
          Create Book
        </button>
      </form>
      <hr className="mt-8 pt-4" />
    </div>
  );

  return <>{isLoggedIn && form}</>;
};

export default BooksForm;

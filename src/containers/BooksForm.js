import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions';

const BooksForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [isNoNameError, setIsNoNameError] = useState(false);
  const [category, setCategory] = useState('Action');
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryOptions = categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const handleChange = ({ target }) => {
    setIsNoNameError(false);
    setTitle(target.value);
  };

  const handleSelect = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    if (title === '') {
      setIsNoNameError(true);
    } else {
      dispatch(
        addBook({ title, category, id: Math.floor(Math.random() * 1000) }),
      );
      setTitle('');
    }
  };

  return (
    <div className="bg-gray-100 font-serif w-11/12 md:w-9/12 mx-auto p-5 pb-24">
      <hr className="my-8" />
      <h3 className="text-gray-400 text-2xl font-bold font-sans mb-4">
        ADD NEW BOOK
        {isNoNameError ? (
          <span className="hidden md:inline-block ml-5 text-red-400">
            MUST ADD A TITLE FOR YOUR BOOK!
          </span>
        ) : null}
      </h3>
      {isNoNameError ? (
        <p className="md:hidden text-red-400">
          MUST ADD A TITLE FOR YOUR BOOK!
        </p>
      ) : null}
      <form className="flex flex-col md:flex-row justify-center md:justify-between">
        <input
          placeholder="Input your book name..."
          onChange={handleChange}
          value={title}
          className="mb-4 md-mb-0 w-11/12 md:w-7/12 h-11 text-gray-800 text-2xl px-3 rounded-md border"
        />
        <select
          placeholder="Category"
          value={category}
          onChange={handleSelect}
          className="mb-4 md-mb-0 w-11/12 md:w-2/12 h-11 border rounded-md text-2xl cursor-pointer"
        >
          <option value="1" className="text-lg" selected disabled>
            Select a Category...
          </option>
          {categoryOptions}
        </select>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-11/12 md:w-2/12 h-11 text-2xl bg-blue-600 text-white hover:bg-blue-800 rounded-sm"
        >
          Create Book
        </button>
      </form>
    </div>
  );
};

export default connect(null, null)(BooksForm);

BooksForm.propTypes = {
  dispatch: PropTypes.func,
};

BooksForm.defaultProps = {
  dispatch: () => {},
};

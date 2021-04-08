import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions';

const BooksForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('action');
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryOptions = categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleSelect = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      addBook({ title, category, id: Math.floor(Math.random() * 1000) }),
    );
  };

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
          {categoryOptions}
        </select>
        <button
          type="button"
          onClick={handleSubmit}
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

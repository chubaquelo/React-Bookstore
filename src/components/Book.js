import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, removeBook,
}) => (
  <div className="border rounded-md bg-white hover:border-blue w-3/4 m-auto my-4 p-5 grid grid-cols-4 gap-5">
    <div className="col-span-2">
      <span className="text-gray-500 font-sans text-sm font-bold">
        {category}
      </span>
      <h3 className="text-gray-900 font-extrabold text-3xl">{title}</h3>
      <span className="text-blue-300">Author Name</span>
      <div className="divide-x text-blue-400 text-sm">
        <button className="px-2" type="button">
          Edit
        </button>
        <button className="px-2" type="button" onClick={() => removeBook(id)}>
          Remove Book
        </button>
        <button className="px-2" type="button">
          Comments
        </button>
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-3xl">64%</p>
      <p className="text-gray-400 text-sm">Completed</p>
    </div>
    <div className="p-2">
      <p>Current Chapter</p>
      <p>Chapter 3</p>
      <button
        className="bg-blue-500 rounded-sm py-1 px-4 text-white"
        type="button"
      >
        Update Progress
      </button>
    </div>
  </div>
);

export default Book;

Book.defaultProps = {
  id: 0,
  title: '',
  category: '',
  removeBook: () => {},
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  removeBook: PropTypes.func,
};

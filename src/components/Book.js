import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, removeBook,
}) => (
  <div className="border bg-white hover:border-blue w-3/4 m-auto my-4 p-3 flex">
    <div className="">
      <span className="text-gray-500">{category}</span>
      <h3 className="text-gray-900 font-extrabold">{title}</h3>
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
    <div>Update Progress</div>
    <div>
      <button className="bg-blue-500 py-1 px-4 text-white" type="button">
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

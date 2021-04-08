import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, category, removeBook,
}) => {
  const [readPercentage, setReadPercentage] = useState(Math.floor(Math.random() * 100));

  const updateProgress = () => {
    setReadPercentage(Math.floor(Math.random() * 100));
  };
  return (
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
      <div className="flex flex-col justify-center text-center">
        <p className="text-3xl w-20 h-20 mx-auto mb-2">
          <CircularProgressbar
            value={readPercentage}
            text={`${readPercentage}%`}
            styles={{
              trail: {
                // Trail color
                stroke: '#fff',
              },
              // Customize the text
              text: {
                // Text color
                fill: '#2364ea',
                // Text size
                fontSize: '28px',
              },
              path: {
                stroke: '#2364ea',
              },
            }}
          />
        </p>
        <p className="text-gray-400 text-sm">
          {Number(readPercentage) < 75 ? 'Uncompleted' : 'Almost Completed!'}
        </p>
      </div>
      <div className="p-2 flex flex-col justify-between">
        <div>
          <p className="text-gray-600 uppercase text-sm">Current Chapter</p>
          <p>Chapter 3</p>
        </div>
        <div>
          <button
            className=" py-1 px-4 bg-blue-600 text-gray-200 hover:text-white hover:bg-blue-800 rounded-sm uppercase font-thin"
            type="button"
            onClick={updateProgress}
          >
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

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

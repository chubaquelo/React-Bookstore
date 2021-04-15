import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, category, removeBook,
}) => {
  const [readPercentage, setReadPercentage] = useState(Math.floor(Math.random() * 100));
  const [displayAlert, setDisplayAlert] = useState(false);

  const updateProgress = () => {
    setReadPercentage(Math.floor(Math.random() * 100));
  };

  const notWorkingAlert = () => {
    setDisplayAlert(true);
    setTimeout(() => setDisplayAlert(false), 1500);
  };

  const alertBox = (
    <div className="absolute bottom-0 flex items-center right-0 h-full w-full bg-red-400 border rounded-tl-md border-l-blue-800">
      <p className="mx-auto text-white text-4xl text-center">Not working yet..</p>
    </div>
  );

  return (
    <div className="flex flex-col relative border rounded-md bg-white hover:border-blue w-7/8 sm:w-11/12 m-auto my-4 p-5 grid md:grid-cols-4 gap-5">
      { displayAlert ? alertBox : null }
      <div className="mx-auto md:text-left text-center">
        <span className="text-gray-500 font-sans text-sm font-bold">
          {category}
        </span>
        <h3 className="text-gray-900 font-extrabold text-3xl">{title}</h3>
        <span className="text-blue-300 text-center md:text-left">
          Author Name
        </span>
        <div className="hidden md:block divide-x text-blue-400 text-sm">
          <button
            className="px-2"
            type="button"
            onClick={notWorkingAlert}
          >
            Edit
          </button>
          <button className="px-2" type="button" onClick={() => removeBook(id)}>
            Remove Book
          </button>
          <button
            className="px-2"
            type="button"
            onClick={notWorkingAlert}
          >
            Comments
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-auto justify-center text-center">
        <p className="text-3xl md:w-20 md:h-20 w-24 h-24 mx-auto mb-2">
          <CircularProgressbar
            value={readPercentage}
            text={`${readPercentage}%`}
            styles={{
              trail: {
                stroke: '#fff',
              },
              text: {
                fill: '#2364ea',
                fontSize: '28px',
              },
              path: {
                stroke: '#2364ea',
              },
            }}
          />
        </p>
        <p className="text-gray-400 text-lg md:text-sm">
          {Number(readPercentage) < 75 ? 'Uncompleted' : 'Almost Completed!'}
        </p>
      </div>
      <div className="hidden md:flex flex-col mx-auto justify-center">
        <p className="text-gray-600 uppercase text-sm">Current Chapter</p>
        <p>Chapter 3</p>
      </div>
      <div className="p-2 flex mx-auto items-center">
        <div>
          <button
            className="py-1 px-4 h-11 leading-none bg-blue-600 text-gray-200 hover:text-white hover:bg-blue-800 rounded-sm uppercase font-thin"
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

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { updateBookProgress } from '../actions';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, author, category, progress, removeBook,
}) => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const dispatch = useDispatch();
  const authToken = useSelector(state => state.session[0]);

  const updateProgress = () => {
    dispatch(updateBookProgress(authToken, id, progress));
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
    <div className="flex flex-col relative border rounded-md bg-white hover:border-blue w-7/8 sm:w-11/12 m-auto my-4 p-5 grid sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {displayAlert ? alertBox : null}
      <div className="ml-4 sm:text-left text-center">
        <p className="text-gray-500 font-sans text-sm font-bold mb-1">
          {`Category: ${category}`}
        </p>
        <h3 className="text-gray-900 font-extrabold text-3xl">{title}</h3>
        <p className="text-blue-300 text-center sm:text-left mt-1">
          {`Author: ${author}`}
        </p>
        <div className="sm:block divide-x text-blue-400 text-sm text-center sm:text-left mt-2">
          <button className="pr-2" type="button" onClick={() => removeBook(id)}>
            Remove Book
          </button>
          <button className="px-2" type="button" onClick={notWorkingAlert}>
            Comments
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-auto justify-center text-center">
        <p className="text-3xl sm:w-20 sm:h-20 w-24 h-24 mx-auto mb-2">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
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
          {Number(progress) < 75 ? 'Uncompleted' : 'Almost Completed!'}
        </p>
      </div>
      <div className="hidden lg:flex flex-col mx-auto justify-center">
        <p className="text-gray-600 uppercase text-sm">Current Chapter</p>
        <p>{`Chapter ${Math.floor(Math.random() * 10)}`}</p>
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
  author: '',
  category: '',
  progress: '',
  removeBook: () => {},
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  progress: PropTypes.string,
  removeBook: PropTypes.func,
};

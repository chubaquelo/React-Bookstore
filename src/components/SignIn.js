import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import validator from 'validator';
import { signIn, resetError } from '../actions';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => state.session[1]);
  const error = useSelector(state => state.session[2]);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, type } = e.target;
    if (type === 'email') {
      setEmail(value);
    } else if (type === 'password') {
      setPassword(value);
    }
  };

  const logInSubmit = () => {
    if (validator.isEmail(email)) {
      dispatch(signIn(email, password));
    }
  };

  const keyUpSubmitTest = e => {
    if (e.keyCode === 13) {
      logInSubmit();
    }
  };

  return (
    <div className="flex flex-row items-center mx-auto pt-4 sm:pt-10 md:pt-36 lg:pt-20">
      {isLoggedIn && <Redirect to="/books" />}
      <div className="w-11/12 sm:w-full max-w-xs mx-auto pb-16">
        <h2 className="text-3xl font-medium sm:text-5xl text-center mb-4">
          Log In!
        </h2>
        <form className="bg-white shadow-md text-xl rounded px-8 pt-6 pb-8 mb-4">
          <label
            htmlFor="email"
            className="pb-2 block text-gray-700 font-bold mb-2"
          >
            Email
            <input
              className="mt-2 text-lg h-11 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="example@mail.com"
              onChange={handleChange}
              value={email}
            />
          </label>
          <label
            htmlFor="password"
            className="pb-2 block text-gray-700 font-bold mb-2"
          >
            Password
            <input
              className="mt-2 h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              onChange={handleChange}
              onKeyUp={keyUpSubmitTest}
              value={password}
            />
          </label>
          {!validator.isEmail(email) && email !== '' ? (
            <p className="text-red-500 text-sm italic font-bold">
              You must use a valid email.
            </p>
          ) : null}
          {error !== '' ? (
            <p className="text-red-500 text-sm italic font-bold">{error}</p>
          ) : null}
          <Link onClick={() => dispatch(resetError())} to="/">
            <p className="text-blue-400 hover:text-blue-700">
              Need an account?
            </p>
          </Link>
          <button
            className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={logInSubmit}
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import validator from 'validator';
import { signUp, resetError } from '../actions';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.session[1]);
  const error = useSelector(state => state.session[2]);

  const checkPasswordMatch = () => password === passwordConfirmation;

  const handleChange = e => {
    const { value, type, name } = e.target;
    if (type === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'passwordConfirmation') {
      setPasswordConfirmation(value);
    }
  };

  const handleSubmit = () => {
    if (validator.isEmail(email) && checkPasswordMatch()) {
      dispatch(signUp(email, password));
    }
  };

  const keyUpSubmitTest = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-row items-center mx-auto pt-4 sm:pt-10 md:pt-36 lg:pt-12">
      {isLoggedIn && <Redirect to="/books" />}
      <div className="w-11/12 sm:w-full max-w-xs mx-auto">
        <h2 className="text-3xl font-medium sm:text-5xl text-center mb-4">
          Sign Up!
        </h2>
        <form className="bg-white shadow-md text-xl rounded px-8 pt-6 pb-8 mb-4">
          <label
            htmlFor="email"
            className="pb-2 block text-gray-700 font-bold mb-2"
          >
            Email
            <input
              className="mt-2 text-base sm:text-lg h-11 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="mt-2 h-11 text-base sm:text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              onChange={handleChange}
              onKeyUp={keyUpSubmitTest}
              value={password}
            />
          </label>
          <label
            htmlFor="passwordConfirmation"
            className="pb-2 block text-gray-700 font-bold mb-2"
          >
            Password Confirmation
            <input
              className="mt-2 h-11 text-base sm:text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="passwordConfirmation"
              type="password"
              onChange={handleChange}
              onKeyUp={keyUpSubmitTest}
              value={passwordConfirmation}
            />
          </label>
          {!checkPasswordMatch() ? (
            <p className="text-red-500 text-sm italic font-bold">
              Your password does not match.
            </p>
          ) : null}
          {error !== '' ? (
            <p className="text-red-500 text-sm italic font-bold">{error}</p>
          ) : null}
          {!validator.isEmail(email) && email !== '' ? (
            <p className="text-red-500 text-sm italic font-bold">
              You must use a valid email.
            </p>
          ) : null}
          <Link onClick={() => dispatch(resetError())} to="/login">
            <p className="text-blue-400 hover:text-blue-700">
              Already have an account?
            </p>
          </Link>
          <button
            className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

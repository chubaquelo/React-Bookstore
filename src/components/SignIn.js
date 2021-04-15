import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../actions';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(state => state.session[1]);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, type } = e.target;
    if (type === 'email') {
      setEmail(value);
    } else if (type === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="flex flex-row items-center h-88percent">
      {isLoggedIn && <Redirect to="/" />}
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
              value={password}
            />
          </label>
          <button
            className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => dispatch(signIn(email, password))}
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

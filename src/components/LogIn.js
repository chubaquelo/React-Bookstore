import React, { useState } from 'react';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const [value, type] = e.target;
    if (type === 'email') {
      setEmail(value);
    } else if (type === 'password') {
      setPassword(value);
    }
  };

  const postRequestApi = () => {};
  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="button" onClick={postRequestApi}>LogIn</button>
      </form>
    </div>
  );
};

export default LogIn;

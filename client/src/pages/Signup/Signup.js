import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [addUser] = useMutation(ADD_USER);

  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  

  return (
    <div className="container container2">
      <div className='card'>

      <h2>Signup</h2>
      {/* {mutationResponse.error && <div>Sign up failed</div>} */}
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Username123"
            name="username"
            type="username"
            id="username"
            // value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            // value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="password"
            // value={formState.password}
            onChange={handleChange}
          />
        </div>
        <Link to="/signin">← Go to Login</Link>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Signup;

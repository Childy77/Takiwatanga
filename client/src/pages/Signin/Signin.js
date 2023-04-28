import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Signin(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  

  return (
  <div className="container container1">
    <div className="card">

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <Link to="/signup" className="btn-primary mb-3">Don't have an account? Sign up for one!</Link>
        <div>
          {error && 
            <p className="error-text">The provided credentials are incorrect</p>
          }
        </div>
        <div className="flex-row flex-end">
          <button type="submit" aria-label="Submit form" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
);

}

export default Signin;

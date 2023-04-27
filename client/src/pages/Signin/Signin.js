import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin(props) {
  const [{ email, password }, setFormState] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    setError(null);
    alert("Successful login!");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...{ email, password },
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
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleInputChange}
          />
        </div>
        <Link to="/signup" className="btn-primary mb-3">Don't have an account? Sign up for one!</Link>
        <div>
          {error && (
            <p className="error-text">{error}</p>
          )}
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

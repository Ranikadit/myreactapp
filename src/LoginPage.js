import React from 'react';
import './LoginPage.css'; // We'll use external CSS for styling

function LoginPage() {
  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <h1>User Login page</h1>
      </header>

      {/* Login Form */}
      <div className="login-container">
        <form className="login-form">
          <div>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" required />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

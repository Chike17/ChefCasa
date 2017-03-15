import React from 'react';
import Form from './signInForm.jsx';
class Login extends React.Component {
  
  render() {
    return (
      <div >
        <h1>Login Page</h1>
        {Form}
      </div>
    );
  }
}

module.exports = Login;


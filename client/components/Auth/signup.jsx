import React from 'react';
import Form from './signUpForm.jsx';

class Signup extends React.Component {
  
  render() {
    return (
      <div >
        <h1>Signup Page</h1>
        {Form}
      </div>
    );
  }
}

module.exports = Signup;
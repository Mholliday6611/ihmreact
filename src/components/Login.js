import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
      	<h1>Login</h1>
      		<form>
      			<input type="text" name="first_name"/>
      			<input type="text" name="last_name"/>
      			<input type="text" name="email"/>
      			<input type="text" name="password"/>
      		</form>
      	<h1>Register as a Volunteer</h1>
      		<form>
      			<input type="text" name="first_name"/>
      			<input type="text" name="last_name"/>
      			<input type="text" name="email"/>
      			<input type="text" name="password"/>
      		</form>
      	<h1>Register as a Organization</h1>
      		<form>
      			<input type="text" name="first_name"/>
      			<input type="text" name="last_name"/>
      			<input type="text" name="email"/>
      			<input type="text" name="password"/>
      		</form>
      </div>
    );
  }
}

export default Login;
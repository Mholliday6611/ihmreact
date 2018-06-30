import React, { Component } from 'react';

class CreateEvent extends Component {
  render() {
    return (
      <div>
      	<h1>Create Event</h1>
      		<form>
      			<input type="text" name="title"/>
      			<input type="text" name="description"/>
            <input type="text" name="address"/>
      		</form>
      </div>
    );
  }
}

export default CreateEvent;
import React, { Component } from 'react';

let array = [{name:"clark",profession:"Chef",borough:"Brooklyn"},{name:"clark",profession:"Chef",borough:"Brooklyn"},{name:"clark",profession:"Chef",borough:"Brooklyn"}]

class ViewVolunteers extends Component {

	renderVolunteers(data){
		return( 
			<div>
	      		<h1 className="name">{data.name}</h1>
	      		<p className="profession">{data.profession}</p>
	      		<p className="borough">{data.borough}</p>
	      	</div>
	      )
	}
  render() {
    return (
      <div>
      	{array.map(this.renderVolunteers)}
      </div>
    );
  }
}

export default ViewVolunteers;
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Home from "./components/Home"
import Login from "./components/Login"
import ViewVolunteers from "./components/ViewVolunteers"

const App = () => {
  return (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/volunteers" component={ViewVolunteers} />
		</Switch>
	</Router>
  );
};
export default App;

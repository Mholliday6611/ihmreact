import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Home from "./components/Home"

const App = () => {
  return (
    <div>
    	<Router>
    		<Route exact path="/" component={Home} />
    		<Route exact path="/login" component={login} />
    	</Router>
    </div>
  );
};
export default App;

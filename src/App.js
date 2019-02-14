import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Survey from './components/Survey/Survey'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      	<div className="row">
			<BrowserRouter>
	        	<Survey />
			</BrowserRouter>
		</div>
      </div>
    );
  }
}

export default App;

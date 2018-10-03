import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (props) => {
	return(
  	<div style={{margin: '1em', display: 'flex'}}>
			<img src="http://placehold.it/75"/>
      <div className='info' style={{margin: '1em'}}>
      	<div>Name here ..</div>
        <div>Company name</div>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Card />
    );
  }
}

export default App;

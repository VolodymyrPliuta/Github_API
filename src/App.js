import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (props) => {
  return(
    <div style={{margin: '1em', display: 'flex'}}>
      <img style={{height: '10em'}} src={props.avatar_url}/>
      <div className='info' style={{margin: '1em'}}>
        <div style={{fontSize: '2.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  )
}

class Form extends React.Component {
	state = {
  	userName: ''
  }
	handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form", this.state.userName)
  }
	render() {
    return(
    	<form onSubmit={this.handleSubmit}>
      	<input type="text"
        			 value={this.state.userName}
               onChange = {(event) => this.setState({ userName: event.target.value})}
 							 paceholder="GitHub username" required
               />
        <button type="submitt">Add cart</button>
      </form>
    )
  }
}

class App extends Component {
  state = {
    cards: [
      {
        name: "John",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        company: "Facebook"
      },
      {
        name: "Nick",
        avatar_url: "https://avatars0.githubusercontent.com/u/5?v=4",
        company: "Google"
      }
    ]
  }
  render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;

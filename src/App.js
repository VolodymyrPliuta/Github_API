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

let data = [
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

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <CardList cards={data}/>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';

function IronContacts (props) {
  return (
    <li>
      <img src={props.picture} class="image" alt="profile-pic"></img> 
      <strong>{props.name}</strong> 
      <em>{props.popularity}</em>
  </li>

  )
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contacts].slice(0,5)
    }
  }

  addRandomContact = () => {
    const newElement = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contacts: [...this.state.contacts, newElement]
    });
  };

  sortByName = () => {
    this.setState({
      contacts: [...this.state.contacts].sort(function(a,b) {
        if(a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort(function(a,b) {
        if(a.popularity < b.popularity) {
          return 1
        } else if (a.popularity > b.popularity) {
          return -1;
        } else {
          return 0;
        }
      })
    });
  }

/*
  deleteItem = id => {
    const filteredContacts = this.state.contacts.filter((contacts) => contacts.id !== id);
    this.setState({
      contacts: filteredContacts,
    });
  }

<button onClick={() => this.deleteItem(contacts.id)}>Delete</button>
*/

  render () {
    return (
      <div className="App">
        <ul>
          {this.state.contacts.map((contacts, index, originalArray) => {
              return (
              <IronContacts key={contacts.id}
              name={contacts.name}
              picture={contacts.pictureUrl}
              popularity={contacts.popularity}
              /> 
              )
            })}
        </ul>

        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
      </div>
    );
  } 
}

export default App;

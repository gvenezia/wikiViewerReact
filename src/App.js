import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {
  

  onSearchSubmit(searchTerm){
    console.log(searchTerm);
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&prop=revisions&rvprop=content&format=json&formatversion=2&origin=*`)
      .then( results => {
        console.log(results);
      })
      .catch( err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
      </div>  
    );
  }
}

export default App;

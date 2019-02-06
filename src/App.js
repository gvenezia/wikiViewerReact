import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import SearchBar from './SearchBar';

class App extends Component {

  onSearchSubmit(searchTerm){
    console.log(searchTerm);
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&prop=revisions&rvprop=content&format=json&formatversion=2&origin=*`)
      .then( results => {
        console.log(results.data.query.search);
      })
      .catch( err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
        <a id="random-btn"
              className="" 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Special:Random">
          <button className="ui primary button">
          
              Go to a random article 
              {/* <i class="fas fa-random"></i> */}
          
          </button>
        </a>
      </div>  
    );
  }
}

export default App;

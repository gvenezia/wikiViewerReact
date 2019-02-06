import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import SearchBar from './SearchBar';
import WikiList from './WikiList';

class App extends Component {
  state = {wikiEntries: []}

  // declare as nested arrow function in order to bind `this` properly
  onSearchSubmit = searchTerm => {
    console.log(searchTerm);
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&prop=revisions&rvprop=content&format=json&formatversion=2&origin=*`)
      .then( results => {
        this.setState({wikiEntries: results.data.query.search})
      })
      .catch( err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px', width: '500px'}}>
        <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
        <a className="" 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/Special:Random">
          <button className="ui primary button">
              Go to a random article 
              {/* <i class="fas fa-random"></i> */}
          </button>
        </a>
        <WikiList wikiEntries={this.state.wikiEntries}/>
      </div>  
    );
  }
}

export default App;

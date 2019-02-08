import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import SearchBar from './SearchBar';
import WikiList from './WikiList';

class App extends Component {
  state = {wikiEntries: []}

  // declare as nested arrow function in order to bind `this` properly
  getWikiList = searchTerm => {
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
      <div className="ui container" style={{ marginTop: '20px', width: '500px'}}>
        <h1 className="ui header">
            Wikipedia Viewer     
        </h1>    
        <p>
            <em>Just start typing to search for relevant articles, or go to a random article.</em>
            <br/>
            <em>Click on any article card to redirect to that Wikipedia page in another tab.</em>
        </p> 
        <p>
            
        </p>  
        <SearchBar 
          onSearchChange={this.getWikiList}
          onSearchBarSubmit={this.getWikiList} 
        />
        <a target="_blank" 
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

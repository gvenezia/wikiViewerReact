import React, { Component } from 'react';

class WikiList extends Component {

	render(){
		let wikiEntries = this.props.wikiEntries;
		let wikiEntriesJSX = [];

		// function displayWikiEntries() {
      for (let i = 0; i < wikiEntries.length; i++) { 

          // Reveal the div block
          // wikiReturnElement[i].style.height = `auto`;
          // wikiReturnElement[i].style.opacity = `1`;
          
          // Set its inner contents
          // wikiEntriesJSX += `<a href='https://en.wikipedia.org/wiki/${wikiEntries[i].title}'>`;
	         //  wikiEntriesJSX += `<h3>${wikiEntries[i].title} </h3>`;
	         //  wikiEntriesJSX += `<p> ${wikiEntries[i].snippet}</p>`;
          // wikiEntriesJSX += `</a>`;

          wikiEntriesJSX.push(<a href={'https://en.wikipedia.org/wiki/' + wikiEntries[i].title}>);
	          wikiEntriesJSX.push(<h3>{wikiEntries[i].title} </h3>);
	          wikiEntriesJSX.push(<p> {wikiEntries[i].snippet}</p>);
          wikiEntriesJSX.push(</a>);
      }
    // }

		return <div>{wikiEntriesJSX}</div>;
	}

}

export default WikiList;
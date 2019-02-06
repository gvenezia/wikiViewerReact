import React, { Component } from 'react';
import './WikiList.css'

class WikiList extends Component {

	render(){
		let wikiEntries = this.props.wikiEntries;
		let wikiEntriesJSX = [];

    for (let i = 0; i < wikiEntries.length; i++) { 
      let wikiEntryURL = 'https://en.wikipedia.org/wiki/' + wikiEntries[i].title;
      let scrubbedSnippet = wikiEntries[i].snippet.replace(/<[\s\w-/="]+>/g, '');

      wikiEntriesJSX.push(
      	
    		<div key={i} className="ui raised very padded text container segment wiki-return-element">
      		<a target="_blank" 
          	rel="noopener noreferrer" 
      			href={ wikiEntryURL}>
						<h2 className="ui header">{wikiEntries[i].title}</h2>
          	<p>{scrubbedSnippet}</p>
        	
      	</a>
      	</div>	
    	);	
    }

		return (
			<div id="wiki-container" className="ui container">
				{wikiEntriesJSX}
			</div>
		)	
	}

}

export default WikiList;
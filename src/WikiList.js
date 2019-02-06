import React, { Component } from 'react';

class WikiList extends Component {

	render(){
		let wikiEntries = this.props.wikiEntries;
		let wikiEntriesJSX = [];

    for (let i = 0; i < wikiEntries.length; i++) { 
      let wikiEntryURL = 'https://en.wikipedia.org/wiki/' + wikiEntries[i].title;
      let scrubbedSnippet = wikiEntries[i].snippet.replace(/<[\s\w-/="]+>/g, '');

      wikiEntriesJSX.push(
      	<a key={i} href={ wikiEntryURL}>
      		<div className="ui raised very padded text container segment">
						<h2 className="ui header">{wikiEntries[i].title}</h2>
          	<p>{scrubbedSnippet}</p>
        	</div>	
      	</a>
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
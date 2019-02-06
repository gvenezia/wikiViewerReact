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
          let wikiEntryURL = 'https://en.wikipedia.org/wiki/' + wikiEntries[i].title;

          wikiEntriesJSX.push(
          	<a key={i} href={ wikiEntryURL}>
          		<div class="ui raised very padded text container segment">
  							<h2 class="ui header">{wikiEntries[i].title}</h2>
		          	<p>{wikiEntries[i].snippet} </p>
	          	</div>	
          	</a>
        	);	

      }
    // }

		return (
			<div id="wiki-container" className="ui container">
				{wikiEntriesJSX}
			</div>
		)	
	}

}

export default WikiList;
import React, { Component } from 'react';
// import axios from 'axios';

class SearchBar extends Component {
	state = {searchTerm: 'car'};

	render() {
		return(
			<div className="ui segment">	
				<form className="ui form"
							onSubmit={ event =>{
									event.preventDefault()
									this.props.onSearchBarSubmit(this.state.searchTerm)
								} 
							}
				>
					<div className="field">
						<input 
							type="text"
							value={this.state.searchTerm}
							onChange={ event => this.setState({searchTerm: event.target.value}) } />
					</div>	
				</form>	
			</div>
		)
	}

}

export default SearchBar;
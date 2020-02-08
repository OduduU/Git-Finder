import React, { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
	state = {
		text: ""
	};

	static propTypes = {
		searchUsers: propTypes.func.isRequired,
		clearUsers: propTypes.func.isRequired,
        showClear: propTypes.bool.isRequired,
        setAlert: propTypes.func.isRequired
	};

	onSearch = ({ target: { name, value } }) => this.setState({ [name]: value });

    
	searchSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please provide text', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: "" });
        }
	};
    
	render() {
        const { showClear, clearUsers } = this.props;
		return (
			<div>
				<form onSubmit={this.searchSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						value={this.state.text}
						onChange={this.onSearch}
					/>
					<input type="submit" value="Search" className="btn btn-dark btn-block" />
				</form>
				{showClear && (
					<button
						className="btn btn-light btn-block"
						onClick={clearUsers}
					>
						Clear
					</button>
				)}
			</div>
		);
	}
}

export default Search;

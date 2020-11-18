import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers:  PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        // This clears the search bar after submitted
        this.setState({ text: '' });
    }

    onChange = (e) => {
        // Using e.target.name to get that specific onChange event, incase there's more later
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state.text);
    }

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
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
        )
    }
}

export default Search

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
        setAlert: PropTypes.func.isRequired,
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please enter a user name', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            // This clears the search bar after submitted
            this.setState({ text: '' });
        }

    }

    onChange = (e) => {
        // Using e.target.name to get that specific onChange event, incase there's more later
        // this.setState({ text: e.target.value })
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
                {/* If showclear is true, it will display the clear button */}
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

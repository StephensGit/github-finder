import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

// export class Search extends Component {
const Search = ({ showClear, clearUsers, setAlert }) => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter a user name', 'light')
        } else {
            githubContext.searchUsers(text);
            // This clears the search bar after submitted
            setText(' ');
        }

    }

    const onChange = (e) => {
        // Using e.target.name to get that specific onChange event, incase there's more later
        // this.setState({ text: e.target.value })
        setText(e.target.value)
        // console.log(this.state.text);
    }


        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users..."
                        value={text}
                        onChange={onChange}
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

Search.propTypes = {
    clearUsers:  PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search

import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// export class Search extends Component {
const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Please enter a user name', 'light')
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
                {githubContext.users.length > 0 && (
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
                        Clear
                    </button>
                )}
            </div>
        ) 
}

export default Search

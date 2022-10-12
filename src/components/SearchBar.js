import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='seach-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <label className='field'>Video Search</label>
                    <input onChange={this.onInputChange} value={this.state.term} type="text" placeholder="Search..." />
                </form>
            </div>
        )
    }
}

export default SearchBar;
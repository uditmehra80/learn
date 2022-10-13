import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className='seach-bar ui segment'>
            <form onSubmit={onSubmit} className='ui form'>
                <label className='field'>Video Search</label>
                <input
                    onChange={(e) => setTerm(e.target.value)}
                    value={term} type="text"
                    placeholder="Search..."
                />
            </form>
        </div>
    )

}

export default SearchBar;
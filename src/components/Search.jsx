import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" alt="search icon" className="search-icon" />
            <input
                type="text"
                placeholder='Search through thousands of movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Search
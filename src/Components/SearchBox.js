import React from 'react';

// App.js will pass the searchChange() function to SearchBox.
const SearchBox = ({searchfield, searchChange}) => {
    return (
        // pa2 is from 'tachyons', and just import in index.js
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange} 
            /> 
        </div>
    );
}

export default SearchBox;
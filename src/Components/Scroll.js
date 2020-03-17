import React from 'react';

// The Scroll component to wrap other component like cardlist, to be scrollable.
{/* In App.js:
    <Scroll>
        <CardList robots={filteredRobots}/> // this is props.children
    </Scroll>
    //  
 */}
const Scroll = (props) => {
    return (
        // Adding ccs style in JSX using double curly brackets.
        // style={{}} where outer brackets are Javascript Expression,
        // the inner brackets to return an object which can have css styles.
        // css: overflow-y but jsx: overflowY
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;
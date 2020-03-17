import React from 'react';

// JSX stands for JavaScript XML. JSX allows us to write HTML in React.
// You have to import React here since you are using JSX here.
// Use 'className' in HTML instead of 'class' to avoid crashing the 'class' name of JS.
// Use {} to wrap the JS expression in JSX.

// const Card = ( {props} ) => {
//      const {name, email, id} = props;
// equiv. to:
// const Card = ( {name, email, id} ) {}
// Card props: name, email, id - no need to list them in right order.

const Card = ({ name, email, id }) => {
    return (
        // Substitute parameter ${id} in a `` string.
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
            </div>
        </div>
    );
}

// Argument 'default' means only export for one function/class.
export default Card;
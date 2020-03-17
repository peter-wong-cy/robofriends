import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // Loop thru the robot list.
    // React will suggest you to have a key props for the card,
    // because if one of the robot card need to be deleted,
    // React can find out the card quickly with the key value,
    // instead of painting the whole screen again.
    const cardComponent = robots.map((user, i) =>{
        return (
            <Card 
                key={robots[i].id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            />
        );
    })
    // Return the cardComponent one by one, such as
    // <div>
    //      <Card key={0}.../>
    //      <Card key={1}.../>
    //      <Card key={2}.../>
    // </div>
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;
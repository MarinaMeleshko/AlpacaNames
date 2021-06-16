import React from 'react';

function DisplayName(props){
    const message = props.name ? `Your alpaca name: ${props.name}!` : "Choose your alpaca name!";

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
}

export default DisplayName;
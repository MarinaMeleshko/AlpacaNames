import React from 'react';

export default function DisplayName(props){
    const message = props.name ? `Your alpaca name: ${props.name}!` : "Choose your alpaca name!";

    return (
        <div>
            <h2 className="AlpacaNames-caption">{message}</h2>
        </div>
    );
}
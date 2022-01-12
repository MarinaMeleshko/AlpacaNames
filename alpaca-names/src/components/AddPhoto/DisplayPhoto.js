import React from 'react';

export default function DisplayPhoto(props){
    return(
        <div>
            <img src={props.url || "/img/llama.svg"} alt="Alpaca"></img>
        </div>
    )
}
import React, {useState} from 'react';

export default function DisplayPhoto(props){
    const url = useState(props.url);

    return(
        <div>
            <img src={url || "/img/llama.svg"} alt="Selected alpaca photo"></img>
        </div>
    )
}
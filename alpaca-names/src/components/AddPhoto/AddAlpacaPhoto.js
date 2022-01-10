import React, {useState} from 'react'

export default function AddAlpacaPhoto(props){
    const alpacaName = useState(props.alpacaName);
    const photo = useState(null);

    return(
        <h2>Alpaca: {alpacaName}</h2>
    );
}
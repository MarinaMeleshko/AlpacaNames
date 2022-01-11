import React, {useState} from 'react';

import DisplayPhoto from './DisplayPhoto';
import UploadPhoto from './UploadPhoto';

export default function AddAlpacaPhoto(props){
    const alpacaName = useState(props.alpacaName);
    const [photoUrl, setPhotoUrl] = useState(null);

    const submit = function(url){
        setPhotoUrl(url);
        //todo: save name and photo of alpaca to DB
    }

    return(
        <div>
            <h2>Alpaca: {alpacaName}</h2>
            <DisplayPhoto url={photoUrl}></DisplayPhoto>
            <UploadPhoto updatePhotoUrl={setPhotoUrl} savePhotoUrl={submit}></UploadPhoto>
        </div>
    );
}
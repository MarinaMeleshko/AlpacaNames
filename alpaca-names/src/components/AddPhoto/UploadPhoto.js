import React, {useState} from 'react';

export default function UploadPhoto(props){
    const [url, setUrl] = useState(null);

    const updatePhotoUrl = function(e){
        setUrl(URL.createObjectURL(e.target.files[0]));
        props.updatePhotoUrl(url);
    }

    const submit = function(e){
        props.savePhotoUrl(url);
    }

    return(
        <form onSubmit={submit}>
            <input type="file" onChange={updatePhotoUrl}></input>
            <button type="submit">Submit</button>
        </form>
    );
}
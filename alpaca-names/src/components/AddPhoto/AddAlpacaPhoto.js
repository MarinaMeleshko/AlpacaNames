import React, {useState, useContext} from 'react';
import RedirectRoute from '../Common/RedirectRoute';

import DisplayPhoto from './DisplayPhoto';
import LocalizationContext from '../../Localization/LocalizationContext';

export default function AddAlpacaPhoto(props){
    const alpacaName = useState(props.alpacaName);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { t } = useContext(LocalizationContext);

    const submit = function(e){
        //todo: save name and photo of alpaca to DB
        setIsSubmitted(true);
    }

    const updatePhotoUrl = function(e){
        const newUrl = URL.createObjectURL(e.target.files[0]);
        setPhotoUrl(newUrl);
    }

    if (isSubmitted){
        return(
            <div>
                <RedirectRoute isRedirect={true} redirectPath="/photos"></RedirectRoute>
            </div>
        );
    }

    return(
        <div>
            <h2>{t('alpaca')}: {alpacaName}</h2>
            <DisplayPhoto url={photoUrl}></DisplayPhoto>

            <form onSubmit={submit}>
                <input type="file" accept="image/*" onChange={updatePhotoUrl}></input>
                <button type="submit">{t('submit')}</button>
            </form>
        </div>
    );
}
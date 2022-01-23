import React, {useContext} from 'react';
import LocalizationContext from '../../Localization/LocalizationContext';

export default function DisplayPhoto(props){
    const { t } = useContext(LocalizationContext);

    return(
        <div>
            <img src={props.url || "/img/llama.svg"} alt={t('alpaca')}></img>
        </div>
    )
}
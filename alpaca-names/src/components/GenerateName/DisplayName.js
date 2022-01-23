import React, {useContext} from 'react';

import LocalizationContext from '../../Localization/LocalizationContext';

export default function DisplayName(props){
    const { t } = useContext(LocalizationContext);
    const message = props.name ? t('yourAlpacaName', {name: props.name}) : t('chooseAlpacaName');

    return (
        <div>
            <h2 className="AlpacaNames-caption">{message}</h2>
        </div>
    );
}
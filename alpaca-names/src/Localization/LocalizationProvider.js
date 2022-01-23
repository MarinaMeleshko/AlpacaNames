import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

import LocalizationContext from "./LocalizationContext";

export default function LocalizationProvider (props) {
    const { t, i18n } = useTranslation();

    return (
        <LocalizationContext.Provider value={{t:t, i18n:i18n}}>
            { props.children }
        </LocalizationContext.Provider>
    );
}
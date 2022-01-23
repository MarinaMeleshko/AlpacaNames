import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';

import LocalizationContext from '../../Localization/LocalizationContext';

export default function Footer(props){
    const { t } = useContext(LocalizationContext);

    return(
        <Row className="justify-content-end">
            <footer><small>{t('copyright')}</small></footer>
        </Row>
    );
}
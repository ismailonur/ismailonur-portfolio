import React from 'react'

import { useLanguage } from '../languageComp/index.js';

const T = (props) => {
    const { translate } = useLanguage();
    return (
        translate(props.children)
    )
}

export default T
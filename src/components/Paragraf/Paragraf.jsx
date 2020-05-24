import React from 'react';

import s from './Paragraf.module.scss';

const Paragraf = ({ children }) => {
    return (
        <p className={s.paragraf}>
            {children}
        </p>
    );
};

export default Paragraf;
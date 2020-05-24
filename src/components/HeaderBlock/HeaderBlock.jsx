import React from 'react';
import Arrows from './img/arrows-down.svg';

import s from './HeaderBlock.module.scss';

const HeaderBlock = ({ hideBackground, children }) => {
    const styleBackground = hideBackground ? {backgroundImage: 'none'} : {};

    return (
        <div className={s.cover} style={styleBackground}>
            <div className={s.wrap}>
                {children}
            </div>
            <div className={s.arrows}>
                <img src={Arrows} alt="arrows" />
            </div>
        </div>
    );
}

export default HeaderBlock;
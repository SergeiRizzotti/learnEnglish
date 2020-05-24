import React from 'react';

import s from './TrainingBlock.module.scss';

const TrainingBlock = ({children}) => {    

    return (
        <>
            <div className={s.cover}>
                <div className={s.wrap}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default TrainingBlock;
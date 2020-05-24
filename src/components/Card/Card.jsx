import React, { Component } from 'react';

import s from './Card.module.scss';

class Card extends React.Component{

    render() {
        const { eng, rus } = this.props;

        return (
          <div className={s.card}>
            <div className={s.cardInner}>
              <div className={s.cardFront}>
                {eng}
                <img src={this.props.img} alt=""/>
              </div>
              <div className={s.cardBack}>{rus}</div>
            </div>
          </div>
        );
    }
}

export default Card;
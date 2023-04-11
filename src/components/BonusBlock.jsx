import React from 'react';
import './bonus-block.scss';
import info from '../assets/icons/info.svg';
import fire from '../assets/icons/fire.svg';
import arr from '../assets/icons/arr.svg';
import { transformDate } from '../assets/helpers/helpers';

const BonusBlock = ({bonus, date, burnBonus}) => {
    return (
        <div className='bonus'>
                <header className="bonus__header">
                    <a className="bonus__logo" href='/'>
                        логотип
                    </a>
                    <button className='bonus__info'>
                        <img src={info} alt="иконка информации" />
                    </button>
                </header>
                <div className="container">
                    <div className="bonus__box bonus-box">
                  
                        <div className="bonus-box__info">
                            <p className="bonus-box__count">
                               {bonus} бонусов
                            </p>

                            <p className="bonus-box__date">
                               {date} сгорит
                                <img className='bonus-box__fire' src={fire} alt="иконка пламени" />
                                {burnBonus} бонусов
                            </p>
                        </div>
                        <button className="next">
                            <img src={arr} alt="стрелка вправо" />
                        </button>
                    </div> 
                </div>
                <footer className="bonus__footer"/>
        </div>
    );
};

export default BonusBlock;
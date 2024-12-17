import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from './cardsSlice';

export default function Card({cardMedia, profilePic, cardTitle}) {

    return (
        <div className='card'>
            <div className='card-header'>
                <div className='avatar'>
                    <img src={profilePic} alt='placeholder' />
                </div>
                <h2>header</h2>
            </div>
            <div className='card-container'>
                <div className='card-meadia'>
                    <img src={cardMedia} alt='placeholder' title={cardMedia}/>
                </div>
                <div className='content-buttons'>
                    <button className='like-buttons'>left button</button>
                    <button className='like-buttons'>right button</button>
                </div>
                <div className='card-text'>
                    <p>{cardTitle}</p>
                </div>
            </div>
          

        </div>
    );
}
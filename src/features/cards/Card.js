import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, selectTitle } from './cardsSlice';

export default function Card({cardMedia, profilePic}) {

    const dispatch = useDispatch();
    const cardTitle = useSelector(selectTitle());
    cardTitle = cardTitle ? cardTitle : 'Card Title';

    const handleLike = () => {
        dispatch(getCards());
    };

    return (
        <div className='card'>
            <div className='card-header'>
                <div className='avatar'>
                    <img src={profilePic} alt='placeholder' />
                </div>
                <h2>{cardTitle}</h2>
            </div>
            <div className='card-container'>
                <div className='card-meadia'>
                    <img src={cardMedia} alt='placeholder' />
                </div>
                <div className='content-buttons'>
                    <button className='like-buttons' onClick={handleLike}>left button</button>
                    <button className='like-buttons'>right button</button>
                </div>
                <div className='card-text'>
                    <p>Some information about the picture in the content div.  This is just a bunch of words to 
                        take up space and make the card look like it has some content.  This is just a bunch of words to
                        take up space and make the card look like it has some content.  This is just a bunch of words to
                    </p>
                </div>
            </div>
          

        </div>
    );
}
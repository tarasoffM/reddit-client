import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, selectTitle, selectImage, selectThumbnail } from './cardsSlice';

export default function Card({cardMedia, profilePic, cardTitle}) {

    const dispatch = useDispatch();
    const selectCardTitle = useSelector(selectTitle);
    const selectCardImage = useSelector(selectImage);
    const selectCardThumbnail = useSelector(selectThumbnail);
    const cardThumbnail = selectCardThumbnail ? selectCardThumbnail : profilePic;
    
    const cardImage = selectCardImage ? selectCardImage : cardMedia;
    

    const handleLike = (e) => {
        e.preventDefault();
        dispatch(getCards());
    };

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
                    <img src={cardMedia} alt='placeholder' />
                </div>
                <div className='content-buttons'>
                    <button className='like-buttons' onClick={handleLike}>left button</button>
                    <button className='like-buttons'>right button</button>
                </div>
                <div className='card-text'>
                    <p>{cardTitle}</p>
                </div>
            </div>
          

        </div>
    );
}
import { React, useEffect } from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, selectCards } from './cardsSlice'; 
import { isAuthenticated } from '../user/userSlice';

export default function Cards () {
    
    const dispatch = useDispatch();
    const cardArray = useSelector(selectCards);
    const authenticated = useSelector(isAuthenticated);

    useEffect(() => {
        dispatch(getCards());
    }, [dispatch]);

   
    return (
        <>
            {cardArray.map((card, index) => {
                const imageUrl = card.url ? card.url : card.thumbnail;
                return (
                <Card 
                key={index} 
                cardMedia={imageUrl} 
                profilePic={card.thumbnail} 
                cardTitle={card.title} 
                /> );
    })}
        </>    
    );
    
}
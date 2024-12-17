import { React, use } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { selectCards } from './cardsSlice'; 

export const Cards = () => {
    
    const getCards = useSelector(selectCards);

    getCards.map((card, index) => {
        return (
            <Card cardMedia={card.data.url} profilePic={card.data.thumbnail} index={index}/>
        );
    });
}
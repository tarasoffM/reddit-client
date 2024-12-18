import { React, useEffect } from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, selectCards } from './cardsSlice'; 

export default function Cards () {
    
    const dispatch = useDispatch();
    const cardArray = useSelector(selectCards);

    useEffect(() => {
        dispatch(getCards());
    }, [dispatch]);

    const getUrl = (url) => {
        const encoded = url.replace('amp;s', 's');
        const doubleEncoded = encoded.replace('amp;', '');
        const tripleEncoded = doubleEncoded.replace('amp;', '');
        return tripleEncoded;
    }

   
    return (
        <>
            {cardArray.map((card, index) => {
                const imageUrl = card.preview?.images?.[0]?.source?.url || '';
                


                return (
                    <Card 
                    key={index} 
                    cardMedia={getUrl(imageUrl) ? getUrl(imageUrl) : null} 
                    profilePic={card.thumbnail} 
                    cardTitle={card.title}
                    cardComments={card.comments}
                    cardUps={card.ups}
                    cardAuthor={card.author} 
                    /> );
    })}
        </>    
    );
    
}
import { React, useEffect } from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { selectCards, getCards } from './cardsSlice'; 
import { isAuthenticated } from '../user/userSlice';

export default function Cards () {
    
    const dispatch = useDispatch();
    const cardArray = useSelector(selectCards);
    const authenticated = useSelector(isAuthenticated);

    useEffect(() => {
        dispatch(getCards());
    }, [authenticated, dispatch]);

    
    return (
        <>
            {cardArray.map((item, index) => (
                <Card key={index} cardMedia={item.data.url} profilePic={item.data.thumbnail} cardTitle={item.data.title} />
            ))}
        </>    
    );
    
}
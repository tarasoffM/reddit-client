import { useSelector } from 'react-redux'; 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCards = createAsyncThunk(
    'cards/getCards',
    async () => {
        const response = await fetch('https://oauth.reddit.com/best?after=t3_4s7w3v?limit=1', 
            {
                headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` },   
            }
        );
        if (!response.ok) {
            throw new Error('Failed to fetch cards');
        }
        return response.json();
    }
);

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {},
        isLoading: false,
        loadError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCards.pending, (state) => {
                state.isLoading = true;
                state.loadError = false;
            })
            .addCase(getCards.rejected, (state) => {
                state.isLoading = false;
                state.loadError = true;
            })
            .addCase(getCards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.loadError = false;
                state.cards = action.payload;
            });
    }
});

export default cardsSlice.reducer;
export const selectTitle = (state) => state.cards.cards.data.children[0].data.title;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCards = createAsyncThunk(
    'cards/getCards',
    async () => {
        const response = await fetch('https://oauth.reddit.com/best?before=t5_1?limit=10', 
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
        cards: [],
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
                const cards = action.payload.data.children.map((card) => {
                    const entry = { 
                        title: card.data.title ? card.data.title : '', 
                        url: card.data.url ? card.data.url : '', 
                        thumbnail: card.data.thumbnail ? card.data.thumbnail : '', 
                        preview: card.data.preview ? card.data.preview : '',
                        comments: card.data.num_comments ? card.data.num_comments : 0,
                        ups: card.data.ups ? card.data.ups : 0,
                        author: card.data.author ? card.data.author : '',
                    };
                    //state.cards.push(entry);
                    return entry;
                });
                state.cards = cards;
            });
    }
});

export default cardsSlice.reducer;

export const selectCards = (state) => state.cards.cards;

export const isLoading = (state) => state.cards.isLoading;
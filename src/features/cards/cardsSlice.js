import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCards = createAsyncThunk(
    'cards/getCards',
    async () => {
        const response = await fetch('https://oauth.reddit.com/hot?after=t2_1?limit=10', 
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
        cards: {
            data: {
                children: [
                    {
                        data: {
                            title: 'Card Title',
                            url: 'https://via.placeholder.com/300',
                            thumbnail: 'https://via.placeholder.com/150',
                        }
                    }
                ]
            }
        },
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
export const selectImage = (state) => state.cards.cards.data.children[0].data.url;
export const selectThumbnail = (state) => state.cards.cards.data.children[0].data.thumbnail;
export const selectCards = (state) => state.cards.cards.data.children;
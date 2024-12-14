import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const USERNAME = 'PrudentDiscussion894';
const clientID = 'Tt3lGeSNEQInQgOBGMiQxQ';
const clientSecret = 'eJL9vNd0AoOqORX9oJ4yVjr4ibaWkA';

const credentials = btoa(`${clientID}:${clientSecret}`).toString('base64');
const form = new URLSearchParams({
    grant_type: 'authorization_code',
});

export const login = createAsyncThunk(
    'user/login',
    async () => {
        const response = await fetch('https://www.reddit.com/api/v1/access_token', {
            headers: {
                Authorization: `Basic ${credentials}`,
            },            
        })
    }
);
        


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: {},
        authenticated: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.authenticated = false;
            })
            .addCase(login.rejected, (state) => {
                state.authenticated = false;
            })
            .addCase(login.fulfilled, (state) => {
                state.authenticated = true;
            });
    },

});

export const isAuthenticated = (state) => state.user.authenticated;

export default userSlice.reducer;
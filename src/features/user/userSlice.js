import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;


export const getAccessToken = createAsyncThunk(
    'user/getAccessToken',
    async (code) => {
        const credentials = btoa(`${clientID}:${clientSecret}`);
        const response = await fetch('https://www.reddit.com/api/v1/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${credentials}`,
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'http://localhost:3000/',
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch access token');
        }

        return response.json();
    }
);


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: {},
        authenticated: false,
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.authenticated = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAccessToken.pending, (state) => {
                state.authenticated = false;
            })
            .addCase(getAccessToken.rejected, (state) => {
                state.authenticated = false;
            })
            .addCase(getAccessToken.fulfilled, (state, action) => {
                state.authenticated = true;
                localStorage.setItem('token', action.payload.access_token);
            });
    },

});



export const isAuthenticated = (state) => state.user.authenticated;

export const { setAuthenticated } = userSlice.actions;

export default userSlice.reducer;
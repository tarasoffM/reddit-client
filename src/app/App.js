import React, { use, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated, setAuthenticated } from '../features/user/userSlice';
import { isLoading } from '../features/cards/cardsSlice';
import './App.css';
import Cards from '../features/cards/Cards';
import Login from '../features/user/Login';




const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECTURI = process.env.REACT_APP_REDIRECT_URI;
// will need to change this to a more secure method
const URLSTATE = 'SomeRandomString';
const DURATION = 'temporary';
const SCOPE_STRING = 'read';
const RESPONSE_TYPE = 'code';
const AUTHENDPOINT = 'https://www.reddit.com/api/v1/authorize';

const userAuthorizationRedirect = 
`${AUTHENDPOINT}
?client_id=${clientID}
&response_type=${RESPONSE_TYPE}
&state=${URLSTATE}
&redirect_uri=${REDIRECTURI}
&duration=${DURATION}
&scope=${SCOPE_STRING}`;




function App() {
  
  const authenticated = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);


  useEffect(() => {
    const queryString = window.location.search;
    const credentials = btoa(`${clientID}:${clientSecret}`);
    let code = new URLSearchParams(queryString).get('code');

    if (!localStorage.getItem('token')) {
      if (code) {
        localStorage.setItem('code', code);
        // remove the code from the URL
        window.history.pushState('', '', REDIRECTURI);
      } else {
        code = localStorage.getItem('code');
      }

      if (code) {
        // Exchange the code for an access token
        fetch('https://www.reddit.com/api/v1/access_token', {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${credentials}`
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECTURI
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          localStorage.setItem('token', data.access_token);
          dispatch(setAuthenticated(true));
        })
        .catch(error => {
          console.error('Error fetching access token:', error);
        });
      } else {
        window.location.href = userAuthorizationRedirect;
      }
    }
      
  }, [dispatch]);

  /*
  if (loading) {

    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    )

  } else {
*/
    return (
      <div className="App">
        <Cards />
      </div>
    );
  }


export default App;


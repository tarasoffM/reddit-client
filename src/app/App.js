import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../features/user/userSlice';
import './App.css';
import Card from '../features/cards/Card';
import Login from '../features/user/Login';

import cardMedia from '../data/assets/card-image.jpg';
import profilePic from '../data/assets/morty.jpg';


const CLIENTID = 'Tt3lGeSNEQInQgOBGMiQxQ';
const URLSTATE = 'SomeRandomString';
const REDIRECTURI = 'http://localhost:3000/';
const DURATION = 'temporary';
const SCOPE_STRING = 'read';
const RESPONSE_TYPE = 'code';
const AUTHENDPOINT = 'https://www.reddit.com/api/v1/authorize';
const userAuthorizationRedirect = 
  `${AUTHENDPOINT}
  ?client_id=${CLIENTID}
  &response_type=${RESPONSE_TYPE}
  &state=${URLSTATE}
  &redirect_uri=${REDIRECTURI}
  &duration=${DURATION}
  &scope=${SCOPE_STRING}`;




function App() {
  
  const [authToken, setAuthToken] = useState(null);
  const [authCode, setAuthCode] = useState(null);
  const authenticated = useSelector(isAuthenticated);

  useEffect(() => {

    if (!authCode) {
      window.location.href = userAuthorizationRedirect;
      //setAuthCode(new URLSearchParams(window.location.search).get('code'));
    }

  }, [authenticated]);
  
  if (!authenticated) {

    return (
      <Login />
    )

  } else {

    return (
      <div className="App">
        <Card cardMedia={cardMedia} profilePic={profilePic} />
      </div>
    );
  }
}

export default App;

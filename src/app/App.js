import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../features/user/userSlice';
import './App.css';
import Card from '../features/cards/Card';
import Login from '../features/user/Login';

import cardMedia from '../data/assets/card-image.jpg';
import profilePic from '../data/assets/morty.jpg';

// const cardSource = '../data/assets/card-image.jpg';

function App() {
  
  const authenticated = useSelector(isAuthenticated);
  
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

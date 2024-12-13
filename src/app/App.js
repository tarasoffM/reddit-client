import React from 'react';
import './App.css';
import Card from '../features/cards/Card';

import cardMedia from '../data/assets/card-image.jpg';
import profilePic from '../data/assets/morty.jpg';

// const cardSource = '../data/assets/card-image.jpg';

function App() {
  return (
    <div className="App">
      <Card cardMedia={cardMedia} profilePic={profilePic} />
    </div>
  );
}

export default App;

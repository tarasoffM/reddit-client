import React from 'react';
import './App.css';
import Card from '../features/cards/Card';

import cardSource from '../data/assets/card-image.jpg';

// const cardSource = '../data/assets/card-image.jpg';

function App() {
  return (
    <div className="App">
      <Card image={cardSource}/>
    </div>
  );
}

export default App;

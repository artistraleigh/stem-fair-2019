import React from 'react';
import './App.css';

function App() {
  const colors = ['red', 'orange', 'gold', 'limegreen', 'lightseagreen', 'blueviolet', 'pink'];
  console.log(colors);
  const pictures = ['butterfly', 'dinosaur', 'mercat', 'rocket', 'soccer', 'unicorn'];
  console.log(pictures);
  return (
    <div>
      <h1>Fireside Quilt Maker</h1>
      <h2>Make Your Block</h2>
      <label htmlFor="firstName">
        First Name
        <input name="firstName" />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input name="lastName" />
      </label>
    </div>
  );
}

export default App;

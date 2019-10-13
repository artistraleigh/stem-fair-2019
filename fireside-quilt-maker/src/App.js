import React from 'react';
import './App.css';
import './QuiltBlockOption';
import QuiltBlockOption from './QuiltBlockOption';

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
      <label htmlFor="color">Color</label>
      { colors.map(color => (
        <QuiltBlockOption option={color} key={color} />
      ))}
      <label htmlFor="picture">Picture</label>
      { pictures.map(picture => (
        <QuiltBlockOption option={picture} key={picture} />
      ))}
    </div>
  );
}

export default App;

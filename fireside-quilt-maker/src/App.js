import React, { useState } from 'react';
import './App.css';
import './QuiltBlockOption';
import QuiltBlockOption from './QuiltBlockOption';
import QuiltBlock from './QuiltBlock';

function App() {
  const colors = ['red', 'orange', 'gold', 'limegreen', 'lightseagreen', 'blueviolet', 'pink'];
  const pictures = ['butterfly', 'dinosaur', 'lamb', 'mercat', 'rocket', 'soccer', 'unicorn'];
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [color, setColor] = useState('white');
  const [picture, setPicture] = useState();
  const onButtonClick = () => {
    const quiltBlocks = JSON.parse(localStorage.getItem('quiltBlocks')) || [];
    quiltBlocks.push({
      firstName,
      lastName,
      color,
      picture,
    });
    localStorage.setItem('quiltBlocks', JSON.stringify(quiltBlocks));
  }
  return (
    <div className="quilt-block-form">
      <h1>Fireside Quilt Maker</h1>
      <h2>Make Your Block</h2>
      <label htmlFor="firstName">
        First Name
        <input
        name="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label htmlFor="color">Color</label>
      <div className="quilt-block-option-row">
        { colors.map(col => (
          <QuiltBlockOption
            key={col}
            onClick={()=> setColor(col)}
            style={{ background: col }}
          />
        ))}
      </div>
      <label htmlFor="picture">Picture</label>
      <div className="quilt-block-option-row">
        { pictures.map(pic => (
          <QuiltBlockOption
            key={pic}
            onClick={()=> setPicture(pic)}
          >
            <img src={`${process.env.PUBLIC_URL}/img/${pic}.png`} alt={picture} />
          </QuiltBlockOption>
        ))}
      </div>
      <QuiltBlock
        firstName={firstName}
        lastName={lastName}
        color={color}
        picture={picture}
      />
    <button onClick={onButtonClick}>
      Add Your Block to the Quilt
    </button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import "./App.css";

const drumPadData = [
  { id: 'Heater-1', keyTrigger: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 'Heater-2', keyTrigger: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 'Heater-3', keyTrigger: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { id: 'Heater-4', keyTrigger: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { id: 'Clap', keyTrigger: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { id: 'Open-HH', keyTrigger: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'Kick-n-Hat', keyTrigger: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { id: 'Kick', keyTrigger: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { id: 'Closed-HH', keyTrigger: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
];

const DrumPad = ({ id, keyTrigger, src, onClick }) => {
  const handleClick = () => {
    onClick(id);
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="drum-pad" id={id} onClick={handleClick}>
      <div className="drum-pad-box">
        {keyTrigger}
      </div>
      <audio className="clip" id={keyTrigger} src={src} />
    </div>
  );
};


const App = () => {
  const [display, setDisplay] = useState('');

  const playSound = (soundName) => {
    setDisplay(soundName);
  };

  const renderDrumPads = () =>
    drumPadData.map((pad) => (
      <DrumPad key={pad.id} id={pad.id} keyTrigger={pad.keyTrigger} src={pad.src} onClick={playSound} />
    ));

  return (
    <div id="drum-machine">
      <div className='container'>
      <div id="display">{display}</div>
      {renderDrumPads()}
      </div>
    </div>
  );
};

export default App;

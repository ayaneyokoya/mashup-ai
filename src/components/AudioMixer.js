import React, { useState } from 'react';
import './AudioMixer.css';

function AudioMixer() {
    const [audioFile1, setAudioFile1] = useState(null);
    const [audioFile2, setAudioFile2] = useState(null);
    const [mixing, setMixing] = useState(false);
  
    const handleFileChange = (event, setFile) => {
      const file = event.target.files[0];
      if (file && file.type === 'audio/mpeg') {
        setFile(file);
      } else {
        alert('Please upload MP3 files only.');
      }
    };
  
    const handleMix = () => {
      if (audioFile1 && audioFile2) {
        setMixing(true);
        setTimeout(() => {
          setMixing(false);
          alert('Audio files mixed successfully!');
        }, 20000);
      } else {
        alert('Please upload both MP3 files first.');
      }
    };
  
    const Spinner = () => (
      <div className="spinner">
        <div className="inner-circle"></div>
      </div>
    );
  
    return (
      <div className="container">
        <h1 className="header">Audio Mixer</h1>
        <div className="upload-container">
          <div className="file-upload">
            <label className="label">Upload MP3 File 1:</label>
            <input
              className="file-input"
              type="file"
              accept="audio/mp3"
              onChange={(e) => handleFileChange(e, setAudioFile1)}
            />
          </div>
          <div className="file-upload">
            <label className="label">Upload MP3 File 2:</label>
            <input
              className="file-input"
              type="file"
              accept="audio/mp3"
              onChange={(e) => handleFileChange(e, setAudioFile2)}
            />
          </div>
        </div>
        <div className="button-container">
          <button
            className={`button ${mixing ? 'button-disabled' : ''}`}
            onClick={handleMix}
            disabled={mixing}
          >
            {mixing ? 'Mixing...' : 'Generate Mix'}
          </button>
        </div>
        <div className="status">
          {mixing ? (
            <Spinner />
          ) : audioFile1 && audioFile2 ? (
            <p>Mixed: {audioFile1.name} & {audioFile2.name}</p>
          ) : (
            <p>Please upload both MP3 files.</p>
          )}
        </div>
      </div>
    );
  }
  export default AudioMixer;
  
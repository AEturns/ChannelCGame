import React, { useState, useRef } from 'react';
import './App.css'; // Import the CSS file
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Import speaker icons
import audioFile from './q1.mp3';

const QuizBox = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  // Toggle sound on/off
  const toggleSound = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted; // Mute/unmute the audio
    }
  };

  return (
    <div className="quiz-container">
      <div className="question-box">
        <div className="question-header">
          <h2 className="question">මුල්ම සිංහල නවකතාව වන්නේ ?</h2>
          {/* Speaker icon to mute/unmute */}
          <button className="speaker-btn" onClick={toggleSound}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
        <div className="answer-boxes">
          <button className="answer">A. මීන</button>
          <button className="answer">B. ජයතිස්ස හා රොසළින්</button>
          <button className="answer">C. රෝහිනි</button>
        </div>
      </div>
      {/* Audio element to play the MP3 file */}
      <audio ref={audioRef} src={audioFile} autoPlay loop />
    </div>
  );
};

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validate phone number and PIN
    if (phoneNumber === '0767315912' && pin === '1234') {
      onLogin(); // Proceed to quiz if correct
    } else {
      setError('Invalid phone number or PIN');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login success
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <QuizBox /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;

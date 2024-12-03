import React from 'react';
import './App.css';
import Background from './components/Background';
import AudioMixer from './components/AudioMashup';
// Disable Right-Click Context Menu
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Detect and Block Debugging
(function detectDebugging() {
  const blockDebugging = () => {
    console.clear();
    console.error("Debugging is disabled!");
  };

  const checkDebugger = setInterval(() => {
    if (window.console && (console.log || console.debug)) {
      console.log = console.debug = blockDebugging;
    }
  }, 1000);

  window.addEventListener("beforeunload", () => clearInterval(checkDebugger));
})();
function App() {
  return (
    <div className="App">
      <Background/>
      <AudioMixer/>
    </div>
  );
}

export default App;

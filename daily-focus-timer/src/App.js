import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

const INITIAL_TIME = 25 * 60; // 25 minutes in seconds

function App() {
  const [timeRemaining, setTimeRemaining] = useState(INITIAL_TIME);
  const [status, setStatus] = useState('Stopped'); // 'Running' | 'Stopped' | 'Finished'
  const intervalRef = useRef(null);

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Clear interval helper
  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Handle timer countdown
  useEffect(() => {
    if (status === 'Running' && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearTimer();
            setStatus('Finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearTimer();
  }, [status, clearTimer]);

  // Start button handler
  const handleStart = () => {
    if (status === 'Stopped') {
      setStatus('Running');
    } else if (status === 'Finished') {
      // Reset and start again
      setTimeRemaining(INITIAL_TIME);
      setStatus('Running');
    }
  };

  // Stop button handler - resets the timer
  const handleStop = () => {
    clearTimer();
    setTimeRemaining(INITIAL_TIME);
    setStatus('Stopped');
  };

  // Get status color
  const getStatusColor = () => {
    switch (status) {
      case 'Running':
        return '#4caf50';
      case 'Finished':
        return '#ff9800';
      case 'Stopped':
      default:
        return '#9e9e9e';
    }
  };

  return (
    <div className="app">
      <div className="timer-container">
        <h1 className="title">Daily Focus Timer</h1>
        
        <div className="timer-display">
          {formatTime(timeRemaining)}
        </div>
        
        <div className="status-indicator" style={{ color: getStatusColor() }}>
          <span className="status-dot" style={{ backgroundColor: getStatusColor() }}></span>
          {status}
        </div>
        
        <div className="button-container">
          <button 
            className="btn btn-start" 
            onClick={handleStart}
            disabled={status === 'Running'}
          >
            Start
          </button>
          <button 
            className="btn btn-stop" 
            onClick={handleStop}
            disabled={status === 'Stopped'}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

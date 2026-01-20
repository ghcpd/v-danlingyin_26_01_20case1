# Daily Focus Timer

A simple 25-minute focus timer application built with React.

## Features

- **25-minute focus timer** - Standard Pomodoro-style focus session
- **Start and Stop buttons** - Control your focus session
- **Timer countdown display** - Shows remaining time in mm:ss format
- **Status indicator** - Shows current state: Running / Stopped / Finished

## Behavior

- Timer decreases every second when running
- Clicking Stop resets the timer to 25:00
- When timer reaches zero, status becomes "Finished"
- After finishing, clicking Start will reset and start a new session

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:
   ```bash
   cd daily-focus-timer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:

```bash
npm start
```

The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
daily-focus-timer/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Technologies Used

- React 18
- CSS3 with Flexbox
- React Hooks (useState, useEffect, useRef, useCallback)

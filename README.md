# Daily Focus Timer

A single-page 25-minute focus timer with start/stop controls and live countdown.

## Requirements
- Node.js optional (only if you want to run a simple static server). No build step required.

## Run locally
1. **Open in browser (simplest)**
   - Double-click `index.html` or open it via your browser's File → Open.
2. **Or serve statically (recommended for consistent behavior)**
   - From this folder run: `npx serve .`
   - Open the printed local URL (e.g., http://localhost:3000).

## Features
- 25:00 countdown displayed as mm:ss
- Status indicator showing Running / Stopped / Finished
- Start begins countdown; Stop resets to 25:00 and sets status to Stopped
- When countdown hits 00:00 the timer stops and status switches to Finished
- In-memory only: no sound effects, no persistence

## Project structure
- `index.html` — markup and layout
- `style.css` — styling
- `main.js` — timer logic
- `input_ui_spec.txt` — feature specification

## Notes
- Single page, no external dependencies besides Google Fonts for typography.

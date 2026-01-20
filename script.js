class FocusTimer {
    constructor() {
        this.totalSeconds = 25 * 60; // 25 minutes in seconds
        this.currentSeconds = this.totalSeconds;
        this.isRunning = false;
        this.intervalId = null;
        
        this.timerDisplay = document.getElementById('timer');
        this.statusDisplay = document.getElementById('status');
        this.startBtn = document.getElementById('startBtn');
        this.stopBtn = document.getElementById('stopBtn');
        
        this.initializeEventListeners();
        this.updateDisplay();
        this.updateStatus('stopped');
    }
    
    initializeEventListeners() {
        this.startBtn.addEventListener('click', () => this.start());
        this.stopBtn.addEventListener('click', () => this.stop());
    }
    
    start() {
        if (!this.isRunning && this.currentSeconds > 0) {
            this.isRunning = true;
            this.updateStatus('running');
            this.startBtn.disabled = true;
            
            this.intervalId = setInterval(() => {
                this.currentSeconds--;
                this.updateDisplay();
                
                if (this.currentSeconds <= 0) {
                    this.finish();
                }
            }, 1000);
        }
    }
    
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        
        this.isRunning = false;
        this.currentSeconds = this.totalSeconds; // Reset to 25 minutes
        this.startBtn.disabled = false;
        
        this.updateDisplay();
        this.updateStatus('stopped');
    }
    
    finish() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.updateStatus('finished');
    }
    
    updateDisplay() {
        const minutes = Math.floor(this.currentSeconds / 60);
        const seconds = this.currentSeconds % 60;
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        this.timerDisplay.textContent = formattedTime;
    }
    
    updateStatus(status) {
        // Remove all status classes
        this.statusDisplay.classList.remove('stopped', 'running', 'finished');
        
        // Add the current status class and update text
        this.statusDisplay.classList.add(status);
        
        switch(status) {
            case 'running':
                this.statusDisplay.textContent = 'Running';
                break;
            case 'finished':
                this.statusDisplay.textContent = 'Finished';
                break;
            default:
                this.statusDisplay.textContent = 'Stopped';
                break;
        }
    }
}

// Initialize the timer when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FocusTimer();
});
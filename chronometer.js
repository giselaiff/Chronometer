class Chrono {
    constructor() {
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.intervalId = 0;

    }
    start() {      
        console.log('Start Chrono');    
            this.intervalId = setInterval(() => {
              this.seconds ++; 
              if (this.seconds === 60) {
                this.seconds = 0;
                this.minutes += 1;
              }
              if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
              }
            }, 1000);
          }
    stop() {      
      console.log('Stop Chrono');
      clearInterval(this.intervalId);
    }
    reset() {
      clearInterval(this.intervalId);
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      console.log(`Reset Chrono: ${this.hours} hours ${this.minutes} minutes ${this.seconds} seconds`);

    }
    showTime() {
      console.log(`${this.hours} hours ${this.minutes} minutes ${this.seconds} seconds`);
    }
  }
  
  const myTimer = new Chrono();
  
  myTimer.start();
  //myTimer.stop();
  //myTimer.reset();
  //myTimer.showTime();
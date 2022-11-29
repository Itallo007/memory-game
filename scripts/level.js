export default class Level {
  next = null;
  
  constructor(
      levelIndex = 1,
      numberOfPars = 0,
      numberOfAttempts = 0,
      limitTime = 0,
      next = null
    ) {
      this.levelIndex = levelIndex;
      this.numberOfPars = numberOfPars;
      this.numberOfAttempts = numberOfAttempts;
      this.limitTime = limitTime;
  }
}
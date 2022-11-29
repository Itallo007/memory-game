export default class Level {
  constructor(
      levelIndex = 1,
      numberOfPars = 0,
      numberOfAttempts = 0,
      limitTime = 0
    ) {
      this.levelIndex = levelIndex;
      this.numberOfPars = numberOfPars;
      this.numberOfAttempts = numberOfAttempts;
      this.limitTime = limitTime;
  }
}
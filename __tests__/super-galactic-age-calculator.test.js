import { SuperGalc } from './../src/super-galactic-age-calculator.js';

//Earth Age Methods

describe('SuperGalc', function() {
  test('should create SuperGalc object', function() {
    const dob = new SuperGalc(new Date("1990, 11, 27"));
    expect(typeof dob).toEqual(typeof new SuperGalc);
  });
})
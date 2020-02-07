import { SuperGalc } from './../src/super-galactic-age-calculator.js';

//Earth Age Methods

describe('SuperGalc', function() {
  test('should create SuperGalc object', function() {
    const dob = 27;
    expect(typeof dob).toEqual(typeof new SuperGalc);
  });
})
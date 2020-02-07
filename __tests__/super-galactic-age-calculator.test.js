import { GalacticCalc } from './../src/super-galactic-age-calculator.js';

//Earth

describe('GalacticCalc', function() {
  let age = new GalacticCalc;

  test('should take in a number for age', function () {
    expect(age.earth(29)).toEqual("alien");
  });

  //Mercury

  //Venus

  //Mars

  //Jupiter
})

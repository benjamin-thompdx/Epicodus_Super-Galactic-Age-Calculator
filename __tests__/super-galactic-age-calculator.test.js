import { GalacticCalc } from './../src/super-galactic-age-calculator.js';

//Earth

describe('GalacticCalc', function() {
  let userInput = new GalacticCalc;

  test('should take in a number for age', function () {
    expect(userInput.earth(29)).toEqual("alien");
  });

  //Mercury

  //Venus

  //Mars

  //Jupiter
})

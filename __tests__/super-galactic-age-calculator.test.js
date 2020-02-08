import { GalacticCalc } from './../src/super-galactic-age-calculator.js';

describe('GalacticCalc', function() {
  let age = new GalacticCalc;

  //Earth
  test('should take in a number for age', function () {
    expect(age.getEarth(29)).toEqual(29);
  });

  //Mercury
  test('should return age for Mercury in Earth years', function () {
    expect(age.getMercury(29)).toEqual(120);
  });

  //Venus
  test('should return age for Venus in Earth years', function () {
    expect(age.getVenus(29)).toEqual(47);
  });
  //Mars

  //Jupiter
})

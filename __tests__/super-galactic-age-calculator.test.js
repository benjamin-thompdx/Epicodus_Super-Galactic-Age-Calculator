import { GalacticCalc } from './../src/super-galactic-age-calculator.js';

describe('GalacticCalc', function() {
  let age = new GalacticCalc;

  //Earth
  test('should take in a number for age', function () {
    expect(age.getEarth(29)).toEqual(29);
  });

  //Mercury Calculations
  test('should return age for Mercury in Earth years', function () {
    expect(age.getMercury(29)).toEqual(120);
  });

  //Venus Calculations
  test('should return age for Venus in Earth years', function () {
    expect(age.getVenus(29)).toEqual(47);
  });

  //Mars Calculations
  test('should return age for Mars in Earth years', function () {
    expect(age.getMars(29)).toEqual(15);
  });

  //Jupiter Calculations
  test('should return age for Jupiter in Earth years', function () {
    expect(age.getJupiter(29)).toEqual(2);
  });
})

import { GalacticCalc } from './../src/super-galactic-age-calculator.js';

describe('GalacticCalc', function() {
  let age = new GalacticCalc;

  //Earth Calculations
  test('should take in a number for age', function () {
    expect(age.getEarth(29)).toEqual(29);
  });

  test('should return the number of years the user has to live based on U.S. 2020 average lifespan 78.93 for Mercury in Earth years', function () {
    expect(age.getLexEarth(29)).toEqual(49);
  });

  test('should return the amount of years the user has lived over the average to Earth years', function () {
    expect(age.getLexEarth(82)).toEqual(-4);
  });

  //Mercury Calculations
  test('should return age for Mercury in Earth years', function () {
    expect(age.getMercury(29)).toEqual(120);
  });

  test('should return the number of years the user has to live based on U.S. 2020 average lifespan 78.93 for Mercury in Earth years', function () {
    expect(age.getLexMercury(29)).toEqual(207);
  });

  test('should return the amount of years the user has lived over the average for Mercury to Earth years', function () {
    expect(age.getLexMercury(82)).toEqual(-13);
  });

  //Venus Calculations
  test('should return age for Venus in Earth years', function () {
    expect(age.getVenus(29)).toEqual(47);
  });

  test('should return the number of years the user has to live based on U.S. 2020 average lifespan 78.93 for Venus in Earth years', function () {
    expect(age.getLexVenus(29)).toEqual(80);
  });

  test('should return the amount of years the user has lived over the average for Venus to Earth years', function () {
    expect(age.getLexVenus(82)).toEqual(-5);
  });

  //Mars Calculations
  test('should return age for Mars in Earth years', function () {
    expect(age.getMars(29)).toEqual(15);
  });

  test('should return the number of years the user has to live based on U.S. 2020 average lifespan 78.93 for Mars in Earth years', function () {
    expect(age.getLexMars(29)).toEqual(26);
  });

  test('should return the amount of years the user has lived over the average for Mars to Earth years', function () {
    expect(age.getLexMars(82)).toEqual(-1);
  });

  //Jupiter Calculations
  test('should return age for Jupiter in Earth years', function () {
    expect(age.getJupiter(29)).toEqual(2);
  });

  test('should return the number of years the user has to live based on U.S. 2020 average lifespan 78.93 for Jupiter in Earth years', function () {
    expect(age.getLexJupiter(29)).toEqual(4);
  });
});
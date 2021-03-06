export class GalacticCalc {
  
  constructor() {
  }

  //Earth
  getEarth(age) {
    let earthAge = Math.floor(age/1);
    return earthAge;
  }

  getLexEarth(age) {
    let exEarthAge = Math.floor((78.93-age)/1);
    return exEarthAge;
  }

  //Mercury
  getMercury(age) {
  let mercuryAge = Math.floor((age*365)/88);
  return mercuryAge;
  }

  getLexMercury(age) {
    let exMercuryAge = Math.floor((78.93-age)*365/88);
    return exMercuryAge;
  }

  //Venus
  getVenus(age) {
    let venusAge = Math.floor((age*365)/225);
    return venusAge;
  }

  getLexVenus(age) {
    let exVenusAge = Math.floor((78.93-age)*365/225);
    return exVenusAge;
  }
  //Mars
  getMars(age) {
    let marsAge = Math.floor((age*365)/687);
    return marsAge;
  }

  getLexMars(age) {
    let exMarsAge = Math.floor((78.93-age)*365/687);
    return exMarsAge;
  }

  //Jupiter
  getJupiter(age) {
    let jupiterAge = Math.floor(age/12);
    return jupiterAge;
  }

  getLexJupiter(age) {
    let exJupiterAge = Math.floor((78.93-age)/12);
    return exJupiterAge;
  }
}
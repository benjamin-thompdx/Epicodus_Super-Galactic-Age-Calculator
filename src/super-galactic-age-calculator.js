export class GalacticCalc {
  
  constructor() {
  }

  getEarth(age) {
    let earthAge = Math.floor(age/1);
    return earthAge;
  }

  getLexEarth(age) {
    let exEarthAge = Math.floor((78.93-age)/1);
    return exEarthAge;
  }

  getMercury(age) {
  let mercuryAge = Math.floor((age*365)/88);
  return mercuryAge;
  }

  getLexMercury(age) {
    let exMercuryAge = Math.floor((78.93-age)*365/88);
    return exMercuryAge;
  }

  getVenus(age) {
    let venusAge = Math.floor((age*365)/225);
    return venusAge;
  }

  getLexVenus(age) {
    let exVenusAge = Math.floor((78.93-age)*365/225);
    return exVenusAge;
  }
  
  getMars(age) {
    let marsAge = Math.floor((age*365)/687);
    return marsAge;
  }

  getLexMars(age) {
    let exMarsAge = Math.floor((78.93-age)*365/687);
    return exMarsAge;
  }

  getJupiter(age) {
    let jupiterAge = Math.floor(age/12);
    return jupiterAge;
  }
}
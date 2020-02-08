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

  getVenus(age) {
    let venusAge = Math.floor((age*365)/225);
    return venusAge;
    }
  
  getMars(age) {
    let marsAge = Math.floor((age*365)/687);
    return marsAge;
    }

  getJupiter(age) {
    let jupiterAge = Math.floor(age/12);
    return jupiterAge;
    }
}
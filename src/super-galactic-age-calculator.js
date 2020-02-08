export class GalacticCalc {
  
  constructor() {
  }

  getEarth(age) {
    let earthAge = Math.floor(age/1);
    return earthAge;
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
}
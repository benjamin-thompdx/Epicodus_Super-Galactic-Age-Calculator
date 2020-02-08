export class GalacticCalc {
  
  constructor() {
  }

  getEarth(age) {
    let earthAge = Math.floor(age/1);
    return earthAge;
  }

  getMercury(age) {
  let earthAge = Math.floor((age*365)/88);
  return earthAge;
  }
}
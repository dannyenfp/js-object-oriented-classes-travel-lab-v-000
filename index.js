class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    let startYear = new Date(year);
    debugger;
    return (year - this.startDate);
  }
}


class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    debugger;
    let startYear = this.startDate.getFullYear();
    return (year - this.startDate);
  }
}


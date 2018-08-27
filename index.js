class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    let endYear = new Date(year, 1, 1);
    return this.startDate;
  }
}

//Math.round((endYear - this.startDate)/(1000*60*60*24*365.25));
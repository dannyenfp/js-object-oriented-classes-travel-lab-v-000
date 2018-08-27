class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    let endYear = new Date(year, 0, 1);
    return endYear - this.startYear;
  }
}

//Math.round((endYear - this.startYear)/(1000*60*60*24*365.25));
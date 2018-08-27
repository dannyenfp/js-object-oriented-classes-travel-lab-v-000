class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    let startYear = startDate.getFullYear();
    return (year - this.startDate);
  }
}


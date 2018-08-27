class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    let begYear = new Date(year);
    debugger;
    
    return (begYear - this.startDate);
  }
}


class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    let endYear = new Date(year, 0, 1);
    return (endYear - startYear)/(1000*60*60*24*365);
  }
}

  return Math.round((secondDate-firstDate)/(1000*60*60*24))

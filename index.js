class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    let endYear = new Date(year, 1, 1);
    return Math.round((endYear - this.startDate)/(1000*60*60*24*365.25));
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() { 
    let vBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let hBlocks = 0;
    
    return vBlocks + hBlocks;
  } 
}

describe('blocksTravelled', function() {
    it('calculates the number of blocksTravelled', function() {
      let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
      expect(route.blocksTravelled()).to.equal(11)
    })



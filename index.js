class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    const thisYear = new Date(year).getFullYear();
    return thisYear - this.startDate.getFullYear() + 1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
 		let avenues = [
 		  '1st Avenue',
 		  '2nd Avenue',
 		  '3rd Avenue',
 		  'Lexington Avenue',
 		  'Park',
 		  'Madison Avenue',
 		  '5th Avenue'
 		];
  }
}






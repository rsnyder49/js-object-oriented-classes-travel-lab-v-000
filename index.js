class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    const thisYear = new Date(year).getFullYear();
    return thisYear - this.startDate.getFullYear
  }
}

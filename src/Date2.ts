export default class Date2 extends Date {
  public year: number;
  public month: number;
  public day: number;
  public time: string;

  private monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  private dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor(...args: any) {
    super(args);
    this.year = this.getFullYear();
    this.month = this.getMonth() + 1;
    this.day = this.getDate();
    this.time = this.toLocaleTimeString();
  }

  public getMonthName = () => {
    return this.monthNames[this.getMonth()];
  }

  public getDayName = () => {
    return this.dayNames[this.getDay()];
  }

  public getSecondsSince = (date:Date) => {
    return Math.floor(Math.abs(date.getTime() - this.getTime()) / (1000));
  }

  public getMinutesSince = (date:Date) => {
    return Math.floor(Math.abs(date.getTime() - this.getTime()) / (60*1000));
  }

  public getHoursSince = (date:Date) => {
    return Math.floor(Math.abs(date.getTime() - this.getTime()) / (60*60*1000));
  }

  public getDaysSince = (date:Date) => {
    return Math.floor(Math.abs(date.getTime() - this.getTime()) / (24*1000*3600));
  }

  public getMonthsSince = (date:Date) => {
    const months1 = this.getFullYear() * 12 + (this.getMonth() + 1);
    const months2 = date.getFullYear() * 12 + (date.getMonth() + 1);
    return Math.abs(months1 - months2);
  }
  
  public getYearsSince = (date:Date) => {
    return Math.abs(date.getFullYear() - this.getFullYear());
  }

  public getRoundedTimeSince = (date:Date) => {
    if (this.getYearsSince(date) > 0) {
      return `${this.getYearsSince(date)} years`;
    } else if (this.getMonthsSince(date) > 0) {
      return `${this.getMonthsSince(date)} months`;
    } else if (this.getDaysSince(date) > 0) {
      return `${this.getDaysSince(date)} days`;
    } else if (this.getHoursSince(date) > 0) {
      return `${this.getHoursSince(date)} hours`;
    } else if (this.getMinutesSince(date) > 0) {
      return `${this.getMinutesSince(date)} minutes`;
    } else {
      return `${this.getSecondsSince(date)} seconds`;
    }
  }
}

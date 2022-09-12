import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeapYearService } from './leapyear-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  resultMessage: string = '';
  todayYear: number = new Date().getFullYear();
  leapYear: number = 0;
  isLeapYear: boolean = false;
  isNumber: boolean = true;

  constructor(private leapYearChecker: LeapYearService) {}

  onCheckYear(form: NgForm) {
    const leapyear: number = Number(form.value.leapyear);
    this.leapYear = leapyear;

    if (Number.isNaN(leapyear)) {
      this.isNumber = false;
    } else {
      const checkedYear = this.leapYearChecker.yearChecker(leapyear);

      if (checkedYear) {
        this.isLeapYear = true;
      } else {
        this.isLeapYear = false;
      }
    }
    this.onShowResult();
  }

  onShowResult() {
    if (this.isLeapYear == true && this.todayYear > this.leapYear) {
      this.resultMessage = `${this.leapYear} was a leapyear`;
    } else if (this.isLeapYear == false && this.todayYear > this.leapYear) {
      this.resultMessage = `${this.leapYear} was not a leapyar`;
    } else if (this.isLeapYear == true && this.todayYear < this.leapYear) {
      this.resultMessage = `${this.leapYear} will be a leapyear`;
    } else if (this.isLeapYear == false && this.todayYear < this.leapYear) {
      this.resultMessage = `${this.leapYear} will not be a leapyear`;
    } else if (this.isLeapYear == true && this.todayYear == this.leapYear) {
      this.resultMessage = `${this.leapYear} is a leapyear`;
    } else if (this.isLeapYear == false && this.todayYear == this.leapYear) {
      this.resultMessage = `${this.leapYear} is not a leapyear`;
    } else if (!this.isNumber) {
      this.resultMessage = `Come'oon! This is not a year :)`;
    }
  }
}

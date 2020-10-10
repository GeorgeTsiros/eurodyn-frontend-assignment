import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'F1 World';
  atHome: boolean = true;
  atResults: boolean = false;
  atWinners: boolean = false;
  atContact: boolean = false;

  constructor() { }

  ngOnInit() { }

  showHome() {
    this.atHome = true;
    this.atResults = false;
    this.atWinners = false;
    this.atContact = false;
  }

  showResults() {
    this.atHome = false;
    this.atResults = true;
    this.atWinners = false;
    this.atContact = false;
  }

  showWinners() {
    this.atHome = false;
    this.atResults = false;
    this.atWinners = true;
    this.atContact = false;
  }

  showContact() {
    this.atHome = false;
    this.atResults = false;
    this.atWinners = false;
    this.atContact = true;
  }
}

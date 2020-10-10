import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() home: EventEmitter<any> = new EventEmitter();
  @Output() results: EventEmitter<any> = new EventEmitter();
  @Output() winners: EventEmitter<any> = new EventEmitter();
  @Output() contact: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  goToResults() {
    this.results.emit();
  }

  goToWinners() {
    this.winners.emit();
  }

  goToContact() {
    this.contact.emit();
  }

  goToHome() {
    this.home.emit();
  }
}

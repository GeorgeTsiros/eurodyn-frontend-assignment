import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ConstactComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      recipient: new FormControl({ value: '', disabled: false }, Validators.required),
      subject: new FormControl({ value: '', disabled: false }, Validators.required),
      description: new FormControl({ value: '', disabled: false }, Validators.required),
    });
  }

  send() {
    this.helperService.sendMessage().subscribe(
      (response) => {
        this.messageForm.reset();
      },
      (error) => {
        console.log("Send Message Error: ", error);
      }
    );
  }
}

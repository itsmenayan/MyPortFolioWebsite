import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public now: Date = new Date();

    constructor() {
        setInterval(() => {
          this.now = new Date();
        }, 1);
    }

  ngOnInit() {
  }

}
